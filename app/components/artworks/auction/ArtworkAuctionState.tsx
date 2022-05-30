/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useState } from 'react';
import { useHarmonicIntervalFn } from 'react-use';

import {
  ArtworkFragmentExtended,
  BidFragment,
} from '~/graphql/hasura/hasura-fragments.generated';

import { AuctionWithBids } from '~/types/Auction';
import { ArtworkEvent } from '~/types/Event';
import Account from '~/types/Account';

import ArtworkAuctionPrice from './ArtworkAuctionPrice';
import AuctionStateOwnedBy from './auction-state/AuctionStateOwnedBy';
import AuctionStateGeneric from './auction-state/AuctionStateGeneric';
import Text from '~/components/base/Text';
// import { renderArtworkAuctionCountdown } from '~/components/artworks/auction/ArtworkAuctionCountdown';

import { getMinutesRemaining, parseDateToUnix } from '~/utils/dates/dates';
import { isAuctionEnded, isAuctionNotYetListed } from '~/utils/auctions/auctions';
import {
  isPrivateSaleOwnerMostRecent,
  isTransferredOwnerMostRecent,
} from '~/utils/artwork/artwork';
import { buildBidPath } from '~/utils/bids/bids';

import {
  SOLD_FOR_LABEL,
  CURRENT_BID_LABEL,
  RESERVE_PRICE_LABEL,
} from '~/lib/constants';
import { AlgoliaArtwork } from '~/types/Algolia';

interface ArtworkAuctionStateProps {
  // auction: AuctionWithBids;
  // currentUserBid: BidFragment;
  artworkHistory: ArtworkEvent[];
  creator: Account;
  artwork: ArtworkFragmentExtended;
  publicAddress: string;
}

export default function ArtworkAuctionState(
  props: ArtworkAuctionStateProps
): JSX.Element {
  const {
    // auction,
    artworkHistory,
    creator,
    artwork,
    // currentUserBid,
    publicAddress,
  } = props;

  // const bidPath = buildBidPath({ creator, artwork });
  const bidPath = "buildBidPath({ creator, artwork })";
  // const hasAuctionEnded = isAuctionEnded(parseDateToUnix(auction?.endsAt));
  const hasAuctionEnded = false;
  // const isNotYetListed = isAuctionNotYetListed(auction);
  const isNotYetListed = false;
  // const hasDifferentOwnerMostRecent =
  //   isTransferredOwnerMostRecent(artworkHistory);
  const hasDifferentOwnerMostRecent = false;
  // const hasPrivateSaleMostRecent = isPrivateSaleOwnerMostRecent(artworkHistory);
  const hasPrivateSaleMostRecent = false;
  const isDraftArwork = artwork.status === 'DRAFT';

  // const [minutesRemaining, setMinutesRemaining] = useState(
  //   getMinutesRemaining(parseDateToUnix(auction?.endsAt))
  // );

  // useHarmonicIntervalFn(() => {
  //   const minutesRemaining = getMinutesRemaining(
  //     parseDateToUnix(auction?.endsAt)
  //   );
  //   setMinutesRemaining(minutesRemaining);
  // }, 1000);

  // if (isDraftArwork || !artwork.ownerPublicKey) {
  //   // return null;
  //   return <></>;
  // }

  // if (hasDifferentOwnerMostRecent) {
  //   return <AuctionStateOwnedBy ownedBy={artwork.ownerPublicKey} />;
  // }

  // if (hasPrivateSaleMostRecent) {
  //   const mostRecentSoldPrivateSale = artwork?.privateSales.filter(
  //     (ps) => ps.soldAt
  //   )[0];
  //   return (
  //     <AuctionStateOwnedBy ownedBy={mostRecentSoldPrivateSale?.buyer}>
  //       <ArtworkAuctionPrice
  //         artwork={artwork}
  //         label={SOLD_FOR_LABEL}
  //         amountInETH={Number(mostRecentSoldPrivateSale?.price)}
  //       />
  //     </AuctionStateOwnedBy>
  //   );
  // }

  // if (isNotYetListed) {
  //   return <></>;
  // }

  // // if the artwork has been sold
  if (hasAuctionEnded) {
    return (
      // <AuctionStateOwnedBy ownedBy={auction.highestBidder}>
      <>This is ArtworkAuctionState|hasAuctionEnded</>
      // <AuctionStateOwnedBy ownedBy={"auction.highestBidder"}>
      //   <ArtworkAuctionPrice
      //     artwork={artwork}
      //     label={SOLD_FOR_LABEL}
      //     // amountInETH={auction.highestBidAmount}
      //     amountInETH={3.5}
      //   />
      // </AuctionStateOwnedBy>
    );
  }

  // TODO: In the case where the piece has been transferred, the info about the latest auction isn't relevant if the auction hasn’t met its reserve and is waiting to go active
  // if (!auction?.highestBidder) {
  //   return (
  //     <AuctionStateGeneric
  //       artwork={artwork}
  //       currentUserBid={currentUserBid}
  //       label={RESERVE_PRICE_LABEL}
  //       amountInETH={auction.reservePriceInETH}
  //       auction={auction}
  //       minutesRemaining={minutesRemaining}
  //       bidPath={bidPath}
  //       publicAddress={publicAddress}
  //     />
  //   );
  // }

  const minutesRemaining = 16;
  const isLessThanFifteenMins = minutesRemaining < 15;
  return (
    <>
    <AuctionStateGeneric
      artwork={artwork}
      label={CURRENT_BID_LABEL}
      // amountInETH={auction.highestBidAmount}
      amountInETH={3.5}
      // auction={auction}
      // currentUserBid={currentUserBid}
      minutesRemaining={minutesRemaining}
      bidPath={bidPath}
      publicAddress={publicAddress}
    >
      {/* {renderArtworkAuctionCountdown({
        endDate: parseDateToUnix(auction.endsAt),
        minutesRemaining,
      })} */}
      {isLessThanFifteenMins && (
        <Text
          css={{
            fontSize: 12,
            color: '$black60',
            '@bp4': {
              gridColumn: '1/3',
            },
          }}
        >
          Any bids placed in the last 15 minutes will reset the countdown back
          to 15 minutes.
        </Text>
      )}
    </AuctionStateGeneric>
    </>
  );
}
