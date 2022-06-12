/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useField } from 'formik';
import { InputHTMLAttributes, ReactNode } from 'react';
import { ComponentProps } from '@stitches/react';

import Box from '~/components/base/Box';
import Text from '~/components/base/Text';
import InputV2 from '~/components/base/InputV2';
import LabelWrapper from './LabelWrapper';

import { notEmptyOrNil } from '~/utils/helpers';

// import { PartialPick } from '~/types/utils';

type StitchesInputProps = ComponentProps<typeof InputV2>;
// type InputProps = InputHTMLAttributes<HTMLInputElement>;

// type RequiredInputProps = Pick<InputProps, 'name'>;
// type OptionalInputProps = PartialPick<
//   InputProps,
//   'placeholder' | 'required' | 'type' | 'disabled'
// >;

// interface TextFieldProps extends RequiredInputProps, OptionalInputProps {
//   css?: StitchesInputProps['css'];
//   label?: string;
//   meta?: ReactNode;
// }
interface TextFieldProps{
  css?: StitchesInputProps['css'];
  label?: string;
  meta?: ReactNode;
  placeholder:string;
  name:string;
  type?:string;
}
export default function TextFieldV2<T extends string | number>(
  props: TextFieldProps
): JSX.Element {
  const {
    name,
    placeholder,
    label='label',
    // leverage the pre-existing 'required' prop
    // from inputs to control the optional state
    // required = true,
    // ability override the input type (e.g. number)
    type = 'text',
    // placeholder prop for now but can be overriden by formik
    // disabled = false,
    // allow overriding css to be passed to the input
    css,
    // allow custom meta component to be passed in
    // meta: metaComponent,
  } = props;
  // const type = 'text';
  const required = true;
  const disabled = false;
  const isInvalid = false;
  // const [field, meta] = useField<T>(name);

  // const isInvalid = notEmptyOrNil(meta.error) && meta.touched;

  const isOptional = !required;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Box css={{ ...css }}>
      {/* <LabelWrapper name={name} label={label} isOptional={isOptional} /> */}
      <Box css={{ position: 'relative' }}>
        <InputV2
          isInvalid={isInvalid}
          placeholder={placeholder}
          type={type}
          required={required}
          disabled={disabled}
          // {...field}
        />
        {/* {metaComponent} */}
      </Box>

      {isInvalid && (
        <Text
          size={0}
          weight="semibold"
          css={{ color: '$red100', paddingTop: '$3' }}
        >
          {/* {meta.error} */}
        </Text>
      )}
    </Box>
  );
}
