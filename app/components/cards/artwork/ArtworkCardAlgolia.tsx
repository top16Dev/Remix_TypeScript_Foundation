/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import ArtworkCardMedia from '~/components/cards/artwork/subcomponents/ArtworkCardMedia';
import ArtworkCardSkeleton from '~/components/cards/artwork/ArtworkCardSkeleton';
import ArtworkCardAlgoliaMarket from '~/components/cards/artwork/subcomponents/ArtworkCardAlgoliaMarket';
import ArtworkCardContainer from './subcomponents/ArtworkCardContainer';
import ArtworkCardHeader from './subcomponents/ArtworkCardHeader';
import ArtworkCardCreator from './subcomponents/ArtworkCardCreator';
import ArtworkHiddenLink from './subcomponents/ArtworkHiddenLink';
import ModeratedBanner from '../shared/ModeratedBanner';
import {
  buildArtworkPath,
  isUnsupportedArtworkAsset,
} from '~/utils/artwork/artwork';
// import {
//   buildArtworkAssetUrl,
//   buildPosterUrl,
//   FALLBACK_IMAGE_IMGIX_BLUR,
// } from '~/utils/assets';
// import { isNumber } from '~/utils/helpers';

import { VideoAssetQuality } from '~/types/Assets';
import {
  AlgoliaArtwork,
  AlgoliaArtworkAvailability,
  AlgoliaAuctionStatus,
} from '~/types/Algolia';
import { ModerationStatus } from '~/types/Moderation';
import { MarketAvailability } from '~/hooks/queries/algolia/use-algolia-artworks';
import { isNumber } from '~/utils/helpers';

interface ArtworkCardAlgoliaProps {
  artwork: AlgoliaArtwork;
  marketAvailability?: MarketAvailability;
}

export default function ArtworkCardAlgolia(
  props: ArtworkCardAlgoliaProps
): JSX.Element {
  const { artwork, marketAvailability } = props;
  // const { artwork } = props;

  const { creator, auction } = artwork;

  if (!artwork) {
    return <ArtworkCardSkeleton />;
  }

  // const artworkPath = buildArtworkPath({ user: creator, artwork });
  // const assetUrl = buildArtworkAssetUrl(
  //   {
  //     h: 640,
  //     q: 80,
  //     quality: VideoAssetQuality.Preview,
  //     auto: 'format,compress',
  //     blur: isUnsupportedArtworkAsset(artwork)
  //       ? FALLBACK_IMAGE_IMGIX_BLUR
  //       : undefined,
  //   },
  //   artwork
  // );
  // const posterUrl = buildPosterUrl(artwork);
  const assetUrl = "/images/svg-text/blog1.png";
  const posterUrl = "/images/svg-text/blog1.png";
  // const isAuctionMode =  artwork.availability === AlgoliaArtworkAvailability.LIVE_AUCTION ||
  //   auction?.status === AlgoliaAuctionStatus.ENDED;
  const isAuctionMode = true;
  // const isModerated = [
  //   ModerationStatus.UnderReview,
  //   ModerationStatus.TakedownRequested,
  //   ModerationStatus.Suspended,
  // ].includes(artwork?.moderationStatus);

  return (
    <ArtworkCardContainer
      className="artwork-card"
      isAuctionMode={isAuctionMode}
    >
      {/* {isModerated && <ModeratedBanner status={artwork?.moderationStatus} />} */}
      <ArtworkCardMedia
        // artworkPath={artworkPath}
        artworkPath= "11111"
        assetStatus={artwork.assetStatus}
        assetUrl={assetUrl}
        posterUrl={posterUrl}
        name={artwork.name}
        collection={artwork.collection}
        creator={creator}
        tokenId={artwork.tokenId}
      />

      <ArtworkCardHeader>
        <ArtworkCardCreator
          artwork={artwork}
          color={isAuctionMode ? 'dark' : 'light'}
        />
        <ArtworkCardAlgoliaMarket
          auction={auction}
          artwork={artwork}
          owner={artwork.owner}
          // marketAvailability={marketAvailability}
          marketAvailability={'LIVE_AUCTION'}
        />
        {/* {isNumber(artwork.tokenId) && (
          <ArtworkHiddenLink name={artwork.name} artworkPath={artworkPath} />
        )} */}
      </ArtworkCardHeader>
    </ArtworkCardContainer>
  );
}
