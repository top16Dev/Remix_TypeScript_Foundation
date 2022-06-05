/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import { useEffect } from 'react';

import ArtworkMeta from './ArtworkMeta';
import ArtworkHeader from './ArtworkHeader';
import PopoverShare from '~/components/popover/PopoverShare';
import ArtworkProvenance from './ArtworkProvenance';
import ArtworkMediaGeneric from './media/ArtworkMediaGeneric';
import ArtworkMediaModel from './media/ArtworkMediaModel';
import ArtworkCardPopoverOwner from '~/components/cards/artwork/subcomponents/popovers/ArtworkCardPopoverOwner';
import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import Grid from '~/components/base/Grid';
import Body from '~/components/base/Body';
import ArtworkFooter from './ArtworkFooter';
import Heading from '~/components/base/Heading';

import NotAllowedIcon from '~/assets/icons/not-allowed';
import AdminShield from '~/assets/icons/admin-shield';

import useArtworkEventsByContractSlugTokenId from '~/hooks/queries/hasura/use-artwork-events-by-contract-slug-token-id';
import { useUsersFromHistoryEvents } from '~/hooks/queries/hasura/use-users-by-public-keys-v2';
import useUserByPublicKey from '~/hooks/queries/use-user-by-public-key';
import useArtworkActivity from '~/hooks/queries/hasura/use-artwork-activity';
import useModal from '~/hooks/use-modal';

import WalletUser from '~/types/WalletUser';
import { ArtworkEvent } from '~/types/Event';
import { BasicArtwork } from '~/types/Artwork';
import { ModalKey } from '~/types/modal';

import { CollectionFragmentExtended } from '~/graphql/hasura/hasura-fragments.generated';
// import {
//   ArtworkPageArtworkOtherArtworks,
//   ArtworkPageSplitRecipient,
// } from '~/queries/server/artwork-page';

import {
  buildArtworkPath,
  getComputedArtworkStatus,
} from '~/utils/artwork/artwork';
import { buildArtworkTweet } from '~/utils/twitter-templates';
import {
  // getUsernameOrAddress,
  isAllTrue,
  noop,
  publicKeyOrIdOrAddress,
} from '~/utils/helpers';
// import { buildArtworkPageAssetUrl, isModel } from '~/utils/assets';
import { getLatestArtworkEvent } from '~/utils/auctions/auctions';
import { areKeysEqual } from '~/utils/users';
import { isFNDContractAddress } from '~/utils/collections';
import { AlgoliaCollection } from '~/types/Algolia';

interface ArtworkPageProps {
  artwork: BasicArtwork;
  // user: WalletUser;
  // percentSplits: ArtworkPageSplitRecipient[];
  // currentUserPublicKey: string;
  // isCurrentUserLoading: boolean;
  mintEvent?: ArtworkEvent;
  // twitterUsername: string;
  // tags?: string[];
  collection: CollectionFragmentExtended | AlgoliaCollection;
  // currentUserIsAdmin?: boolean;
  // otherArtworks?: ArtworkPageArtworkOtherArtworks;
  // pageContext: 'artwork-page' | 'preview-page';
}

export default function ArtworkPage(props: ArtworkPageProps): JSX.Element {
  const {
    artwork,
    // user,
    // percentSplits,
    // twitterUsername,
    // tags,
    // currentUserPublicKey,
    // isCurrentUserLoading,
    collection,
    mintEvent,
    // currentUserIsAdmin = false,
    // otherArtworks,
    // pageContext,
  } = props;

  // const { setCurrentModal } = useModal();
  // const creatorPublicKey = publicKeyOrIdOrAddress(artwork?.creator);

  // const { data: creatorData, isLoading: isCreatorLoading } = useUserByPublicKey(
  //   { publicKey: creatorPublicKey },
  //   { refetchOnWindowFocus: false }
  // );

  // const tokenId = artwork?.tokenId;
  // const contractSlug = collection?.slug;

  // const { data: artworkActivityData, isLoading: isArtworkActivityLoading } =
  //   useArtworkActivity(
  //     { tokenId, contractSlug, currentUserPublicKey },
  //     { enabled: !isCurrentUserLoading, refetchInterval: 10 * 1000 }
  //   );

  // const creator = creatorData?.user;

  // const twitterShareText = buildArtworkTweet({
  //   creatorName: getUsernameOrAddress(creator),
  //   artworkPath: buildArtworkPath({
  //     user: creator,
  //     artwork,
  //   }),
  //   twitterUsername,
  // });

  // const assetUrl = buildArtworkPageAssetUrl(artwork);
  // const isModelMedia = isModel(assetUrl);

  // const isOwner = areKeysEqual([currentUserPublicKey, artwork?.ownerPublicKey]);

  // const isCurrentUserProfile = areKeysEqual([
  //   creatorPublicKey,
  //   currentUserPublicKey,
  // ]);

  // const isOwnerOnProfile = isAllTrue([isCurrentUserProfile, isOwner]);

  // const status = getComputedArtworkStatus({
  //   mostRecentActiveAuction: artworkActivityData?.activeAuction,
  //   latestArtworkEvent: getLatestArtworkEvent({
  //     latestEvents: artworkActivityData?.latestArtworkEvents,
  //   }),
  //   currentUser: user,
  //   isCreatorOwner: areKeysEqual([artwork?.ownerPublicKey, artwork?.publicKey]),
  // });

  // const { data: history, isLoading: isHistoryLoading } =
  //   useArtworkEventsByContractSlugTokenId(
  //     { tokenId, contractSlug },
  //     {
  //       initialData: { events: initialArtworkHistory },
  //       refetchInterval: 10 * 1000,
  //     }
  //   );

  // const { data: historyUsersData, isLoading: isHistoryUsersLoading } =
  //   useUsersFromHistoryEvents(history);

  // const isFndCollection =
  //   pageContext === 'artwork-page'
  //     ? isFNDContractAddress(collection?.contractAddress)
  //     : true;

  // // to prevent overflow issue with Safari 13
  // useEffect(() => {
  //   document.body.classList.add('webkit-fit-content');
  //   return () => {
  //     document.body.classList.remove('webkit-fit-content');
  //   };
  // }, []);
  const isModelMedia = false;
  const assetUrl = "/images/svg-text/blog1.png";
  const isCreatorLoading = false;
  const pageContext = 'artwork-page';
  const isFndCollection = false;
  var history:ArtworkEvent[] = [];
  history.push(mintEvent);
  return (
    <>
      <Box
        css={{
          background: '$white100',
          // boxShadow: pageContext === 'artwork-page' ? '$2' : 'none',
          boxShadow: '$2',
          // related to <ArtworkFooter />
          position: 'relative',
          zIndex: 10,
          transform: 'translate3d(0,0,0)',
          minHeight: '100vh',
        }}
      >
        {isModelMedia ? (
          <ArtworkMediaModel assetUrl={assetUrl} />
        ) : (
          <ArtworkMediaGeneric artwork={artwork} />
        )}
        <Body>
          <ArtworkHeader
            artwork={{
              ...artwork,
              ownerPublicKey : "ownerPublicKey",
              status : "DRAFT",
              // latestEvents: artworkActivityData?.latestArtworkEvents,
              // auctions: [artworkActivityData?.activeAuction],
              // splitRecipients: artworkActivityData?.splitRecipients,
            }}
            // artworkActivityData={artworkActivityData}
            collection={collection}
            // creator={creator}
            creator={artwork.creator}
            history={history}
            // isOwner={isOwner}
            isOwner={false}
            // isOwnerOnProfile={isOwnerOnProfile}
            isOwnerOnProfile={false}
            mintEvent={mintEvent}
            // percentSplits={percentSplits}
            // publicAddress={user?.publicAddress}
            publicAddress={"publicAddress"}
            // status={status}
          />
          <Box
            css={{
              paddingY: '$6',
              '@bp1': { paddingTop: '$8', paddingBottom: '$9' },
            }}
          />
          <Grid
            css={{
              paddingBottom: '$10',
              gridTemplateColumns: '1fr',
              gridGap: '$7',
              '@bp1': {
                gridTemplateColumns: '1fr 1fr',
                gridGap: '$11',
              },
            }}
          >
            <Box>
              <ArtworkMeta
                description={artwork.description}
                artwork={artwork}
                collection={collection}
                // creatorPublicKey={creatorPublicKey}
                creatorPublicKey={"creatorPublicKey"}
                // currentUserPublicKey={currentUserPublicKey}
                currentUserPublicKey={"currentUserPublicKey"}
                // tags={tags}
                tags={["2d", "3s"]}
              />
              <Flex
                css={{
                  pointerEvents: isCreatorLoading ? 'none' : 'all',
                  paddingY: '$6',
                  '@bp1': {
                    paddingY: '$8',
                  },
                }}
              >
                <Flex
                  css={{ marginRight: '$4', '@bp0': { marginRight: '$6' } }}
                >
                  <ArtworkCardPopoverOwner
                    // size="regular"
                    artwork={{
                      ...artwork,
                      // latestEvents: artworkActivityData?.latestArtworkEvents,
                      // auctions: [artworkActivityData?.activeAuction],
                      // splitRecipients: artworkActivityData?.splitRecipients,
                    }}
                    currentUserPublicKey={'currentUserPublickey'}
                    // status={status}
                    // currentUser={user}
                    // setIsHovered={noop}
                    // options={[
                    //   {
                    //     css: { color: '$red100' },
                    //     enabled: currentUserIsAdmin,
                    //     icon: <AdminShield />,
                    //     children: 'Admin Tools',
                    //     onClick: () => {
                    //       return setCurrentModal(ModalKey.ADMIN_TOOLS);
                    //     },
                    //   },
                    //   {
                    //     enabled: true,
                    //     icon: <NotAllowedIcon />,
                    //     children: (
                    //       <span style={{ color: '#F93A3A' }}>Report</span>
                    //     ),
                    //     onClick: () => {
                    //       return setCurrentModal(ModalKey.REPORT);
                    //     },
                    //   },
                    // ]}
                  />
                </Flex>
                {/* <PopoverShare shareText={twitterShareText} /> */}
              </Flex>
            </Box>
            <ArtworkProvenance
              artwork={{
                ...artwork,
                // latestEvents: artworkActivityData?.latestArtworkEvents,
                // auctions: [artworkActivityData?.activeAuction],
                // splitRecipients: artworkActivityData?.splitRecipients,
              }}
              // artworkActivityData={artworkActivityData}
              // history={history.events}
              // historyUsersData={historyUsersData.users}
              isArtworkActivityLoading={false}
              isCurrentUserLoading={false}
              isHistoryLoading={false}
              isHistoryUsersLoading={false}
            />
          </Grid>
          {pageContext === 'artwork-page' && (
            <Heading
              size={4}
              css={{
                display: 'none',
                '@bp2': {
                  paddingBottom: '$8',
                  display: 'block',
                },
              }}
            >
              More from this {isFndCollection ? 'creator' : 'collection'}
            </Heading>
          )}
        </Body>
      </Box>
      {pageContext === 'artwork-page' && (
        <ArtworkFooter
          isFndCollection={true}
          // otherArtworks={otherArtworks}
          // currentUser={user}
          // creator={creator}
          creator={artwork.creator}
          coverImageUrl={collection?.coverImageUrl}
          collection={collection}
        />
      )}
    </>
  );
}
