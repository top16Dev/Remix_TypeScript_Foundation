/* eslint-disable react/jsx-key */
import { useLockBodyScroll } from 'react-use';
import {Link as RemixLink} from '@remix-run/react'

import ConnectWalletWideButton from './ConnectWalletWideButton';

import Link from '~/components/base/Link';
import Box from '~/components/base/Box';
import { styled } from '~/stitches.config';
import Flex from '~/components/base/Flex';
import Grid from '~/components/base/Grid';

interface MobileHeaderProps {
  viewportHeight: number;
  isOpen: boolean;
  isConnected: boolean;
}

export default function MobileHeader(props: MobileHeaderProps): JSX.Element {
  const { viewportHeight, isOpen, isConnected } = props;

  useLockBodyScroll(isOpen);

  if (!isOpen) {
    // return null;
    return <></>;
  }

  return (
    <Overlay style={{ height: viewportHeight }}>
      <Flex
        css={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          flex: 1,
        }}
      >
        <Box>
          {mobileNavLinks.map((navLink) => (
            <RemixLink to={navLink.href} key={navLink.href} style={{textDecoration:"none", color:"black"}}>
            <Link
              css={{
                display:
                  navLink.isAuthRoute && !isConnected ? 'none' : 'block',
                color: '$black100',
                textDecoration: 'none',
                fontSize: '$4',
                letterSpacing: -1,
                lineHeight: 1.2,
                fontWeight: 600,
                '@bpxs': {
                  fontSize: '$3',
                },
              }}
            >
              {navLink.children}
            </Link>
            </RemixLink>
          ))}
        </Box>
        <Grid css={{ gridGap: '$6' }}>
          {!isConnected && <ConnectWalletWideButton />}
          <Grid
            css={{
              gridTemplateColumns: '1fr 1fr',
              marginTop: 'auto',
              gridColumnGap: '$6',
              gridRowGap: '$2',
              paddingBottom: '$7',
            }}
          >
            {secondaryLinks.map((navLink) => (
              <RemixLink to={navLink.href} key={navLink.href} style={{textDecoration:"none", color:"black"}}>
              <Link 
                  css={{
                    textDecoration: 'none',
                    display: 'block',
                    color: '$black30',
                    fontSize: '$0',
                    fontWeight: 600,
                  }}
                >
                  {navLink.children}
              </Link>
              </RemixLink>
            ))}
          </Grid>
        </Grid>
      </Flex>
    </Overlay>
  );
}

const Overlay = styled(Flex, {
  position: 'fixed',
  paddingTop: '$10',
  paddingX: '$6',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: 999,
  background: '$white100',
  flexDirection: 'column',
  height: '100vh',
});

const mobileNavLinks = [
  {
    href: '/feed',
    children: 'Feed',
    isAuthRoute: true,
  },
  {
    children: 'Trending',
    href: '/trending',
  },
  {
    href: '/nfts',
    children: 'Browse',
  },
  { href: '/careers', children: 'Careers' },
  {
    href: 'https://help.foundation.app',
    children: 'Help',
  },
  {
    children: 'Twitter',
    href: 'https://twitter.com/foundation',
  },
  {
    children: 'Instagram',
    href: 'https://www.instagram.com/withfoundation/',
    external: true,
  },
];

const secondaryLinks = [
  {
    children: 'Terms of Service',
    href: '/terms',
  },
  {
    children: 'Privacy',
    href: '/privacy',
  },
];

