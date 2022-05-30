import { formatETHWithSuffix } from '~/utils/formatters';
import {
  // getLastSoldForMarket,
  Market,
  MarketType,
} from '~/utils/markets/markets';
import { getMostRecentAuction } from '~/utils/auctions/auctions';
// import { areKeysEqual } from '~/utils/users';

import ArtworkMetaGeneric, {
  ArtworkCardMetaEndedAuction,
  ArtworkMetaLiveAuction,
} from './meta/ArtworkCardMetaGeneric';

import {
  ArtworkFragmentExtended,
  OfferFragment,
} from '~/graphql/hasura/hasura-fragments.generated';
import { AlgoliaArtwork } from '~/types/Algolia';

interface ArtworkCardMarketProps {
  artwork: ArtworkFragmentExtended | AlgoliaArtwork;
  priorityMarket: Market;
  marketType: MarketType;
  // activeOffer: Pick<OfferFragment, 'expiresAt' | 'amountInETH'>;
}
export default function ArtworkCardMarket(props: ArtworkCardMarketProps) {
  // const { artwork, priorityMarket, marketType, activeOffer } = props;
  const { artwork, priorityMarket, marketType } = props;
  // const lastSoldForMarket = getLastSoldForMarket(artwork);

  // const mostRecentActiveAuction = getMostRecentAuction(artwork);

  // const owner = artwork?.owner;
  // const isCreatorOwner = areKeysEqual([
  //   artwork?.ownerPublicKey,
  //   artwork?.publicKey,
  // ]);


  // if (marketType === 'ENDED_AUCTION') {
  //   return (
  //     <ArtworkCardMetaEndedAuction
  //       label="Winning bid"
  //       value={formatETHWithSuffix(priorityMarket.amountInEth)}
  //       owner={owner}
  //       isCreatorOwner={isCreatorOwner}
  //     />
  //   );
  // }

  // if (marketType === 'LISTED_AUCTION') {
  //   return (
  //     <ArtworkMetaGeneric
  //       label="Reserve"
  //       value={formatETHWithSuffix(priorityMarket.amountInEth)}
  //       owner={owner}
  //       isCreatorOwner={isCreatorOwner}
  //       activeOffer={activeOffer}
  //     />
  //   );
  // }

  if (marketType === 'LIVE_AUCTION') {
    return (
      <ArtworkMetaLiveAuction
        label="Current bid"
        // value={formatETHWithSuffix(priorityMarket.amountInEth)}
        value={"0.03"}
        // endsAt={mostRecentActiveAuction?.endsAt}
        endsAt={'asdfasdf'}
      />
    );
  }

  // if (marketType === 'BUY_NOW') {
  //   return (
  //     <ArtworkMetaGeneric
  //       label="Buy Now"
  //       value={formatETHWithSuffix(priorityMarket.amountInEth)}
  //       owner={owner}
  //       isCreatorOwner={isCreatorOwner}
  //       activeOffer={activeOffer}
  //     />
  //   );
  // }

  // if (lastSoldForMarket) {
  //   return (
  //     <ArtworkMetaGeneric
  //       label="Last sold"
  //       value={formatETHWithSuffix(lastSoldForMarket.amountInEth)}
  //       owner={owner}
  //       isCreatorOwner={isCreatorOwner}
  //       activeOffer={activeOffer}
  //       isSecondary
  //     />
  //   );
  // }

  return (
    // <ArtworkMetaGeneric
    //   owner={owner}
    //   isCreatorOwner={isCreatorOwner}
    //   activeOffer={activeOffer}
    // />
    <>asdfsd</>
  );
}
function newDate(): string {
  throw new Error('Function not implemented.');
}

