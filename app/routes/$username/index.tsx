/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { GetStaticPathsResult } from 'next';
import { css } from '~/stitches.config';
// import { useAccount } from 'wagmi';

import { useFollowModalProfile } from '~/hooks/use-follow-modal';
import { useUserProfileByPublicKey } from '~/graphql/hasura/queries/user-profile-by-public-key.generated';
// import useUserByPublicKey from '~/hooks/queries/hasura/users/use-user-by-public-key';
import useAddUsernamePrefix from '~/hooks/use-add-username-prefix';

import Page from '~/components/Page';
import Body from '~/components/base/Body';
import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import Grid from '~/components/base/Grid';

import UserProfileHeader from '~/components/profiles/UserProfileHeader';
import ProfileCoverImage from '~/components/profiles/ProfileCoverImage';
import ProfileCopyAddress from '~/components/profiles/ProfileCopyAddress';

import ProfileAboutBlock, {
  ProfileAboutBlockMobile,
} from '~/components/profiles/ProfileAboutBlock';
import ProfileWarningBlock from '~/components/trust-safety/ProfileWarningBlock';
import ProfileCollectors from '~/components/profiles/ProfileCollectors';
import ProfileCollectionV2 from '~/components/profiles/ProfileCollectionV2';
import CollectorsModal from '~/components/modals/CollectorsModal';
import AdminToolsModal from '~/components/modals/AdminToolsModal';
import ModerationBanner from '~/components/admin/ModerationBanner';
import ReportModal from '~/components/modals/ReportModal';
import FollowsModal from '~/components/modals/FollowsModal';
import ProfileFollowInfo from '~/components/profiles/ProfileFollowInfo';

import { isFlaggedForModeration } from '~/utils/moderation';
import {
//   buildCoverImageUrl,
  buildImgixUrl,
//   buildProfileShareImageUrl,
} from '~/utils/assets';

import {
  areKeysEqual,
  getAvatarByPublicKey,
  getProfilePageTitle,
} from '~/utils/users';

import {
  notEmptyOrNil,
  getFirstValue,
  truncateMetaDescription,
  getArrayOrEmpty,
} from '~/utils/helpers';

// import { getProfilePageProps } from '~/queries/hasura/profile-page';

import { PageColorMode, PageType } from '~/types/page';
// import { UserProfile } from '~/queries/hasura/profile-page';

import { getNFT721Address, getSuperrareAddress } from '~/lib/addresses';
import { ModerationStatus } from '~/types/Moderation';
import { SocialVerificationFragment, UserFragment } from '~/graphql/hasura/hasura-fragments.generated';
import { Outlet } from '@remix-run/react';

// export default function UserProfilePage(props: UserProfile): JSX.Element {
export default function UserProfilePage(props: { user: any; profileExists: any; ensRegistration: any; }): JSX.Element {
  const { user: initialUser, profileExists, ensRegistration } = props;

  // If the username is missing the @ prefix add it into the url
//   useAddUsernamePrefix();

//   const [{ data: currentUser, loading: isCurrentUserLoading }] = useAccount();

//   const currentUserPublicAddress = currentUser?.address;
  const currentUserPublicAddress = "121fsdf";

  const profilePublicKey = "profilePublickkey";
//   const profilePublicKey = initialUser?.publicKey;

//   const { data: userData } = useUserProfileByPublicKey(
//     {
//       publicKey: profilePublicKey,
//       contractAddresses: [getNFT721Address(), getSuperrareAddress()],
//     },
//     { initialData: { user: initialUser }, refetchOnWindowFocus: false }
//   );

//   const { data: currentUserData } = useUserByPublicKey(
//     { publicKey: currentUserPublicAddress },
//     { refetchOnWindowFocus: false }
//   );

//   const user = profileExists ? userData?.user : initialUser;
  const user:UserFragment = {
    userIndex: 1,
    publicKey: "publickey",
    username: "username",
    profileImageUrl: "/images/svg-text/Blog1.png",
    coverImageUrl: "/images/svg-text/Blog1.png",
    name: "name",
    bio: "my bio",
    isApprovedCreator: true,
    moderationStatus: undefined,
    joinedWaitlistAt: "joinedWaitlistAt",
    createdAt: "createdAt",
    isApprovedForMigrationAt: true,
    isAdmin: false,
    links: {
      website:{
        handle:"123"
      },
      discord:{
        handle:""
      },
      youtube:{
        handle:""
      },
      twitter:{
        handle:""
      },
    }
  }
//   const currentUserIsAdmin = currentUserData?.user?.isAdmin ?? false;

//   useFollowModalProfile(user?.publicKey);

//   const coverImageUrl = buildCoverImageUrl(user?.coverImageUrl);
//   const avatarUrl = buildImgixUrl(user?.profileImageUrl, { w: 350 });

//   const openGraphImageUrl: string = buildProfileShareImageUrl(
//     coverImageUrl ?? avatarUrl
//   );

//   const twitterSocialVerificationProfile = getFirstValue(
//     user?.twitSocialVerifs
//   );
  const twitterSocialVerificationProfile:SocialVerificationFragment = {
    username: "twitterusername",
    createdAt: "createdAt",
    id: 1,
    user: undefined,
    updatedAt: "updatedAt",
    expiresAt: "expiresAt",
    lastCheckedAt: "lastCheckedAt",
    socialVerificationURL: "socialVerificationURL",
    verificationText: "verificationText",
    userId: 12,
    isValid: true,
    service: "service",
    failedReason: "failedReason",
    status: "status"
  }
//   const instagramSocialVerificationProfile = getFirstValue(
//     user?.instaSocialVerifs
//   );
  const instagramSocialVerificationProfile:SocialVerificationFragment = {
    username: "instausername",
    createdAt: "createdAt",
    id: 1,
    user: undefined,
    updatedAt: "updatedAt",
    expiresAt: "expiresAt",
    lastCheckedAt: "lastCheckedAt",
    socialVerificationURL: "socialVerificationURL",
    verificationText: "verificationText",
    userId: 12,
    isValid: true,
    service: "service",
    failedReason: "failedReason",
    status: "status"
  }
//   const isMyProfile = areKeysEqual([currentUserPublicAddress, user?.publicKey]);

//   const moderationStatus = user?.moderationStatus;
    const moderationStatus = ModerationStatus.Active;
//   const isModerated = isFlaggedForModeration(moderationStatus);
    const isModerated = false;
//   if (isModerated && !currentUserIsAdmin && !isMyProfile) {
//     return <ProfileWarningBlock moderationStatus={moderationStatus} />;
//   }

//   const ownedArtworks = getArrayOrEmpty(user?.ownedArtworks);

//   const userCollectors = ownedArtworks.map((artwork) => artwork.owner);
    const isMyProfile = false;
  const reviewText = isMyProfile
    ? 'Your profile is under review.'
    : 'This profile is under review.';

  const suspendedText = isMyProfile
    ? 'Your profile has been removed.'
    : 'This profile has been removed.';

//   const hasCollectors = notEmptyOrNil(userCollectors);
    const hasCollectors = true;
    const currentUserIsAdmin = true;
    const coverImageUrl = "/images/svg-text/Blog1.png";
  return (
    <>
      {isModerated && (currentUserIsAdmin || isMyProfile) && (
        <ModerationBanner
          status={moderationStatus}
          reviewText={reviewText}
          suspendedText={suspendedText}
          takedownText=""
        />
      )}
      {currentUserIsAdmin && (
        <AdminToolsModal
          publicKey={profilePublicKey}
          entityId={profilePublicKey}
          context="profile"
          moderationStatus={moderationStatus}
          moderationFrom=""
        />
      )}

      <FollowsModal />
      {/* <CollectorsModal publicKey={profilePublicKey} /> */}
      {/* <ReportModal
        publicKey={currentUserPublicAddress}
        reportedPublicKey={user.publicKey}
        pageType="Profile"
      />*/}

      <Box css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Page
          // title={getProfilePageTitle(user)}
          title="asdfas"
          description="description"
          image="/images/svg-text/Blog1.png"
          headerMode={coverImageUrl ? PageColorMode.dark : PageColorMode.light}
          absolute
          type={PageType.maximal}
          >
          <ProfileCoverImage
            // creator={user}
            coverImage={coverImageUrl}
            // avatarBackground={getAvatarByPublicKey(user?.publicKey)}
            avatarBackground={"/images/svg-text/Blog1.png"}
            // avatar={avatarUrl}
            avatar = {"/images/svg-text/Blog1.png"}
            meta={
              <Flex
                css={{
                  display: 'none',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  zIndex: 4,
                  transform: 'translateY(-50%)',
                  '@bp1': {
                    display: 'flex',
                  },
                }}
              >
                {/* <ProfileCollectors collectors={userCollectors} /> */}
                <ProfileCollectors />
              </Flex>
            }
          />

          <Body
            css={{
              flex: 1,
              display: 'grid',
              gap: '$7',
              '@bp1': {
                gap: '$9',
                gridTemplateColumns: 'minmax(280px, 1fr) 3fr',
              },
              '@bp3': {
                gridTemplateColumns: 'minmax(350px, 1fr) 3fr',
              },
            }}
          >
            <Box>
              <Flex
                css={{
                  justifyContent: 'center',
                  '@bp1': {
                    justifyContent: 'flex-start',
                  },
                }}
              >
                <ProfileCopyAddress
                  // publicKey={user?.publicKey}
                  publicKey={"asdfasd"}
                  // userIndex={user?.userIndex}
                  userIndex={113}
                />
              </Flex>

              <Grid>
                <Grid css={{ gap: '$6', '@bp1': { gap: '$7' } }}>
                  {/* <UserProfileHeader user={user} /> */}
                  <UserProfileHeader />
                  <Grid css={{ gap: '$7', '@bp1': { gap: '$8' } }}>
                    <Grid css={{ gap: '$7' }}>
                      {hasCollectors && (
                        <Flex
                          css={{
                            justifyContent: 'center',
                            '@bp1': {
                              display: 'none',
                            },
                          }}
                        >
                          {/* <ProfileCollectors collectors={userCollectors} /> */}
                          <ProfileCollectors />
                        </Flex>
                      )}

                      {/* {profileExists && ( */}
                        <ProfileFollowInfo
                          // publicKey={user.publicKey}
                          publicKey={"asdf1f"}
                          userFollowState={{
                            // followerCount: user.followerCount,
                            followerCount: 12,
                            // followingCount: user.followingCount,
                            followingCount: 31,
                            isFollowingUser: { aggregate: { count: 0 } },
                          }}
                        />
                      {/* )} */}
                    </Grid>

                    <ProfileAboutBlock
                      user={user}
                      currentUserPublicKey={currentUserPublicAddress}
                      twitterSocialVerification={
                        twitterSocialVerificationProfile
                      }
                      instagramSocialVerification={
                        instagramSocialVerificationProfile
                      }
                      ensRegistration={ensRegistration}
                      className={profileAboutBlockStyles()}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box css={{ minWidth: 0 }}>
              {/* {profileExists && ( */}
                <ProfileCollectionV2
                  publicKey={profilePublicKey}
                  currentUserPublicKey={currentUserPublicAddress}
                  // isCurrentUserLoading={isCurrentUserLoading}
                  isCurrentUserLoading={false}
                  // createdCount={user.artworksCreatedCount.aggregate.count}
                  // collectionsCount={user.collectionsCount.aggregate.count}
                  // collectedCount={user.artworksCollectedCount.aggregate.count}
                  createdCount={10}
                  collectionsCount={3}
                  collectedCount={1}
                />
              {/* )} */}
            </Box>
            {/* <ProfileAboutBlockMobile
              user={user}
              currentUserPublicKey={currentUserPublicAddress}
              twitterSocialVerification={twitterSocialVerificationProfile}
              instagramSocialVerification={instagramSocialVerificationProfile}
              ensRegistration={ensRegistration}
              className={profileAboutBlockMobileStyles()}
            /> */}
          </Body>
        </Page>
      </Box>
    </>
  );
}

const profileAboutBlockStyles = css({
  display: 'none',
  '@bp1': {
    display: 'block',
  },
});

const profileAboutBlockMobileStyles = css({
  display: 'block',
  '@bp1': {
    display: 'none',
  },
});

// type PageArgs = { username: string };
// type PathProps = GetStaticPathsResult<PageArgs>;

// export async function getStaticPaths(): Promise<PathProps> {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// }

// export const getStaticProps = getProfilePageProps;
