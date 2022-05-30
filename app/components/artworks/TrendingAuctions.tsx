/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { take } from 'ramda';

import Flex from '~/components/base/Flex';
import Box from '~/components/base/Box';
import Text from '~/components/base/Text';
import CardGrid from '~/components/CardGrid';
import ArtworkCardSkeleton from '~/components/cards/artwork/ArtworkCardSkeleton';
import ArtworkCard from '~/components/cards/artwork/ArtworkCard';
import FeaturedSectionHeading from '~/components/FeaturedSectionHeading';
import Pulse from '~/components/Pulse';

import {
  TrendingAuctions as ITrendingAuctions,
  useTrendingAuctions,
} from '~/graphql/hasura/queries/trending-auctions.generated';
// import { scoreTrendingArtwork } from 'queries/artworks';

import Artwork, { AssetStatus } from '~/types/Artwork';

import { parseDateToUnix } from '~/utils/dates/dates';
import { AlgoliaArtwork, AlgoliaArtworkAvailability, AlgoliaArtworkMarketAvailability, AlgoliaAuction, AlgoliaAuctionStatus, AlgoliaCollection, AlgoliaCollectionCreator, AlgoliaOffer, AlgoliaUserBasic } from '~/types/Algolia';
import { ModerationStatus } from '~/types/Moderation';
// import { notEmptyOrNil } from '~/utils/helpers';

const TRENDING_AUCTION_COUNT = 8;

export default function TrendingAuctions(): JSX.Element {
  // const { data: auctionData, isLoading } = useTrendingAuctions(
  //   { limit: 48 },
  //   { select: selectTrendingAuctions, refetchOnWindowFocus: false }
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
  const isLoading = false;
  if (isLoading) {
    return (
      <Box>
        <FeaturedSectionHeading>Trending auctions</FeaturedSectionHeading>

        <CardGrid>
          {[...Array(TRENDING_AUCTION_COUNT)].map((_, key) => (
            <ArtworkCardSkeleton key={key} />
          ))}
        </CardGrid>
      </Box>
    );
  }

  // const hasAuctionArtworks = notEmptyOrNil(auctionData);
  const hasAuctionArtworks = 4;

  // if (!hasAuctionArtworks) {
  //   return null;
  // }

  // const topEightAuctions = take(TRENDING_AUCTION_COUNT, auctionData);

  return (
    <Box>
      <FeaturedSectionHeading
        link={{
          href: '/artworks?refinementList%5Bavailability%5D%5B0%5D=LIVE_AUCTION',
          text: 'View all auctions',
        }}
      >
        <Flex css={{ alignItems: 'center' }}>
          <Box css={{ position: 'relative', top: 2 }}>
            <Pulse size={10} />
          </Box>
          <Text css={{ marginLeft: '$3' }}>Trending auctions</Text>
        </Flex>
      </FeaturedSectionHeading>
      <CardGrid>
        {/* {topEightAuctions.map((artwork: Artwork) => ( */}
          <ArtworkCard
            artwork={artwork}
            creator={artwork.creator}
            currentUserPublicKey={"aaaa"}
            key={artwork.id}
          />
        {/* ))} */}
      </CardGrid>
    </Box>
  );
}

// function selectTrendingAuctions(res: ITrendingAuctions) {
//   const order = res.auctions.map((a) => ({
//     tokenId: a.artwork.tokenId,
//     bidVolumeInETH: a.bidVolumeInETH.aggregate.sum.bidAmount,
//     numberOfBids: a.bidCount.aggregate.count,
//     dateEnding: parseDateToUnix(a.endsAt),
//   }));

//   const auctionArtworks = res.auctions.map((auction) => auction.artwork);

//   return auctionArtworks.sort((a, b) => {
//     const artwork1 = order.find((o) => o.tokenId === a.tokenId);
//     const artwork2 = order.find((o) => o.tokenId === b.tokenId);

//     return scoreTrendingArtwork(artwork2) - scoreTrendingArtwork(artwork1);
//   });
// }
