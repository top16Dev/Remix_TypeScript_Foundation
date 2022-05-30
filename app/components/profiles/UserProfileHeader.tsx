/* eslint-disable @typescript-eslint/consistent-type-imports */
import Flex from '~/components/base/Flex';
import GradientUsername from './GradientUsername';
import CreatorName from '~/components/creators/CreatorName';

// import { getUsernameOrAddressInfo } from '~/utils/helpers';

import Account from '~/types/Account';

interface UserProfileHeaderProps {
  // user: Account;
}

export default function UserProfileHeader(
  props: UserProfileHeaderProps
): JSX.Element {
  // const { user } = props;

  // const { usernameOrAddress, hasUsername, nameOrUsername, hasName } =
  //   getUsernameOrAddressInfo(user);
  const nameOrUsername = "asdfs";
  const usernameOrAddress = "3fasdf";
  const hasName = true;
  const hasUsername = true;
  return (
    <Flex
      css={{
        minWidth: 0,
        alignItems: 'center',
        flexDirection: 'column',
        '@bp1': {
          alignItems: 'flex-start',
        },
      }}
    >
      {hasName && <CreatorName>{nameOrUsername}</CreatorName>}
      {hasUsername && <GradientUsername>{usernameOrAddress}</GradientUsername>}
    </Flex>
  );
}
