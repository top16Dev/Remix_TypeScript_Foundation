import * as Yup from 'yup';
import { LinksSchema } from './generic';
import { checkUsernameUniqueness } from 'queries/creators';
import { VALID_URL_REGEX } from 'utils/urls';
import { debounce } from 'utils/helpers';

export const debouncedUsernameLookup = debounce(async function ({
  value,
  resolve,
  excludedValue,
}) {
  const res = await checkUsernameUniqueness({
    username: value,
    excludedValue,
  });
  if (res.ok) {
    const { isTaken } = await res.json();
    return resolve(!isTaken);
  } else {
    return resolve(false);
  }
},
400);

export const createUserSchema = ({ currentUsername }) =>
  Yup.object().shape({
    name: Yup.string()
      .min(1, 'Must be at least one character')
      .max(80, 'Cannot be more than 80 characters')
      .nullable(),
    username: Yup.string()
      .min(1, 'Must be at least one character')
      .max(50, 'Cannot be more than 50 characters')
      .matches(
        /^(?=.*[A-Z0-9])^[\w._-]+$/gi,
        'Must contain at least 1 letter or number. Can only contain letters, numbers, periods, hyphens and underscores'
      )
      .nullable()
      .required('A username is required')
      .test(
        'checkUniqueness',
        ({ value }) => {
          return value ? `Username ${value} is already taken` : null;
        },
        (value) => {
          return new Promise((resolve) =>
            debouncedUsernameLookup({
              value,
              resolve,
              excludedValue: currentUsername,
            })
          );
        }
      )
      .nullable(),
    bio: Yup.string().max(200, 'Cannot be more than 200 characters').nullable(),
    coverImageUrl: Yup.string()
      .url('Is not a valid URL')
      .matches(VALID_URL_REGEX, 'Must be a valid URL')
      .nullable(),
    profileImageUrl: Yup.string()
      .url('Is not a valid URL')
      .matches(VALID_URL_REGEX, 'Must be a valid URL')
      .nullable(),
    links: LinksSchema,
  });
