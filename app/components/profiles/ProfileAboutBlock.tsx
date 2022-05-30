/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
// import { constants } from 'ethers';

import Box from '~/components/base/Box';
import Grid from '~/components/base/Grid';
import Flex from '~/components/base/Flex';
import MarkdownText from '../base/MarkdownText';
import UserTagInvitedBy from '~/components/users/UserTagInvitedBy';
import ProfileSocialLinks from './ProfileSocialLinks';
import ProfileSocialLinksVerified from './ProfileSocialLinksVerified';
import ProfileSectionHeading from './ProfileSectionHeading';
import ProfileJoinedDate from './ProfileJoinedDate';
import PopoverProfileAdmin from '~/components/popover/PopoverProfileAdmin';
import ENSNamePill from './ENSNamePill';

import { isAllTrue, notEmptyOrNil } from '~/utils/helpers';
// import { getHasSocialHandles } from '~/utils/creator';
import { areKeysEqual } from '~/utils/users';

import { SocialLinkType, SocialLinkVerifiedMap } from '~/types/SocialLink';
import {
  SocialVerificationFragment,
  UserFragment,
} from '~/graphql/hasura/hasura-fragments.generated';
// import { AccountExtended } from '~/types/Account';

interface ProfileAboutBlockProps {
  user: UserFragment;
  currentUserPublicKey: string;
  twitterSocialVerification: SocialVerificationFragment;
  instagramSocialVerification: SocialVerificationFragment;
  className?: string;
  ensRegistration: string;
}

export default function ProfileAboutBlock(
  props: ProfileAboutBlockProps
): JSX.Element {
  const {
    user,
    twitterSocialVerification,
    instagramSocialVerification,
    className,
    ensRegistration,
    currentUserPublicKey,
  } = props;

  // const hasBio = notEmptyOrNil(user?.bio);
  const hasBio = true;

  // const hasSocialLinks = getHasSocialHandles(user?.links);
  const hasSocialLinks = true;
  return (
    <Box className={className}>
      <Grid css={{ gap: '$8' }}>
        <SocialVerificationBlock
          twitterSocialVerification={twitterSocialVerification}
          instagramSocialVerification={instagramSocialVerification}
          // user={user}
          currentUserPublicKey={currentUserPublicKey}
          // ensName={ensRegistration}
          ensName={"asdf"}
        />

        {hasBio && (
          <Box>
            <ProfileSectionHeading>Bio</ProfileSectionHeading>
            <MarkdownText>{user?.bio}</MarkdownText>
          </Box>
        )}

        {hasSocialLinks && (
          <Box>
            <ProfileSectionHeading>Links</ProfileSectionHeading>
            <ProfileSocialLinks socialLinks={user?.links} />
          </Box>
        )}

        <ProfileJoinedDate dateJoined={user?.createdAt} />

        <Flex>
          <PopoverProfileAdmin />
        </Flex>
      </Grid>
    </Box>
  );
}

export function ProfileAboutBlockMobile(
  props: ProfileAboutBlockProps
): JSX.Element {
  const {
    user,
    currentUserPublicKey,
    twitterSocialVerification,
    instagramSocialVerification,
    className,
    ensRegistration,
  } = props;

  // const hasBio = notEmptyOrNil(user?.bio);
  const hasBio = true;

  // const hasSocialLinks = getHasSocialHandles(user?.links);
  const hasSocialLinks = true;

  return (
    <Box className={className}>
      <Grid css={{ gap: '$6' }}>
        {hasBio && (
          <Box>
            <ProfileSectionHeading>Bio</ProfileSectionHeading>
            <MarkdownText>{user?.bio}</MarkdownText>
          </Box>
        )}

        <SocialVerificationBlock
          twitterSocialVerification={twitterSocialVerification}
          instagramSocialVerification={instagramSocialVerification}
          // user={user}
          currentUserPublicKey={currentUserPublicKey}
          ensName={ensRegistration}
          // ensName="ensName"
        />

        {hasSocialLinks && (
          <Grid>
            <ProfileSectionHeading>Links</ProfileSectionHeading>
            <ProfileSocialLinks socialLinks={user?.links} />
          </Grid>
        )}

        <ProfileJoinedDate dateJoined={user?.createdAt} />

        <Flex>
          <PopoverProfileAdmin />
        </Flex>
      </Grid>
    </Box>
  );
}

interface SocialVerificationBlockProps {
  twitterSocialVerification: SocialVerificationFragment;
  instagramSocialVerification: SocialVerificationFragment;
  // user: AccountExtended;
  currentUserPublicKey: string;
  ensName: string;
}

function SocialVerificationBlock(
  props: SocialVerificationBlockProps
): JSX.Element {
  const {
    // user,
    currentUserPublicKey,
    twitterSocialVerification,
    instagramSocialVerification,
    ensName,
  } = props;

  // const publicKey = user?.publicKey;
  const publicKey = "1fas";

  // const isMyProfile = areKeysEqual([currentUserPublicKey, publicKey]);
  const isMyProfile = true;
  const bothAreValid =
    twitterSocialVerification?.isValid && instagramSocialVerification?.isValid;
  const justTwitter =
    twitterSocialVerification?.isValid && !instagramSocialVerification?.isValid;
  const justInstagram =
    !twitterSocialVerification?.isValid && instagramSocialVerification?.isValid;

  // const showInvitedByTag = isAllTrue([
  //   user?.acceptedInvite,
  //   // If a user has invited themself then do not show the invited by tag
  //   // On Foundations Birthday we removed this restriction, as we gave out invites to collectors
  //   !areKeysEqual([user?.acceptedInvite?.senderPublicKey, publicKey]),
  //   // When a user has admin priviliges removed we set their invited by address to 0x so that we can then hide it from invited by users
  //   !areKeysEqual([
  //     user?.acceptedInvite?.senderPublicKey,
  //     constants.AddressZero,
  //   ]),
  // ]);

  // Note from @gosseti:
  // In future this could be an array — feels like a more appropriate data type (the same for user.links too
  const socialLinksVerified: SocialLinkVerifiedMap = bothAreValid
    ? {
        twitter: {
          platform: SocialLinkType.twitter,
          handle: twitterSocialVerification?.username,
        },
        instagram: {
          platform: SocialLinkType.instagram,
          handle: instagramSocialVerification?.username,
        },
      }
    : justTwitter
    ? {
        twitter: {
          platform: SocialLinkType.twitter,
          handle: twitterSocialVerification?.username,
        },
      }
    : justInstagram
    ? {
        instagram: {
          platform: SocialLinkType.instagram,
          handle: instagramSocialVerification?.username,
        },
      }
    : {};

  if (
    !ensName &&
    // !user?.acceptedInvite &&
    !twitterSocialVerification?.isValid &&
    !instagramSocialVerification?.isValid
  ) {
    return <></>;
  }
  const showInvitedByTag = true;
  return (
    <Grid css={{ gap: '$2', justifyContent: 'flex-start' }}>
      {(twitterSocialVerification?.isValid ||
        instagramSocialVerification?.isValid ||
        isMyProfile) && (
        <ProfileSocialLinksVerified
          socialLinks={socialLinksVerified}
          isMyProfile={isMyProfile}
        />
      )}
      {ensName && <ENSNamePill ensName={ensName} />}
      {showInvitedByTag && (
        <Box>
          {/* <UserTagInvitedBy invite={user?.acceptedInvite} /> */}
          <UserTagInvitedBy />
        </Box>
      )}
    </Grid>
  );
}
