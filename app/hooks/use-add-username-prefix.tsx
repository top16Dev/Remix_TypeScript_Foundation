// import { useRouter } from 'next/router';
import {useLocation} from '@remix-run/react'
import { useEffect } from 'react';

import { isAddress } from '@ethersproject/address';

import { getFirstValue } from '~/utils/helpers';

export default function useAddUsernamePrefix(): void {
  // const router = useRouter();
  const router = useLocation();

  // useEffect(() => {
  //   const hasNoAtSymbol = new RegExp(/^[^@]/);
  //   const username = getFirstValue(router.query.username);
  //   const isEthAddress = isAddress(username);

  //   if (hasNoAtSymbol.test(username) && !isEthAddress && router.isReady) {
  //     const newPath = router.asPath.replace('/', '/@');
  //     // We use replace instead of push as we dont want the redirect to be added to the history stack
  //     router.replace(newPath, null, { shallow: true });
  //   }
  // }, [router]);
}
