/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-max-depth */
import { Configure, InstantSearch } from 'react-instantsearch-dom';
import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { GetStaticPropsResult } from 'next';

import Page from '~/components/Page';
import Grid from '~/components/base/Grid';
import BrowseHeaderTabs, {
  BrowseHeaderContainer,
} from '~/components/search/algolia/BrowseHeaderTabs';
import LoadingPage from '~/components/LoadingPage';
import SearchFiltersStacked from '~/components/search/SearchFiltersStacked';
import SearchNavigationSortBar from '~/components/search/algolia/SearchNavigationSortBar';
import SearchNavigationSortOptions from '~/components/search/algolia/SearchNavigationSortOptions';
import SearchFiltersToggle from '~/components/search/SearchFiltersToggle';
import SearchFiltersContainer from '~/components/search/algolia/SearchFiltersContainer';
import SearchContainer from '~/components/search/SearchContainer';
import SearchPageBody from '~/components/search/SearchPageBody';

// import searchClient, { algoliaUsersIndexes } from '~/lib/clients/algolia';
// import { urlToSearchState, searchStateToUrl, createUrl } from '~/utils/algolia';

import useSearchState from '~/state/stores/search';

import { PUBLIC_FEED_PER_PAGE_COUNT } from '~/lib/constants';
import {
  AlgoliaSearch,
  buildAlgoliaSearchQuery,
} from '~/hooks/queries/algolia/use-algolia-search';
import { getAlgoliaMultipleSearchResults } from '~/hooks/queries/algolia/shared';
import { PageType } from '~/types/page';
import ArtworkSearchFilters from '~/components/search/artworks/ArtworkSearchFilters';
import ArtworkSearchResults from '~/components/search/artworks/ArtworkSearchResults';

export default function Profiles(props: PageProps): JSX.Element {
  const { globalSearchData } = props;

//   const router = useRouter();
//   const [searchState, setSearchState] = useState(urlToSearchState(router));
  // const isSearchLoading = useSearchState((state) => state.isLoading);
  const isSearchLoading = false;

  const [searchOpen, searchSearchOpen] = useState(false);

  const openSearch = () => searchSearchOpen(true);
  const closeSearch = () => searchSearchOpen(false);

  const handleSearchStateChange = (state: { refinementList: any; range: any; sortBy: any; }) => {
    const { refinementList, range, sortBy } = state;
    // console.log(state, 'searchState');
    // setSearchState(state);
    // If router isnt ready return early to stop update of default state
    // if (!router.isReady) {
    //   return;
    // }

    // const currentQueryString = searchStateToUrl(router.query);
    const releventQueries = { refinementList, sortBy, range };
    // const queryString = searchStateToUrl(releventQueries);
    // We only want to scroll to top if the query string has changed
    // const hasQueryStringChanged = currentQueryString !== queryString;
    const hasQueryStringChanged = false;

    // if (hasQueryStringChanged) {
    //   router.push(`?${queryString}`, undefined, {
    //     shallow: true,
    //     scroll: true,
    //   });
    // }
  };

  return (
    <Page title="NFTs" footerStyle={{ display: 'none' }} type={PageType.maximal} absolute={false}>
      {/* <InstantSearch
        // searchClient={searchClient}
        indexName="users"
        // createURL={createUrl}
        onSearchStateChange={handleSearchStateChange}
        // searchState={searchState}
      > */}
        {/* <Configure
          hitsPerPage={PUBLIC_FEED_PER_PAGE_COUNT}
          facetFilters={['moderationStatus:ACTIVE', 'isHidden:false']}
        /> */}
        {/* {isSearchLoading && <LoadingPage css={{ paddingBottom: 0 }} />} */}

        {/* <SearchFiltersStacked
          isOpen={searchOpen}
          closeSearch={closeSearch}
          filters={[
            <SearchNavigationSortOptions
              key="search"
            //   algoliaIndexes={algoliaUsersIndexes}
              orientation="vertical"
              defaultRefinement="users_sort_total_vol_desc"
            />,
            <ProfileSearchFilters key="filters" />,
          ]}
        /> */}

        <SearchPageBody isLoading={isSearchLoading}>
          <BrowseHeaderContainer>
            {/* <BrowseHeaderTabs placeholderData={globalSearchData} /> */}
            <BrowseHeaderTabs />
            <SearchNavigationSortBar
            // algoliaIndexes={algoliaUsersIndexes}
            defaultRefinement="users_sort_total_vol_desc"
             />
          </BrowseHeaderContainer>
          <Grid css={{ alignItems: 'flex-start' }}>
            <SearchContainer>
              <SearchFiltersContainer isSearchStalled={false}>
                <ArtworkSearchFilters />
              </SearchFiltersContainer>
              <ArtworkSearchResults />

              <SearchFiltersToggle openSearch={openSearch} />
            </SearchContainer>
          </Grid>
        </SearchPageBody>
      {/* </InstantSearch> */}
    </Page>
  );
}

type PageProps = {
  globalSearchData: AlgoliaSearch;
};

// export async function getStaticProps(): Promise<
//   GetStaticPropsResult<PageProps>
// > {
//   return {
//     props: {
//       globalSearchData: await getAlgoliaMultipleSearchResults(
//         buildAlgoliaSearchQuery('')
//       ),
//     },
//     // revalidate every 2 mins
//     revalidate: 120,
//   };
// }
