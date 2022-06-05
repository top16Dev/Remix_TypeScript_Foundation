/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-max-depth */
import { useRef } from 'react';
import { useToggle, useClickAway } from 'react-use';
// import { useRouter } from 'next/router';
import { useRoutes } from 'react-router-dom';
import { FunctionComponent, SVGAttributes } from 'react';

import NavLink from './NavLink';
import { Link } from "@remix-run/react";
import NavLinkWrapper from './NavLinkWrapper';
import Flex from '~/components/base/Flex';
import InnerNavLink from './InnerNavLink';
import Box from '~/components/base/Box';
import Text from '~/components/base/Text';
import Icon from '~/components/Icon';

import TrendingIcon from '~/assets/icons/trending-icon';
import BrowseIcon from '~/assets/icons/browse-icon';
import ChevronRight from '~/assets/icons/right-chevron';
import CollectionsIcon from '~/assets/icons/collections-icon';
import {
  useParams,
  useLocation,
} from "react-router-dom";
import { useMemo } from "react";
import queryString from "query-string";
import useIsomorphicLayoutEffect from '~/hooks/use-isomorphic-layout-effect';

interface NavLinksProps {
  isDark: boolean;
  isLoggedIn?: boolean;
}

interface NavLink {
  label: string;
  href?: string;
  icon?: FunctionComponent<SVGAttributes<SVGElement>>;
  // icon: IconComponent;
  innerLinks?: NavLink[];
}
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      location,
    };
  }, [params, location]);
}
export default function NavLinks(props: NavLinksProps): JSX.Element {
  const { isDark, isLoggedIn = false } = props;

  // const router = useRoutes();
  const currentPath = useLocation().pathname;
  // const currentPath = '/about';
  const ref = useRef(null);

  const [isOpen, toggleNav] = useToggle(false);

  useClickAway(ref, () => {
    toggleNav(false);
  });

  const appendRef = useRef(null);

  const innerLinks = [
    { label: 'Collections', href: '/collections', icon: CollectionsIcon },
    {
      label: 'Trending',
      href: '/trending',
      icon: TrendingIcon,
    },
    {
      label: 'Browse',
      href: '/artworks',
      icon: BrowseIcon,
    },
  ];

  const authNavLinks = [
    {
      label: 'Explore',
      innerLinks,
    },
    { label: 'Feed', href: '/feed' },
  ];

  const noAuthNavLinks = [
    {
      label: 'Explore',
      innerLinks,
    },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  const navLinks = isLoggedIn ? authNavLinks : noAuthNavLinks;

  // useIsomorphicLayoutEffect(() => {
  //   appendRef.current = document.getElementById('portal');
  // }, []);

  return (
    <NavLinkWrapper ref={ref}>
      {navLinks.map((link: NavLink) => {
        if (link.innerLinks) {
          return (
            <Box
              key={link.label}
              onClick={toggleNav}
              css={{ position: 'relative' }}
            >
              <Box css={{ cursor: 'pointer', minWidth: 0 }}>
                <NavLink as="div" isDark={isDark} css={{ marginRight: '$7' }}>
                  {link.label}
                </NavLink>
              </Box>

              {isOpen && (
                <Flex
                  css={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    position: 'absolute',
                    marginTop: '$6',
                    borderRadius: '$2',
                    width: 300,
                    backgroundColor: '$white100',
                    boxShadow: '$1',
                    flexDirection: 'column',
                    padding: '$2',
                  }}
                >
                  {link.innerLinks.map((link) => (
                    // <Link key={link.href} to={link.href} passHref>
                    // <Link key={link.href} to="/about">
                      <InnerNavLink isActive={currentPath === link.href} href={link.href}>
                        <Box
                          css={{
                            display: 'flex',
                          }}
                        >
                          <Box
                            css={{
                              marginRight: '$4',
                              verticalAlign: 'text-bottom',
                            }}
                          >
                            <Icon icon={link.icon} width={22} height={22} />
                          </Box>
                          <Text>{link.label}</Text>
                        </Box>
                        <ChevronRight />
                      </InnerNavLink>
                    // </Link>
                  ))}
                </Flex>
              )}
            </Box>
          );
        } else {
          return (
            // <Link key={link.href} to={link.href} passHref>
            // <Link key={link.href} to="/about">
              <NavLink
                isActive={currentPath === link.href}
                isDark={isDark}
                css={{ marginRight: '$7' }}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </NavLink>
            // {/* // </Link> */}
          );
        }
      })}
    
    </NavLinkWrapper>
  );
}
