/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from 'react';
import { T } from 'ramda';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
// import { useRouter } from 'next/router';

import TransactionFlow from '~/components/transactions/generic/TransactionFlow';
// import BuyNowSuccess from '~/components/transactions/buy-now/BuyNowSuccess';
import { getTransactionLayout } from '~/components/transactions/generic/TransactionLayoutHOC';

// import useBuyNowTransaction, {
//   BuyNowVariables,
// } from '~/hooks/web3/transactions/use-buy-now';
// import { BuyNowFormValues } from '~/components/transactions/buy-now/types';
// import useSegmentEvent, {
//   SegmentWeb3Payload,
//   SegmentMarketPayload,
// } from '~/hooks/analytics/use-segment-event';

import useSegmentTransaction from '~/hooks/analytics/use-track-transaction';
import useTransactionEventHandler from '~/hooks/web3/transactions/use-transaction-event-handler';
// import useReferral from '~/hooks/web3/use-referral';
// import useBalances from '~/hooks/web3/use-balances';
// import { useOpenBuyNow } from '~/hooks/queries/hasura/markets/use-buy-now';
import { useArtworkByContractTokenIdFromRouter } from '~/hooks/queries/hasura/artworks/use-artwork-by-contract-token-id';

import { BUY_NOW_MIN_PRICE, createBuyNowSchema } from '~/schemas/buy-now';

import { areKeysEqual } from '~/utils/users';

import { transactionCopy } from '~/lib/transaction-copy';
import { getFirstValue, isAllTrue } from '~/utils/helpers';
import TransactionFields from '~/components/transactions/generic/TransactionFields';
import { TransactionLayout } from '~/components/layouts/TransactionLayoutWithCardV2';
import { PageType } from '~/types/page';
import { LineItem } from '~/utils/transactions';

BuyNow.getLayout = getTransactionLayout('Buy Now');

// type SegmentWeb3MarketPayload = SegmentMarketPayload & SegmentWeb3Payload;

export default function BuyNow() {
  // const router = useRouter();

  // const { data: artwork, isLoading: isArtworkLoading } =
  //   useArtworkByContractTokenIdFromRouter({
  //     refetchOnWindowFocus: false,
  //   });

  // const referralAddress = useReferral({
  //   contractAddress: artwork?.contractAddress,
  // });

  // const defaultParams = {
  //   contractAddress: artwork?.contractAddress,
  //   tokenId: artwork?.tokenId,
  // };

  // const { data: buyNowData, refetch: refetchGetBuyNowPrice } = useOpenBuyNow(
  //   defaultParams,
  //   { refetchOnWindowFocus: false, refetchOnMount: false }
  // );

  // const [{ txHash, isSuccess }, handleTransaction] = useTransactionEventHandler(
  //   { onSuccess: () => refetchGetBuyNowPrice() }
  // );

  // const buyNowPrice = buyNowData?.amountInETH;
  // const hasBuyNowPrice = Boolean(buyNowData);

  // const { data: user } = useAccount();
  // const [sendSegmentEvent] = useSegmentEvent();
  // const canFireViewEvents = isAllTrue([buyNowData, artwork]);

  // const marketEventPayload: SegmentMarketPayload = {
  //   buyerAddress: buyNowData?.buyer,
  //   contractAddress: buyNowData?.contractAddress,
  //   creatorAddress: artwork?.publicKey,
  //   ethAmount: buyNowData?.amountInETH,
  //   sellerAddress: buyNowData?.seller,
  //   tokenId: buyNowData?.tokenId,
  // };
  // const { data: balanceData } = useBalances({ publicKey: user?.address });
  // const balance = balanceData?.ethBalance;

  // const marketEventWeb3Payload: SegmentWeb3MarketPayload = {
  //   ...marketEventPayload,
  //   userType: 'buyer',
  //   marketType: 'buy_now',
  //   type: 'market',
  // };

  // useSegmentTransaction<SegmentMarketPayload>({
  //   isReady: canFireViewEvents,
  //   viewedEventName: 'buy_now_viewed',
  //   payload: marketEventPayload,
  // });

  // useSegmentTransaction<SegmentWeb3MarketPayload>({
  //   isReady: canFireViewEvents,
  //   viewedEventName: 'web3_action_viewed',
  //   payload: marketEventWeb3Payload,
  // });

  // const {
  //   mutateAsync: buyNow,
  //   reset: resetBuyNow,
  //   error: buyNowError,
  // } = useBuyNowTransaction({
  //   onSuccess: () => {
  //     sendSegmentEvent<SegmentMarketPayload>({
  //       eventName: 'buy_now_accepted',
  //       payload: marketEventPayload,
  //     });
  //     sendSegmentEvent<SegmentWeb3MarketPayload>({
  //       eventName: 'web3_action_accepted',
  //       payload: marketEventWeb3Payload,
  //     });
  //   },
  // });

  // const handleSubmit = useCallback(
  //   async (values: BuyNowVariables) => {
  //     const tx = await buyNow(values);
  //     await handleTransaction(tx);
  //     await router.push({
  //       pathname: router.pathname,
  //       query: { ...router.query, txHash: tx.hash, price: buyNowPrice },
  //     });
  //   },
  //   [handleTransaction, buyNow, router, buyNowPrice]
  // );

  // const copy = transactionCopy['buy-now-accept'];

  // const buyNowPriceParam = getFirstValue(router.query.price);

  const isSuccess = false;
  const isArtworkLoading = false;
  const auctionId = "auctionId";
  const amount : LineItem = {
    value: 0,
    label: 'Balance'
  }
  const balance = 1.3;
  return (
    // <TransactionFlow<BuyNowFormValues>
    //   txHash={txHash}
    //   transactionState={{
    //     loading: {
    //       isLoading: isArtworkLoading,
    //     },
    //     error: {
    //       error: buyNowError,
    //       description: copy.error.description,
    //       onReset: resetBuyNow,
    //     },
    //     pending: {
    //       title: copy.pending.title,
    //       description: copy.pending.description,
    //     },
    //     success: {
    //       isSuccess,
    //       component: () => (
    //         <BuyNowSuccess
    //           buyNowPrice={Number(buyNowPriceParam)}
    //           artwork={artwork}
    //         />
    //       ),
    //     },
    //   }}
    //   formProps={{
    //     onSubmit: handleSubmit,
    //     validationSchema: createBuyNowSchema(BUY_NOW_MIN_PRICE, balance),
    //     initialValues: {
    //       contractAddress: artwork?.contractAddress,
    //       tokenId: artwork?.tokenId,
    //       isOwner: areKeysEqual([artwork?.ownerPublicKey, user?.address]),
    //       referrer: referralAddress ?? ethers.constants.AddressZero,
    //       hasBuyNowPrice,
    //       buyNowPrice,
    //     },
    //   }}
    //   steps={[
    //     [
    //       T,
    //       () => {
    //         const amount = {
    //           label: 'Available Balance',
    //           value: balance || 0,
    //         };
    //         return (
    //           <TransactionFields
    //             amount={amount}
    //             lineItems={[amount]}
    //             transactionType="buy-now-accept"
    //           />
    //         );
    //       },
    //     ],
    //   ]}
    // />
    <TransactionLayout title={'buy-now-accept'} backgroundColor={undefined} pageType={PageType.maximal} artworkQueryType={'uuid'}>
    <TransactionFields
      amount={amount}
      lineItems={[amount]}
      transactionType="buy-now-accept"
    />
</TransactionLayout>
  );
}
