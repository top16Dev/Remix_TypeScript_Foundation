import { UseMutationResult } from 'react-query';

import ArtworkCardCreator from './subcomponents/ArtworkCardCreator';
import ArtworkCardMedia from './subcomponents/ArtworkCardMedia';
import ArtworkCardContainer from './subcomponents/ArtworkCardContainer';
import ArtworkCardHeader from './subcomponents/ArtworkCardHeader';
import ArtworkCardPopoverOwner from './subcomponents/popovers/ArtworkCardPopoverOwner';
import ArtworkCardMarket from './subcomponents/ArtworkCardMarket';
import ArtworkHiddenLink from './subcomponents/ArtworkHiddenLink';
import Flex from '~/components/base/Flex';
import ArtworkCardSkeleton from './ArtworkCardSkeleton';

import { VideoAssetQuality } from '~/types/Assets';

import {
  ArtworkFragmentExtended,
  UserFragment,
} from '~/graphql/hasura/hasura-fragments.generated';
import {
  SetArtworkUserVisibility,
  SetArtworkUserVisibilityVariables,
} from '~/graphql/server/mutations/set-artwork-user-visibility.generated';

import {
  buildArtworkPath,
  isUnsupportedArtworkAsset,
} from '~/utils/artwork/artwork';
// import {
//   buildArtworkAssetUrl,
//   buildPosterUrl,
//   FALLBACK_IMAGE_IMGIX_BLUR,
// } from '~/utils/assets';
import {
  // getPriorityMarketFromArtwork,
  // findMarketByType,import {
  // getLastSoldForMarket,
  Market,
  MarketType,
  MarketUser,
} from '~/utils/markets/markets';
import { AlgoliaArtwork, AlgoliaUserBasic } from '~/types/Algolia';
import { ModerationStatus } from '~/types/Moderation';
import ModeratedBanner from '../shared/ModeratedBanner';
// import { isNumber } from '~/utils/helpers';

type ArtworkCardType = 'regular' | 'detailed';
interface ArtworkCardProps {
  artwork: ArtworkFragmentExtended | AlgoliaArtwork;
  creator: UserFragment | AlgoliaUserBasic;
  currentUserPublicKey: string;
  isCurrentUserProfile?: boolean;
  cardType?: ArtworkCardType;
  setArtworkUserVisibility?: UseMutationResult<
    SetArtworkUserVisibility,
    Error,
    SetArtworkUserVisibilityVariables
  >;
}

export default function ArtworkCard(props: ArtworkCardProps) {
  const {
    artwork,
    creator,
    currentUserPublicKey,
    isCurrentUserProfile = false,
    cardType = 'detailed',
    setArtworkUserVisibility,
  } = props;
    // const isCurrentUserProfile = true;
    // const cardType = 'detailed';
//   if (!artwork) {
//     return <ArtworkCardSkeleton />;
//   }
  const assetUrl = "/images/svg-text/Blog1.png";
//   const assetUrl = buildArtworkAssetUrl(
//     {
//       h: 640,
//       q: 80,
//       quality: VideoAssetQuality.Preview,
//       auto: 'format,compress',
//       blur: isUnsupportedArtworkAsset(artwork)
//         ? FALLBACK_IMAGE_IMGIX_BLUR
//         : undefined,
//     },
//     artwork
//   );

//   const artworkPath = buildArtworkPath({ artwork, user: creator });
//   const posterUrl = buildPosterUrl(artwork);
  const posterUrl = "/images/svg-text/Blog1.png";
//   const hasSplits = artwork?.splitRecipients?.aggregate?.count > 0;
  const hasSplits = false;
//   const priorityMarket = getPriorityMarketFromArtwork(artwork);
//   const marketType = priorityMarket?.marketType;
  const marketType = 'LIVE_AUCTION';
  const isAuctionMode = 
    marketType === 'LIVE_AUCTION' || marketType === 'ENDED_AUCTION';

  const isModerated = [
    ModerationStatus.UnderReview,
    ModerationStatus.TakedownRequested,
    ModerationStatus.Suspended,
  ].includes(artwork?.moderationStatus);
//   const activeOffer = findMarketByType(artwork, 'OFFER');
  const marketUser : MarketUser = {
    name: "aaa",
    publicKey: "bbb",
    userIndex: "ccc",
    username: "Family",
    profileImageUrl: "./",
    coverImageUrl: "./",
  }
  var marketusers : MarketUser[] = [];
  marketusers. push(marketUser);
  const priorityMarket : Market = {
    id: "market id",
    marketType: "LIVE_AUCTION",
    marketActors: ["asdfas", "asdfasdf", "wefsb"],
    marketUsers: marketusers,
    marketOwner: "marketOwner",
    eventDate: "eventdate",
    amountInEth: 0.5,
    buyer: "buyer",
    seller: "seller",
  }
  return (
    <ArtworkCardContainer
      className="artwork-card"
      isAuctionMode={isAuctionMode}
    >
      {isModerated && <ModeratedBanner status={artwork?.moderationStatus} />}
      <ArtworkCardMedia
        // artworkPath={artworkPath}
        artworkPath={"Family"}
        assetStatus={artwork.assetStatus}
        assetUrl={assetUrl}
        posterUrl={posterUrl}
        name={artwork.name}
        collection={artwork.collection}
        creator={creator}
        tokenId={artwork.tokenId}
      />
      <ArtworkCardHeader>
        <Flex
          css={{
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <ArtworkCardCreator
            artwork={artwork}
            hasSplits={hasSplits}
            color={isAuctionMode ? 'dark' : 'light'}
          />

          {isCurrentUserProfile && (
            <ArtworkCardPopoverOwner
              artwork={artwork}
              currentUserPublicKey={currentUserPublicKey}
              setArtworkUserVisibility={setArtworkUserVisibility}
              css={{
                background: isAuctionMode ? '$black100' : '$white100',
                marginY: -5,
                display: 'none',
                '@bp1': {
                  display: 'flex',
                },
                '@hover': {
                  '&:hover': {
                    backgroundColor: isAuctionMode ? '$black90' : '$black5',
                  },
                },
              }}
            />
          )}
        </Flex>
        {cardType === 'detailed' && (
          <ArtworkCardMarket
            artwork={artwork}
            priorityMarket={priorityMarket}
            marketType={marketType}
            // activeOffer={
            //   activeOffer
            //     ? {
            //         amountInETH: activeOffer.amountInEth,
            //         expiresAt: activeOffer.eventDate,
            //       }
            //     : null
            // }
          />
        )}
        {/* {isNumber(artwork.tokenId) && (
          <ArtworkHiddenLink name={artwork.name} artworkPath={artworkPath} />
        )} */}
      </ArtworkCardHeader>
    </ArtworkCardContainer>
  );
}
