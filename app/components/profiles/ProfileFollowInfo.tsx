/* eslint-disable @typescript-eslint/consistent-type-imports */
import ProfileFollowState from './ProfileFollowState';
import ProfileMutualFollows from './ProfileMutualFollows';

// import { UserFollowState } from '~/graphql/hasura/queries/user-follow-state.generated';
import useWalletSession from '~/hooks/web3/wallet/use-wallet-session';
// import useUserFollowState from '~/hooks/queries/hasura/users/use-user-follow-state';

import { isAllTrue } from '~/utils/helpers';

interface ProfileFollowInfoProps {
  publicKey: string;
  // userFollowState: UserFollowState['user'];
  userFollowState: any;
}

export default function ProfileFollowInfo(
  props: ProfileFollowInfoProps
): JSX.Element {
  const { publicKey, userFollowState } = props;

  // const { data: user, isLoading: isUserLoading } = useWalletSession();

  // const currentUserPublicKey = user?.publicAddress;

  // const { data: userFollowData } = useUserFollowState(
  //   { publicKey, currentUserPublicKey },
  //   {
  //     enabled: isAllTrue([!isUserLoading]),
  //     initialData: { user: userFollowState },
  //   }
  // );
  const currentUserPublicKey = "asdf1f";
  const user = {

  }
  return (
    <>
      <ProfileFollowState
        publicKey={publicKey}
        currentUserPublicKey={currentUserPublicKey}
        // userFollowState={userFollowData}
      />
      <ProfileMutualFollows
        // isQueryEnabled={isAllTrue([publicKey, !isUserLoading])}
        isQueryEnabled={true}
        publicKey={publicKey}
        currentUserPublicKey={currentUserPublicKey}
        // followerCount={userFollowData?.followerCount}
        followerCount={12}
      />
    </>
  );
}
