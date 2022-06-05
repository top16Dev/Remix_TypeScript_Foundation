import { VideoAssetQuality } from '~/types/Assets';
import { AlgoliaArtwork, AlgoliaArtworkAvailability, AlgoliaAuction,
  AlgoliaAuctionStatus, AlgoliaUserBasic,  AlgoliaCollectionCreator} from '~/types/Algolia';
import {AlgoliaCollection} from '~/types/Algolia';
import { styled } from '~/stitches.config';

import Flex from '~/components/base/Flex';
import Link from '~/components/links/Link';
import ArtworkCardMedia from '~/components/cards/artwork/subcomponents/ArtworkCardMedia';
import ArtworkCardTitle from '~/components/cards/artwork/subcomponents/ArtworkCardTitle';
import ArtworkCardSkeleton from '~/components/cards/artwork/ArtworkCardSkeleton';
import ArtworkCardSearchPrices from '~/components/cards/artwork/subcomponents/ArtworkCardSearchPrices';
import ArtworkCardCollection from './subcomponents/ArtworkCardCollection';
import CardContextProvider, {
  useCardContext,
} from '~/components/cards/CardContext';
import ArtworkCardContainer from './subcomponents/ArtworkCardContainer';
import ArtworkCardHeader from './subcomponents/ArtworkCardHeader';
import ArtworkCardCreator from './subcomponents/ArtworkCardCreator';

import { buildArtworkPath } from '~/utils/artwork/artwork';
import { CollectionCardFragment } from '~/types/Collection';
import { AssetStatus } from '~/types/Artwork';
import { ModerationStatus } from '~/types/Moderation';
// import { buildArtworkAssetUrl, buildPosterUrl } from '~/utils/assets';

export default function ArtworkCardWithContext(
  props: ArtworkCardSearchProps
): JSX.Element {
  return (
    <CardContextProvider>
      <ArtworkCardSearch {...props} />
    </CardContextProvider>
  );
}

interface ArtworkCardSearchProps {
  // artwork: AlgoliaArtwork;
}

export function ArtworkCardSearch(props: ArtworkCardSearchProps): JSX.Element {
  // const { artwork } = props;

  const user1 : AlgoliaUserBasic = {
    coverImageUrl : "/images/svg-text/blog1.png",
    name: "Family",
    username: "Family",
    profileImageUrl : "/images/svg-text/blog1.png",
    publicKey : "0x12asdfasdb",
    // username : "Family",
  }
  const creator1 : AlgoliaCollectionCreator = {
    coverImageUrl : "/images/svg-text/blog1.png",
    name: "Family",
    profileImageUrl : "/images/svg-text/blog1.png",
    publicKey : "0x12asdfasdb",
    username : "Family",
  }
  const collection1 : AlgoliaCollection = {
    objectID: "ObjectID",
    name: "Collection Name",
    symbol: "Collection symbol",
    description: "collection description",
    contractAddress: "contract address",
    collectionImageUrl: "/images/svg-text/blog1.png",
    coverImageUrl: "/images/svg-text/blog1.png",
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
  };
  // const posterUrl = buildPosterUrl(artwork);
  const assetUrl = "/images/svg-text/blog1.png"
  const posterUrl = "/images/svg-text/blog1.png"
  
  const { creator, auction } = artwork;

  const { isHovered } = useCardContext();

  if (!artwork) {
    return <ArtworkCardSkeleton />;
  }

  // const artworkPath = buildArtworkPath({ user: creator, artwork });

  // const assetUrl = buildArtworkAssetUrl(
  //   { h: 640, q: 80, quality: VideoAssetQuality.Preview },
  //   artwork
  // );
  return (
    <ArtworkCardContainer className="artwork-card">
      {/* <Link href={artworkPath} passHref> */}
        <StyledLink>{artwork.name}</StyledLink>
      {/* </Link> */}
      <Flex
        css={{
          paddingX: '$4',
          paddingY: '$2',
          color: '$black60',
        }}
      >
        <ArtworkCardCreator artwork={artwork} />
      </Flex>
      <ArtworkCardMedia assetUrl={assetUrl} posterUrl={posterUrl} />
      <ArtworkCardHeader>
        {artwork?.collection && (
          <ArtworkCardCollection collection={artwork?.collection} />
        )}
        <ArtworkCardTitle>{artwork.name}</ArtworkCardTitle>
      </ArtworkCardHeader>
      <Flex css={{ flexDirection: 'column', borderTop: 'solid 1px $black5' }}>
        {/* <ArtworkCardSearchPrices auction={auction} artwork={artwork} /> */}
      </Flex>
    </ArtworkCardContainer>
  );
}

const StyledLink = styled('a', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  textIndent: '-9999rem',
});
