/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ReactNode } from 'react';
import {Link as RemixLink} from '@remix-run/react'
// import NextLink from 'next/link';

import TabHeading from './TabHeading';
import TabBar from './TabBar';
import Flex from '~/components/base/Flex';
import Link from '~/components/base/Link';

import { TabsProps } from '~/types/Tabs';

import { styled } from '~/stitches.config';

export default function Tabs<T extends string | number>(
  props: TabsProps<T>
): JSX.Element {
  const { setCurrentView, currentView, tabs } = props;

  return (
    <TabBar>
      {tabs.map((tab) => (
        <TabHeading
          weight="semibold"
          size={{ '@initial': 1, '@bp0': 2 }}
          key={tab}
          isActive={currentView === tab}
          onClick={() => setCurrentView(tab)}
        >
          {tab}
        </TabHeading>
      ))}
    </TabBar>
  );
}

interface TabsWithLabelsProps<T, U> {
  currentView: U;
  // setCurrentView: (arg1: string) => void;
  tabs: T[];
  isScrollable?: boolean;
}

export interface Tab {
  label: ReactNode;
  value: string;
  className?: string;
}

export function TabsWithLabels<T extends Tab, U extends string>(
  props: TabsWithLabelsProps<T, U>
): JSX.Element {
  const { 
    // setCurrentView, 
    currentView, tabs, isScrollable = false } = props;

  return (
    <TabBar isScrollable={isScrollable}>
      <TabContainer>
        {tabs.map((tab) => (
          <TabHeading
            weight="semibold"
            size={{
              '@initial': 1,
              '@bp0': 2,
            }}
            className={tab.className}
            key={tab.value}
            isActive={currentView === tab.value}
            // onClick={() => setCurrentView(tab.value)}
          >
            {tab.label}
          </TabHeading>
        ))}
      </TabContainer>
    </TabBar>
  );
}
interface TabsWithLinksProps<T, U> {
  // tabs: T[];
  tabs: any[];
  isScrollable?: boolean;
  setTab : (arg0: string) => void;
}

export type TabLink = Tab & {
  href: string;
  isActive: boolean;
};

export function TabsWithLinks<T extends TabLink, U extends string>(
  props: TabsWithLinksProps<T, U>
): JSX.Element {
  const { tabs, isScrollable = true, setTab } = props;

  return (
    <TabBar isScrollable={isScrollable}>
      <TabContainer>
        {tabs.map((tab) => (
          // <NextLink
          //   key={tab.value}
          //   href={tab.href}
          //   prefetch={false}
          //   passHref
          //   shallow
          // >
          <RemixLink key={tab.value} to={tab.href} style={{textDecoration:"none", color:"black"}} onClick={() => setTab(tab.value)}>
            <Link
            css={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <TabHeading
              weight="semibold"
              css={{
                '&:last-of-type': {
                  marginRight: '$6',
                },
              }}
              size={{
                '@initial': 1,
                '@bp0': 2,
              }}
              className={tab.className}
              key={tab.value}
              isActive={tab.isActive}
            >
              {tab.label}
            </TabHeading>
          </Link>
        </RemixLink>
          // </NextLink>
        ))}
      </TabContainer>
    </TabBar>
  );
}

export const TabContainer = styled(Flex, {
  overflowX: 'scroll',
  overflowY: 'hidden',
  maxWidth: '90vw',
  '@bp0': {
    overflow: 'hidden',
  },
});
