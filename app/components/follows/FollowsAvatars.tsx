/* eslint-disable @typescript-eslint/no-unused-vars */
import { isAnyTrue, notEmptyOrNil } from '~/utils/helpers';
import { maybeGetAddressOrEmpty } from '~/utils/users';

import UserStack, {
  UserStackInteractive,
  UserStackSkeleton,
} from './UserStack';

import { useUserMutualFollows } from '~/graphql/hasura/queries/user-mututal-followers.generated';

interface FollowsAvatarsProps {
  publicKey: string;
  currentUserPublicKey: string;
  isQueryEnabled: boolean;
  isInteractive: boolean;
  avatarsCount: number;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function FollowsAvatars(props: FollowsAvatarsProps) {
  const {
    publicKey,
    currentUserPublicKey,
    isQueryEnabled,
    isInteractive,
    avatarsCount,
  } = props;

  // const { data, isLoading } = useUserMutualFollows(
  //   {
  //     publicKey,
  //     currentUserPublicKey: maybeGetAddressOrEmpty(currentUserPublicKey),
  //     limit: avatarsCount,
  //     offset: 0,
  //   },
  //   { enabled: isQueryEnabled }
  // );

  // const isLoadingState = isAnyTrue([isLoading, !data?.user]);
  const isLoadingState = false;

  if (isLoadingState) {
    return <UserStackSkeleton />;
  }

  // const hasMutualFollows = notEmptyOrNil(data.user.mutualFollows);
  const hasMutualFollows = true;

  // const follows = hasMutualFollows
  //   ? data.user.mutualFollows.map((follow) => follow.user)
  //   : data.user.follows.map((follow) => follow.user);
  const follows = [
    {
      publicKey : "111",
    },
    {
      publicKey : "222",
    }
  ];
  return isInteractive ? (
    <UserStackInteractive users={follows} />
  ) : (
    <UserStack users={follows} />
  );
}
