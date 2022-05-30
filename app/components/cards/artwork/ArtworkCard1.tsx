/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import { UseMutationResult } from 'react-query';
// import NextLink from 'next/link';

import { styled } from '~/stitches.config';

import Flex from '~/components/base/Flex';
import ArtworkCardMedia from '~/components/cards/artwork/subcomponents/ArtworkCardMedia';
import ArtworkCardTitle from '~/components/cards/artwork/subcomponents/ArtworkCardTitle';
// import ArtworkCardSkeleton from '~/components/cards/artwork/ArtworkCardSkeleton';
import ArtworkCardContainer from '~/components/cards/artwork/subcomponents/ArtworkCardContainer';
import ArtworkCardPopoverOwner from '~/components/cards/artwork/subcomponents/popovers/ArtworkCardPopoverOwner';
import ArtworkCardHeader from '~/components/cards/artwork/subcomponents/ArtworkCardHeader';
import ArtworkCardMeta from '~/components/cards/artwork/subcomponents/ArtworkCardMeta';
import ArtworkCardMarket from './subcomponents/ArtworkCardMarket'
import ArtworkHiddenLink from './subcomponents/ArtworkHiddenLink'
import CardContextProvider, {
  useCardContext,
} from '~/components/cards/CardContext';
import ArtworkCardCollection from './subcomponents/ArtworkCardCollection';
import ArtworkCardCreator from './subcomponents/ArtworkCardCreator';
import GraySquare from '~/components/base/GraySquare';

// import {
//   buildArtworkPath,
//   getComputedArtworkStatus,
// } from '~/utils/artwork/artwork';
// import { buildArtworkAssetUrl, buildPosterUrl } from '~/utils/assets';
// import { isAllTrue, notEmptyOrNil } from '~/utils/helpers';
// import { areKeysEqual } from '~/utils/users';
// import {
//   getLatestArtworkEvent,
//   getMostRecentAuction,
// } from '~/utils/auctions/auctions';

// import WalletUser from '~/types/WalletUser';
// import { VideoAssetQuality } from '~/types/Assets';
// import { ArtworkV2 } from '~/types/Artwork';

// import { UserFragment } from '~/graphql/hasura/hasura-fragments.generated';
// import {
//   SetArtworkUserVisibility,
//   SetArtworkUserVisibilityVariables,
// } from '~/graphql/server/mutations/set-artwork-user-visibility.generated';

import SplitIcon from '~/assets/icons/split-icon.svg';

export default function ArtworkCardContext(
  props: ArtworkCardProps
): JSX.Element {
  return (
    <CardContextProvider>
      <ArtworkCard {...props} />
    </CardContextProvider>
  );
}

type ArtworkCardType = 'regular' | 'detailed';

interface ArtworkCardProps {
  // artwork: ArtworkV2;
  // creator: UserFragment;
  // currentUser: WalletUser;
  // optionals
  // isCurrentUserProfile?: boolean;
  // setArtworkUserVisibility?: UseMutationResult<
  //   SetArtworkUserVisibility,
  //   Error,
  //   SetArtworkUserVisibilityVariables
  // >;
  // cardType?: ArtworkCardType;
  // prefetch?: boolean;
}

export function ArtworkCard(props: ArtworkCardProps): JSX.Element {
  const {
    // artwork,
    // creator,
    // currentUser,
    // isCurrentUserProfile = false,
    // setArtworkUserVisibility,
    // cardType = 'detailed',
    // prefetch = false,
  } = props;

  const { isHovered, setIsHovered } = useCardContext();

  // if (!artwork) {
  //   return <ArtworkCardSkeleton cardType={cardType} />;
  // }

  // const artworkPath = buildArtworkPath({ user: creator, artwork });

  // const assetUrl = buildArtworkAssetUrl(
  //   { h: 640, q: 80, quality: VideoAssetQuality.Preview },
  //   artwork
  // );
  const assetUrl = "/images/svg-text/Blog1.png";
  const posterUrl = "/images/svg-text/Blog1.png";
  // const posterUrl = buildPosterUrl(artwork);

  // const mostRecentActiveAuction = getMostRecentAuction(artwork);

  // const hasSplits = artwork?.splitRecipients?.aggregate?.count > 0;

  // const isCreatorOwner = areKeysEqual([
  //   artwork?.ownerPublicKey,
  //   artwork?.publicKey,
  // ]);

  // const computedArtworkStatus = getComputedArtworkStatus({
  //   mostRecentActiveAuction,
  //   latestArtworkEvent: getLatestArtworkEvent({
  //     latestEvents: artwork?.latestEvents,
  //   }),
  //   currentUser,
  //   isCreatorOwner,
  // });

  // const isOwner = areKeysEqual([
  //   currentUser?.publicAddress,
  //   artwork?.ownerPublicKey,
  // ]);

  // const isOwnerOnProfile = isAllTrue([isCurrentUserProfile, isOwner]);

  const collection={
    objectID : 12,
    name : "@fasbas",
    creator : "/images/svg-text/Blog1.png",
    collectionImageUrl : "/images/svg-text/Blog1.png",
    symbol : "1231",
    coverImageUrl : "/images/svg-text/Blog1.png",
    contractAddress:"@abasds",
    artworkCount:20,
  }
  // const hasName = notEmptyOrNil(artwork.name);
  // const isHovered = false;
  const hasName = true;
  const hasSplits = false;
  const isCurrentUserProfile = false;
  const isAuctionMode = true;
  const cardType = "detatiled";
  return (
    // <ArtworkCardContainer isHovered={isHovered} className="artwork-card">
    <ArtworkCardContainer isAuctionMode={isAuctionMode} className="artwork-card">
      {/* {artwork.tokenId && (
        <NextLink passHref href={artworkPath} prefetch={prefetch}>
          <StyledLink>{artwork.name}</StyledLink>
        </NextLink>
      )} */}
          {/* <StyledLink>1fasdffas</StyledLink> */}
      <ArtworkCardMedia assetUrl={assetUrl} posterUrl={posterUrl} />
      
      <ArtworkCardHeader>
        {/* {artwork?.collection && (
          <ArtworkCardCollection collection={artwork?.collection} />
        )} */}
        <Flex
          css={{
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
        {/* <ArtworkCardCreator artwork={artwork} /> */}
        <ArtworkCardCreator/>
       {/* {hasSplits && <SplitIcon width={20} height={17} title="split" />} */}
        {/* <ArtworkCardCollection  collection={collection}/>
        <Flex css={{ justifyContent: 'space-between', minWidth: 0 }}>
          {hasName ? (
            // <ArtworkCardTitle>{artwork.name}</ArtworkCardTitle>
            <ArtworkCardTitle>dfabaqds</ArtworkCardTitle>
          ) : (
            <GraySquare css={{ height: 31, width: 160 }} />
          )} */}

          {isCurrentUserProfile && (
            <ArtworkCardPopoverOwner
              appearance="minimal"
              size="small"
              // artwork={artwork}
              // status={computedArtworkStatus}
              // currentUser={currentUser}
              // setArtworkUserVisibility={setArtworkUserVisibility}
              // setIsHovered={setIsHovered}
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
        {/* {cardType === 'detailed' && ( 
          <ArtworkCardMarket
            artwork={artwork}
            priorityMarket={priorityMarket}
            marketType={marketType}
            activeOffer={
              activeOffer
                ? {
                    amountInETH: activeOffer.amountInEth,
                    expiresAt: activeOffer.eventDate,
                  }
                : null
            }
          />
      )}
      {isNumber(artwork.tokenId) && (
        <ArtworkHiddenLink name={artwork.name} artworkPath={artworkPath} />
      )} */}
      </ArtworkCardHeader>
    </ArtworkCardContainer>
  );
}
