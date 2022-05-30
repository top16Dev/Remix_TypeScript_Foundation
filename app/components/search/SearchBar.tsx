/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState, memo } from 'react';
// import { useClickAway } from 'react-use';
// import useClickAway from './useClickAway'
// import { useRouter } from 'next/router';
import { always, cond } from 'ramda';
import {useRoutes} from 'react-router-dom';
import { styled } from '~/stitches.config';
import { Router, Route } from "react-router";
// import { useSuggestedTagsCounts } from '~/graphql/server/queries/suggested-tags-count.generated';
import useAlgoliaSearch from '~/hooks/queries/algolia/use-algolia-search';

import Box from '~/components/base/Box';
import SearchBarInput from './SearchBarInput';
import SearchBarResults, { SearchBoxContainer } from './SearchBarResults';
import SearchBarOverlay from './SearchBarOverlay';
import SearchTags from './SearchTags';

// import { isAllTrue, notEmptyOrNil } from '~/utils/helpers';

import { PageColorMode } from '~/types/page';
import { useSuggestedTagsCounts } from '~/graphql/server/queries/suggested-tags-count.generated';

const SearchContainer = styled(Box, {
  flex: 1,
  justifyContent: 'center',
  position: 'relative',
  '@bp1': {
    paddingLeft: '$7',
    paddingRight: '$7',
  },
});
interface SearchBarProps {
  pageColorMode: PageColorMode;
  
  searchOpen : boolean;
}

export default memo(SearchBar);

function SearchBar(props: SearchBarProps): JSX.Element {
  const { pageColorMode, searchOpen} = props;

  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // // // only fire the query when the search box is open
  // const { data: tagCountsData, isLoading: tagsLoading } =
  //   useSuggestedTagsCounts(null, {
  //     enabled: isFocused,
  //     refetchOnWindowFocus: false,
  //     refetchOnMount: false,
  //   });
  
  // const { data: searchData, isLoading: isSearchLoading } = useAlgoliaSearch(
  // const { data: AlgoliaSearch, isLoading: isSearchLoading } = useAlgoliaSearch(
  //   { searchTerm },
  //   {
  //     keepPreviousData: true,
  //     enabled: isAllTrue([isFocused, notEmptyOrNil(searchTerm != null ? true : false)]),
  //   }
  // );


  // const tagCounts = tagCountsData?.getCachedSuggestedTagCounts ?? [];

  // const tags = tagCounts.map((tagCount) => tagCount.tag);
  // const defaultTags = tags.slice(0, 10);

  // const router = useRouter();

  // useEffect(() => {
  //   setIsFocused(false);
  // }, [router.asPath]);

  // const hasValue = notEmptyOrNil(searchTerm != null ? true : false);
  const hasValue = 1;
  // const ref = useRef(null);

  // useClickAway(ref, () => {
  //   setIsFocused(false);
  // });

  return (
    <>
      <SearchContainer
        // ref={ref}
        key="SearchBar"
        className="header-search-bar"
        css={{
          display: searchOpen ? 'block' : 'none',
          '@bp2': {
            display: 'block',
          },
          '.creator-flow &': {
            display: 'none',
          },
        }}
      >
        <SearchBarInput
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          placeholder="Search Foundation…"
          onChange={setSearchTerm}
          searchTerm={searchTerm}
          colorMode={pageColorMode}
          searchOpen={searchOpen}
        />
        <Box css={{ position: 'relative' }}>
          {isFocused && (
          // <SearchBarResults
          //   currentValue={searchTerm}
          //   // searchData={searchData}
          //   isLoading={true}
          //   // tags={tags}
          //   tags={["2d", "illustrations", "animation", "concept art", "3d", "abstract", "contemporary art", "anime", "color", "asdf", "1231", "abs"]}
          // />
          <SearchBoxContainer>
            <SearchTags tags={["2d", "illustrations", "animation", "concept art", "3d", "abstract", "contemporary art", "anime", "color"]} />
          </SearchBoxContainer>
          )}
          {/* {cond([
            // when tags are loading
            [Boolean, () => null],
            // when focussed with a value
            [
              () => isFocused && hasValue,
              always(
                <SearchBarResults
                  currentValue={searchTerm}
                  isLoading={true}
                  tags={["2d", "illustrations", "animation", "concept art", "3d", "abstract", "contemporary art", "anime", "color", "asdf", "1231", "abs"]}
                />
              ),
            ],
            [
              () => isFocused,
              always(
                <SearchBoxContainer>
                  <SearchTags tags={["2d", "illustrations", "animation", "concept art", "3d", "abstract", "contemporary art", "anime", "color", "asdf", "1231", "abs"]} />
                </SearchBoxContainer>
              ),
            ],
          ])(tagsLoading)} */}
        </Box>
      </SearchContainer>
      <SearchBarOverlay
        css={{
          transform: 'translate3d(0, 0, 0)',
          opacity: isFocused ? 1 : 0,
          pointerEvents: isFocused ? 'all' : 'none',
          display: 'none',
          '@bp1': {
            display: 'block',
          },
        }}
      />
    </>
  );
}

function tagsLoading(tagsLoading: any): import("react").ReactNode {
  throw new Error('Function not implemented.');
}
