/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from '~/stitches.config';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

import Text from '~/components/base/Text';
import Body from '~/components/base/Body';
import Page from '~/components/Page';
import GraySquare from '~/components/base/GraySquare';
import TrendingTabs from '~/components/trending/TrendingTabs';

import { TimeFilter } from '~/types/Trending';
import Flex from '~/components/base/Flex';
import TrendingTimeFilters from '~/components/trending/TrendingTimeFilters';

import TrendingCreatorsTable from '~/components/trending/TrendingCreatorsTable';
import TrendingCollectorsTable from '~/components/trending/TrendingCollectorsTable';
import TrendingCollectionsTable from '~/components/trending/TrendingCollectionsTable';
import { PageType } from '~/types/page';

enum TrendingTab {
  Creators = 'Creators',
  Collectors = 'Collectors',
  Collections = 'Collections',
  Auctions = 'Auctions',
}

const PageHeading = styled(Text, {
  fontFamily: '$body',
  fontWeight: '$semibold',
  fontSize: '$4',
  letterSpacing: -1,
  marginBottom: '$6',
  textAlign: 'center',
  '@bp2': {
    fontSize: '$5',
  },
  '@bp4': {
    textAlign: 'left',
    marginBottom: '$9',
  },
});

export default function TrendingPage(): JSX.Element {
//   const router = useRouter();
//   const isRouterReady = router.isReady;
  const isRouterReady = true;
  const [activeTab, setActiveTab] = useState(TrendingTab.Creators);
  const [activeTimeFilter, setTimeFilter] = useState(TimeFilter.OneDay);

//   useEffect(() => {
//     if (isRouterReady && router.query.tab === 'collectors') {
//       setActiveTab(TrendingTab.Collectors);
//     }
//   }, [router, isRouterReady]);

  return (
    <Page title="Trending" type={PageType.maximal}>
      <Body
        css={{ paddingTop: '$8', paddingX: '$6', '@bp4': { paddingX: '$8' } }}
      >
        <PageHeading>
          {isRouterReady ? (
            `Trending ${activeTab}`
          ) : (
            <GraySquare
              css={{
                width: 300,
                height: 59,
                display: 'inline-block',
                '@bp2': {
                  height: 46,
                },
              }}
            />
          )}
        </PageHeading>

        <Flex
          css={{
            display: 'flex',
            justifyContent: 'right',
            marginBottom: '$7',
            '@bp1': { display: 'none' },
          }}
        >
          <TrendingTimeFilters
            setCurrentTimeFilter={(activeTimeFilter) =>
              setTimeFilter(activeTimeFilter)
            }
            currentTimeFilter={activeTimeFilter}
          />
        </Flex>

        <TrendingTabs
          tabs={[
            TrendingTab.Collections,
            TrendingTab.Creators,
            TrendingTab.Collectors,
            TrendingTab.Auctions,
          ]}
          currentView={activeTab}
          setCurrentView={(activeTab) => setActiveTab(activeTab)}
          currentTimeFilter={activeTimeFilter}
          setCurrentTimeFilter={(activeTimeFilter) =>
            setTimeFilter(activeTimeFilter)
          }
          isLoading={!isRouterReady}
        />

        {activeTab === TrendingTab.Creators && (
          <TrendingCreatorsTable activeTimeFilter={activeTimeFilter} />
        )}

        {/* {activeTab === TrendingTab.Collectors && (
          <TrendingCollectorsTable activeTimeFilter={activeTimeFilter} />
        )} */}

        {/* {activeTab === TrendingTab.Collections && (
          <TrendingCollectionsTable activeTimeFilter={activeTimeFilter} />
        )} */}
      </Body>
    </Page>
  );
}
