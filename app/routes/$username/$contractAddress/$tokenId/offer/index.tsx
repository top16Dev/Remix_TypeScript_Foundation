/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from 'react';
import { max, T } from 'ramda';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';

import OfferPlaceSuccess from '~/components/transactions/offer/OfferPlaceSuccess';
import TransactionFlow from '~/components/transactions/generic/TransactionFlow';
import { getTransactionLayout } from '~/components/transactions/generic/TransactionLayoutHOC';

import { createOfferSchema } from '~/schemas/offer';
// import { MakeOfferFormValues } from '~/components/transactions/offer/types';

import { useArtworkByContractTokenIdFromRouter } from '~/hooks/queries/hasura/artworks/use-artwork-by-contract-token-id';
import useTransactionEventHandler from '~/hooks/web3/transactions/use-transaction-event-handler';

// import useMakeOffer from '~/hooks/web3/transactions/use-make-offer';
// import useBalances from '~/hooks/web3/use-balances';
// import useGetMinOfferAmount from '~/hooks/web3/transactions/use-get-min-offer-amount';
// import useReferral from '~/hooks/web3/use-referral';
import useSegmentTransaction from '~/hooks/analytics/use-track-transaction';

import { areKeysEqual } from '~/utils/users';
import { isAllTrue, isAnyTrue } from '~/utils/helpers';
import { transactionCopy } from '~/lib/transaction-copy';
// import { MIN_MARKET_AMOUNT } from '~/lib/constants';
// import useSegmentEvent, {
//   SegmentWeb3Payload,
//   SegmentMarketPayload,
// } from '~/hooks/analytics/use-segment-event';
import { getBalanceBreakdown, LineItem } from '~/utils/transactions';
import TransactionFields from '~/components/transactions/generic/TransactionFields';
import { TransactionLayout } from '~/components/layouts/TransactionLayoutWithCardV2';
import { PageType } from '~/types/page';

MakeOffer.getLayout = getTransactionLayout('Make offer');

// type SegmentWeb3MarketPayload = SegmentWeb3Payload & SegmentMarketPayload;

export default function MakeOffer() {
  // const [{ txHash, isSuccess }, handleTransaction] =
  //   useTransactionEventHandler();

  // const { data: artwork, isLoading: isArtworkLoading } =
  //   useArtworkByContractTokenIdFromRouter({
  //     refetchOnWindowFocus: false,
  //   });

  // const defaultParams = {
  //   contractAddress: artwork?.contractAddress,
  //   tokenId: artwork?.tokenId,
  // };
  // const referralAddress = useReferral({
  //   contractAddress: artwork?.contractAddress,
  // });

  // const { data: minOfferAmount, isLoading: isMinOfferAmountLoading } =
  //   useGetMinOfferAmount(defaultParams);

  // const { data: user } = useAccount();

  // const { data: balancesData } = useBalances({
  //   publicKey: user?.address,
  // });
  // const [sendSegmentEvent] = useSegmentEvent();
  // const isEventReady = isAllTrue([user, artwork]);

  // const marketPayload: SegmentMarketPayload = {
  //   buyerAddress: user?.address,
  //   contractAddress: artwork?.contractAddress,
  //   creatorAddress: artwork?.publicKey,
  //   ethAmount: null,
  //   sellerAddress: artwork?.ownerPublicKey,
  //   tokenId: artwork?.tokenId,
  // };

  // const web3Payload: SegmentWeb3MarketPayload = {
  //   ...marketPayload,
  //   userType: 'buyer',
  //   marketType: 'offer',
  //   type: 'market',
  // };

  // useSegmentTransaction<SegmentMarketPayload>({
  //   viewedEventName: 'offer_viewed',
  //   isReady: isEventReady,
  //   payload: marketPayload,
  // });
  // useSegmentTransaction<SegmentWeb3MarketPayload>({
  //   viewedEventName: 'web3_action_viewed',
  //   isReady: isEventReady,
  //   payload: web3Payload,
  // });

  // const {
  //   mutateAsync: makeOffer,
  //   reset: resetMakeOffer,
  //   error: makeOfferError,
  // } = useMakeOffer({
  //   onSuccess: (_, variables) => {
  //     const successPayload = {
  //       ...marketPayload,
  //       ethAmount: Number(variables.amount),
  //     };

  //     sendSegmentEvent<SegmentMarketPayload>({
  //       eventName: 'offer_made',
  //       payload: successPayload,
  //     });
  //     sendSegmentEvent<SegmentWeb3MarketPayload>({
  //       eventName: 'web3_action_accepted',
  //       payload: {
  //         ...web3Payload,
  //         ...successPayload,
  //       },
  //     });
  //   },
  // });

  // const handleSubmit = useCallback(
  //   async (values: MakeOfferFormValues) => {
  //     const tx = await makeOffer(values);
  //     await handleTransaction(tx);
  //   },
  //   [handleTransaction, makeOffer]
  // );

  // const copy = transactionCopy['offer-place'];

  // const availableBalance =
  //   balancesData?.ethBalance + balancesData?.availableFethBalance;

  const isSuccess = false;
  const isArtworkLoading = false;
  const auctionId = "auctionId";
  const amount : LineItem = {
    value: 0,
    label: 'amountlabel'
  }
  const balance = 1.3;
  return (
    // <TransactionFlow<MakeOfferFormValues>
    //   txHash={txHash}
    //   transactionState={{
    //     loading: {
    //       isLoading: isAnyTrue([isArtworkLoading, isMinOfferAmountLoading]),
    //     },
    //     error: {
    //       error: makeOfferError,
    //       description: copy.error.description,
    //       onReset: resetMakeOffer,
    //     },
    //     pending: {
    //       title: copy.pending.title,
    //       description: copy.pending.description,
    //     },
    //     success: {
    //       isSuccess,
    //       component: () => <OfferPlaceSuccess artwork={artwork} />,
    //     },
    //   }}
    //   formProps={{
    //     onSubmit: handleSubmit,
    //     validationSchema: createOfferSchema(
    //       // returns the max of these two numbers
    //       max(MIN_MARKET_AMOUNT, minOfferAmount),
    //       availableBalance
    //     ),
    //     initialValues: {
    //       contractAddress: artwork?.contractAddress,
    //       tokenId: artwork?.tokenId,
    //       amount: '',
    //       balance: balancesData?.ethBalance,
    //       // when minOfferAmount is 0 return null
    //       maxOffer: minOfferAmount || null,
    //       isOwner: areKeysEqual([artwork?.ownerPublicKey, user?.address]),
    //       fethBalance: balancesData?.availableFethBalance,
    //       referrer: referralAddress ?? ethers.constants.AddressZero,
    //     },
    //   }}
    //   steps={[
    //     [
    //       T,
    //       (formikState) => {
    //         const marketplaceBalance = Number(formikState.values.fethBalance);
    //         const totalBalance = formikState.values.balance;
    //         const balanceItems = getBalanceBreakdown(
    //           marketplaceBalance,
    //           totalBalance
    //         );
    //         return (
    //           <TransactionFields
    //             amount={{
    //               label: 'Available Balance',
    //               value: formikState.values.balance,
    //             }}
    //             lineItems={balanceItems}
    //             transactionType="offer-place"
    //           />
    //         );
    //       },
    //     ],
    //   ]}
    // />
    <TransactionLayout title={'offer-place'} backgroundColor={undefined} pageType={PageType.maximal} artworkQueryType={'uuid'}>
    <TransactionFields
      amount={{
        label: 'Available Balance',
        value: 2.3,
      }}
      // lineItems={balanceItems}
      lineItems={[amount]}
      transactionType="offer-place"
    />
    </TransactionLayout>
  );
}
