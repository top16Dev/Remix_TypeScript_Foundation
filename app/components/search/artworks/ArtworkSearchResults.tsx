/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { StateResultsProvided } from 'react-instantsearch-core';
import { useEffect } from 'react';
import { useState, useCallback } from 'react';

import Box from '~/components/base/Box';
import CardGrid from '~/components/CardGrid';
import ArtworkCardAlgolia from '~/components/cards/artwork/ArtworkCardAlgolia';
import InfiniteScrollButton from '~/components/feed/InfiniteScrollButton';
import ArtworkCardSkeleton from '~/components/cards/artwork/ArtworkCardSkeleton';

import useSearchLoadingState from '~/hooks/use-search-loading-state';
import { AssetStatus } from '~/types/Artwork';
import { ModerationStatus } from '~/types/Moderation';
import { AlgoliaArtwork, AlgoliaArtworkAvailability, AlgoliaAuction,
  AlgoliaAuctionStatus, AlgoliaUserBasic,  AlgoliaCollectionCreator, AlgoliaArtworkMarketAvailability, AlgoliaOffer} from '~/types/Algolia';
import {AlgoliaCollection} from '~/types/Algolia';
import { MarketAvailability } from '~/hooks/queries/algolia/use-algolia-artworks';

function ArtworkLoadingSkeleton() {
  return (
    <CardGrid>
      {[...Array(8)].map((_, index) => (
        <ArtworkCardSkeleton key={index} />
      ))}
    </CardGrid>
  );
}

// export const ArtworkSearchResultsContainer =
//   connectStateResults<StateResultsProvided>(({ children, isSearchStalled }) => {
//     const [isStalled, setIsStalled] = useState(true);

//     useEffect(() => {
//       if (!isSearchStalled) {
//         setIsStalled(false);
//       }
//     }, [isSearchStalled]);

//     return (
//       <>
//         <Box style={{ display: isStalled ? 'block' : 'none' }}>
//           <ArtworkLoadingSkeleton />
//         </Box>
//         <Box style={{ display: !isStalled ? 'block' : 'none' }}>{children}</Box>
//       </>
//     );
//   });

function ArtworkSearchResults(props:any){
  // const ArtworkSearchResults = connectInfiniteHits((props): JSX.Element => {
  // const { hits, hasMore, refineNext } = props;

  // useSearchLoadingState({ results: hits });

  // const [isFetching, setIsFetching] = useState(false);

  // const handleNextPage = useCallback(() => {
  //   setIsFetching(true);
  //   refineNext();
  // }, [setIsFetching, refineNext]);

  // useEffect(
  //   () => {
  //     if (isFetching) {
  //       setIsFetching(false);
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [hits]
  // );
  const user1 : AlgoliaUserBasic = {
    coverImageUrl : "/images/svg-text/Blog1.png",
    name: "Family",
    username: "Family",
    profileImageUrl : "/images/svg-text/Blog1.png",
    publicKey : "0x12asdfasdb",
    // username : "Family",
  }
  const creator1 : AlgoliaCollectionCreator = {
    coverImageUrl : "/images/svg-text/Blog1.png",
    name: "Family",
    profileImageUrl : "/images/svg-text/Blog1.png",
    publicKey : "0x12asdfasdb",
    username : "Family",
  }
  const collection1 : AlgoliaCollection = {
    objectID: "ObjectID",
    name: "Collection Name",
    symbol: "Collection symbol",
    description: "collection description",
    contractAddress: "contract address",
    collectionImageUrl: "/images/svg-text/Blog1.png",
    coverImageUrl: "/images/svg-text/Blog1.png",
    isHidden: false,
    createdAt: 4 ,
    slug: "collection slug",
    creator: creator1,
    artworkCount: 10,
  }
  const auction1: AlgoliaAuction = {
    auctionId: 1,
    createdAt: "aaasdf",
    currentPrice: 0.03,
    endsAt: "00:05:13",
    highestBidder: "Family",
    isPrimarySale: false,
    reservePriceInETH: 0.05,
    seller: user1,
    startsAt: "1212",
    status: AlgoliaAuctionStatus.OPEN,
  }
  const owner1: AlgoliaUserBasic = {
    coverImageUrl: '/images/svg-text/Blog1.png',
    name: 'ownername',
    username: 'ownusername',
    profileImageUrl: '/images/svg-text/Blog1.png',
    publicKey: 'ownpublickey'
  }
  const latestOffer1: AlgoliaOffer = {
    acceptedAt: 0,
    amountInETH: 0,
    buyer: owner1,
    createdAt: 0,
    expiresAt: 0,
    invalidatedAt: 0,
    placedAt: 0,
    seller: owner1,
    status: 'HIGHEST'
  }
  const artwork : AlgoliaArtwork = {
    assetIPFSPath: "wefasdb",
    assetScheme: "wefasdb",
    assetHost: "wefasdb",
    assetPath: "wefasdb",
    assetId: "wefasdb",
    assetStatus: AssetStatus.SUCCESS,
    auction : auction1,
    availability: AlgoliaArtworkAvailability.LIVE_AUCTION,
    createdAt: "wefasdb",
    creator: user1,
    description: "basfasdfasdf",
    id: "0x121asf",
    isDeleted: false,
    isHidden: false,
    mimeType: "MimeType",
    moderationStatus: ModerationStatus.Active,
    name: "FamilyName",
    objectID: "ObjectID",
    tokenId: 1123,
    collection: collection1,
    marketAvailability: [
      AlgoliaArtworkMarketAvailability.LIVE_AUCTION,
    ],
    owner: owner1,
    latestOffer:latestOffer1,
  };
  return (
    <Box css={{ paddingBottom: '$8' }}>
      <CardGrid>
        {/* {hits.map((hit, index) => ( */}
          <ArtworkCardAlgolia key={1} artwork={artwork} />
        {/* ))} */}
      </CardGrid>

      {/* <InfiniteScrollButton
        key={hits.length}
        handleNextPage={handleNextPage}
        hasNextPage={hasMore}
        isFetching={isFetching}
        animationDuration={0.05}
      /> */}
    </Box>
  );
};

export default ArtworkSearchResults;
