/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { isNil } from 'ramda';
// import { GetStaticPathsResult } from 'next';
// import { useAccount } from 'wagmi';

import Flex from '~/components/base/Flex';
import Page from '~/components/Page';
import ArtworkPage from '~/components/artworks/ArtworkPage';
import GenericError from '~/components/GenericError';
import AdminToolsModal from '~/components/modals/AdminToolsModal';
import ModerationBanner from '~/components/admin/ModerationBanner';
import ReportModal from '~/components/modals/ReportModal';

import ArtworkWarningPageBlock from '~/components/trust-safety/ArtworkWarningPageBlock';
import ProfileWarningBlock from '~/components/trust-safety/ProfileWarningBlock';

// import useUserByPublicKey from '~/hooks/queries/hasura/users/use-user-by-public-key';
// import useAddUsernamePrefix from '~/hooks/use-add-username-prefix';
// import useReferral from '~/hooks/web3/use-referral';

// import { buildPageShareUrl, buildPosterUrl, isModel } from '~/utils/assets';
import { getFirstValue, truncateMetaDescription } from '~/utils/helpers';
import { isFlaggedForModeration } from '~/utils/moderation';
import { maybeToString } from '~/utils/strings';
import { areKeysEqual } from '~/utils/users';

// import {
//   ArtworkPageArgs,
//   ArtworkPageData,
//   getArtworkPageProps,
// } from '~/queries/server/artwork-page';

import { PageColorMode, PageType } from '~/types/page';
import { isUnsupportedArtworkAsset } from '~/utils/artwork/artwork';
import { ModerationStatus } from '~/types/Moderation';
import { Outlet, useLocation } from '@remix-run/react';
import { AlgoliaArtwork, AlgoliaArtworkAvailability, AlgoliaArtworkMarketAvailability, AlgoliaAuction, AlgoliaAuctionStatus, AlgoliaCollection, AlgoliaCollectionCreator, AlgoliaOffer, AlgoliaUserBasic } from '~/types/Algolia';
import { AssetStatus } from '~/types/Artwork';
import { ArtworkEvent } from '~/types/Event';
import { string } from 'yup';

interface ArtworkPageData {
    artwork : any,
    artworkAttributes : any,
    totalArtworks : any,
}

export default function ArtworkIndexPage(props: ArtworkPageData): JSX.Element {
//   const { artwork, artworkAttributes, totalArtworks } = props;

  // If the username is missing the @ prefix add it into the url
//   useAddUsernamePrefix();

  // Check to see if ref query param is set and create cookie
//   useReferral({ contractAddress: artwork?.contractAddress });

//   const [{ data: user, loading: isCurrentUserLoading }] = useAccount();

//   const tokenId = artwork?.tokenId;

//   const { data: currentUserData } = useUserByPublicKey(
//     { publicKey: user?.address },
//     { refetchOnWindowFocus: false }
//   );

//   const currentUserIsAdmin = currentUserData?.user?.isAdmin;
//   const currentUserIsOwner = areKeysEqual([
//     artwork.ownerPublicKey,
//     user?.address,
//   ]);

//   const noArtwork = isNil(artwork);

//   if (noArtwork) {
//     return <GenericError />;
//   }

//   const { name, description, tags } = artwork;

//   const openGraphAsset = buildPageShareUrl(artwork);
//   const posterUrl: string = buildPosterUrl(artwork, { bg: 'F2F2F2' });

//   const truncatedDescription = truncateMetaDescription(description);

//   const creatorModerationStatus = artwork?.creator?.moderationStatus;
//   const isCreatorModerated = isFlaggedForModeration(creatorModerationStatus);

//   if (isCreatorModerated && !(currentUserIsAdmin || currentUserIsOwner)) {
//     return <ProfileWarningBlock moderationStatus={creatorModerationStatus} />;
//   }

//   const artworkModerationStatus = artwork?.moderationStatus;
//   const isArtworkModerated = isFlaggedForModeration(artworkModerationStatus);

//   if (isArtworkModerated && !(currentUserIsAdmin || currentUserIsOwner)) {
//     return <ArtworkWarningPageBlock artwork={artwork} />;
//   }

//   const isUnsupportedAsset = isUnsupportedArtworkAsset(artwork);
//   const mintEvent = getFirstValue(artwork.mintEvent);

//   const headerMode =
//     isUnsupportedAsset && !isModel(artwork.assetPath)
//       ? PageColorMode.dark
//       : PageColorMode.light;
    const mintEvent : ArtworkEvent = {
        tokenCreator:'asdf',
        data : {
            amountInETH: "amountInETH",
            tokenAddress: "tokenAddress",
            amountInTokens: "amountInTokens",
            fromAddress: "fromAddress",
            toAddress: "toAddress",
            transactionHash: "transactionHash",
            logIndex: 1
        },
        id : "11",
        publicKey : "publickey",
        eventType : "12",
        blockTimestamp : "blockTimestamp",
        tokenId : "tokenId",

    }
    const isArtworkModerated = false;
    const currentUserIsAdmin = false;
    const currentUserIsOwner = true;
    const router = useLocation();
    
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
  const owner1: AlgoliaUserBasic = {
    coverImageUrl: '/images/svg-text/blog1.png',
    name: 'ownername',
    username: 'ownusername',
    profileImageUrl: '/images/svg-text/blog1.png',
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
    <>
    {/* <>This is tokenID{router.pathname}</> */}
      {isArtworkModerated && (currentUserIsAdmin || currentUserIsOwner) && (
        <ModerationBanner
        //   status={artworkModerationStatus}
          status={ModerationStatus.Active}
          reviewText="This NFT is under review."
          suspendedText="This NFT has been removed."
        //   takedownText={`This NFT has received a DMCA takedown notice from ${artwork.moderationFrom}.`}
          takedownText={`This NFT has received a DMCA takedown notice from .`}
        />
      )}

      {/* checking we have tokenId (as in preview mode it’s not present) */}
      {/* {Boolean(currentUserIsAdmin && tokenId) && (
        <AdminToolsModal
          publicKey={artwork?.creator?.publicKey}
          moderationStatus={artworkModerationStatus}
          moderationFrom={artwork?.moderationFrom}
          entityId={artwork?.id}
          tokenId={maybeToString(tokenId)}
          context="artwork"
        />
      )}

      {tokenId && (
        <ReportModal
          publicKey={user?.address}
          reportedPublicKey={artwork?.publicKey}
          pageType="Artwork"
        />
      )}*/}

      <Flex
        css={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          position: 'relative',
        }}
      >
        <Page
        //   title={name}
          title={"name"}
        //   description={truncatedDescription}
          description={"truncatedDescription"}
        //   headerMode={headerMode}
        //   image={posterUrl ?? openGraphAsset}
          image="/images/svg-text/blog1.png"
          absolute={true}
        //   footerCss={{ display: 'none' }}
          type={PageType.maximal}
        >
          <ArtworkPage
            key={artwork.id}
            artwork={artwork}
            // tags={tags}
            // isCurrentUserLoading={isCurrentUserLoading}
            // isUnsupportedAsset={isUnsupportedAsset}
            mintEvent={mintEvent}
            // percentSplits={artwork.splits}
            // currentUserPublicKey={user?.address}
            collection={artwork.collection}
            // currentUserIsAdmin={currentUserIsAdmin}
            // pageContext="artwork-page"
            // artworkAttributes={artworkAttributes}
            // totalArtworks={totalArtworks}
          />
        </Page>
      </Flex>
    </>
  );
}

// export async function getStaticPaths(): Promise<
//   GetStaticPathsResult<ArtworkPageArgs>
// > {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// }

// export const getStaticProps = getArtworkPageProps;
