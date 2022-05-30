/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useRouter } from 'next/router';
import { DESCRIPTION, TITLE, OG_IMAGE } from '~/utils/constants/meta';
import HeaderComposed from '~/components/headers/HeaderComposed';

import useWalletSession from '~/hooks/web3/wallet/use-wallet-session';
import useUserByPublicKey from '~/hooks/queries/use-user-by-public-key';
import useUserActivityCount from '~/hooks/queries/hasura/use-user-activity-count';

import { isAnyTrue } from '~/utils/helpers';

import { PageColorMode, PageType } from '~/types/page';
import MinimalLoggedInHeader from './MinimalLoggedInHeader';

interface HeaderProps {
  mode: PageColorMode;
  headerMode: PageColorMode;
  absolute: boolean;
  type: PageType;
  title: string;
}

export default function Header(props: HeaderProps): JSX.Element {
  const {
    mode = PageColorMode.light,
    headerMode = PageColorMode.light,
    absolute = false,
    title = TITLE,
    type,
  } = props;

  const isDark = [mode, headerMode].includes(PageColorMode.dark);

  const color = isDark ? '#fff' : '#000';
  // const { data: user, isLoading: isUserLoading } = useWalletSession();
  // const router = useRouter();
  // const publicAddress = user?.publicAddress;
  const publicAddress = 1;
  // const { data: serverUserData } = useUserByPublicKey(
  //   { publicKey: publicAddress },
  //   { refetchOnWindowFocus: false }
  // );
  // const { data: activityCount, isLoading: isActivityCountLoading } =
  //   useUserActivityCount(
  //     { publicKey: publicAddress },
  //     { enabled: Boolean(publicAddress) }
  //   );
  const activityCount = 1;
  // const isApprovedCreator = serverUserData?.user?.isApprovedCreator;
  const isApprovedCreator = false;
  // const isLoading = isAnyTrue([
  //   isActivityCountLoading,
  //   isUserLoading,
  //   !router.isReady,
  // ]);
  const isLoading = false;
  // TODO: glue this into HeaderComposed
  const sharedHeaderProps = {
    absolute : absolute,
    color : color,
    mode: headerMode,
    isDark : isDark,
  };
  if (type === PageType.minimalLoggedIn) {
    return (
      <MinimalLoggedInHeader
        isApprovedCreator={isApprovedCreator}
        {...sharedHeaderProps}
      />
    );
  }

  return (
    <HeaderComposed
    // isLoading={false} isConnected={false} isApprovedCreator={false} 
    key="Header"
    {...sharedHeaderProps}
    isLoading={isLoading}
    // isConnected={Boolean(publicAddress)}
    isConnected={false}
    isApprovedCreator={isApprovedCreator}
    activityCount={activityCount}
    />
  );
}
