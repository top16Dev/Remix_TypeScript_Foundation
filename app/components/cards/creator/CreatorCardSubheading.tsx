/* eslint-disable @typescript-eslint/consistent-type-imports */
import Flex from '~/components/base/Flex';
import Text from '~/components/base/Text';

// import Account from '~/types/Account';

// import { getUsernameOrAddressInfo } from '~/utils/helpers';

interface CreatorCardSubheadingProps {
  // user: Account;
}

export default function CreatorCardSubheading(
  props: CreatorCardSubheadingProps
): JSX.Element {
  // const { user } = props;

  // const { isAddress, usernameOrAddress, hasName } =
  //   getUsernameOrAddressInfo(user);
  
  const isAddress = 1;
  const usernameOrAddress = "@123123asf";
  const nameOrUsername = "asfab12ea";
  const hasName = 1;
  // if (isAddress || !hasName) {
  //   return null;
  // }

  return (
    <Flex>
      <Text size={3} color="rainbow" weight={600}>
        {usernameOrAddress}
      </Text>
    </Flex>
  );
}
