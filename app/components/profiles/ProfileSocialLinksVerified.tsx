/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/jsx-max-depth */
import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';

import TwitterVerifyLink from '~/components/links/SocialVerifyLink';
import InstagramVerifyPageLink from '~/components/links/InstagramVerifyPageLink';

import TwitterIcon from '~/assets/icons/twitter-icon';
import InstagramIcon from '~/assets/icons/instagram-icon';

// import { buildSocialLink } from '~/utils/urls';
import { getSocialHandle } from '~/utils/strings';

import SocialLinkVerified from './SocialLinkVerified';
import { SocialLinkVerifiedMap } from '~/types/SocialLink';
// import { useRouter } from 'next/router';
import {useLocation} from '@remix-run/react'
import { BUTTON_WIDTH } from '~/utils/buttons';

interface ProfileSocialLinksVerifiedProps {
  socialLinks: SocialLinkVerifiedMap;
  isMyProfile: boolean;
}

export default function ProfileSocialLinksVerified(
  props: ProfileSocialLinksVerifiedProps
): JSX.Element {
  const { socialLinks, isMyProfile } = props;

  const router = useLocation();

  return (
    <>
      {socialLinks.twitter ? (
        <Flex>
          <SocialLinkVerified
            icon={
              <Box css={{ width: 19 }}>
                <TwitterIcon
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </Box>
            }
            handle={socialLinks?.twitter?.handle}
            // linkBuilderFn={buildSocialLink.twitter}
          >
            {/* @{getSocialHandle(socialLinks?.twitter?.handle)} */}abab
          </SocialLinkVerified>
        </Flex>
      ) : isMyProfile ? (
        <Flex css={{ justifyContent: 'flex-start' }}>
          <Box
            css={{
              width: BUTTON_WIDTH,
              justifyContent: 'flex-center',
            }}
          >
            <TwitterVerifyLink
              text="Verify via Twitter"
              redirectPath={router.pathname}
            />
          </Box>
        </Flex>
      ) : null}
      {socialLinks.instagram ? (
        <Flex>
          <SocialLinkVerified
            icon={
              <Box css={{ width: 19 }}>
                <InstagramIcon
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </Box>
            }
            handle={socialLinks?.instagram?.handle}
            // linkBuilderFn={buildSocialLink.instagram}
          >
            {/* {getSocialHandle(socialLinks?.instagram?.handle)} */}sdfs
          </SocialLinkVerified>
        </Flex>
      ) : isMyProfile ? (
        <Flex css={{ justifyContent: 'flex-start' }}>
          <Box css={{ width: BUTTON_WIDTH, justifyContent: 'flex-center' }}>
            <InstagramVerifyPageLink
              text="Verify via Instagram"
              redirectPath={router.pathname}
            />
          </Box>
        </Flex>
      ) : null}
    </>
  );
}
