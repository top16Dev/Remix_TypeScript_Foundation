import { cond, equals } from 'ramda';
import { styled } from '~/stitches.config';
import { connectSortBy } from 'react-instantsearch-dom';
import { useEffect } from 'react';

// import { AlgoliaIndexName } from '~/types/Algolia';

import Flex from '~/components/base/Flex';
import Text from '~/components/base/Text';
import Grid from '~/components/base/Grid';
import AlgoliaSelectField from '~/components/forms/fields/algolia/AlgoliaSelectField';
// import { getFirstValue } from '~/utils/helpers';

// a component that will refine to the first
// index when the available indexes changes
// const ConnectedSortBy = connectSortBy((props) => {
//   const { items, refine } = props;

//   const firstItem = getFirstValue(items);
//   const firstValue = firstItem?.value;

//   useEffect(
//     () => {
//       refine(firstValue);
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [firstValue]
//   );

//   return null;
// });
interface SearchNavigationSortBarProps {
  // algoliaIndexes: AlgoliaIndexName[];
  className?: string;
  // orientation?: 'vertical' | 'horizontal';
  orientation: string;
  defaultRefinement: string;
}
type CollectionIndex = {
  indexName: string;
  // value: AlgoliaSearchIndex;
  value: string;
};
export default function SearchNavigationSortOptions(
  props: SearchNavigationSortBarProps
): JSX.Element {
  // const { algoliaIndexes, className, orientation, defaultRefinement } = props;
  const {className, orientation, defaultRefinement } = props;
  const collectionIndexes: CollectionIndex[] = [
    {
      indexName: 'Total Volume',
      value: 'users_sort_total_vol_desc',
    },
    {
      indexName: 'Newest to Oldest',
      value: 'users_sort_date_joined_desc',
    },
    {
      indexName: 'Oldest to Newst',
      value: 'users_sort_date_joined_asc',
    },
    {
      indexName: 'Most Minted',
      value: 'users_sort_num_minted_desc',
    },
    {
      indexName: 'Most Sold',
      value: 'users_sort_num_sold_desc',
    },
  ];
  const mappedIndexes = collectionIndexes.map((index) => ({
    id: index.indexName,
    label: index.indexName,
    // value: index.indexValue as string,
  }));
  return (
    <>
      {/* <ConnectedSortBy items={algoliaIndexes} /> */}
      <SearchNavigationContainer
        orientation={"horizontal"}
        className={className}
      >
        {cond([
          [
            equals('horizontal'),
            () => (
              <>
                <IndexTabLabel css={{ marginRight: '$5' }}>
                  Sort by
                </IndexTabLabel>
                <AlgoliaSelectField
                  // items={algoliaIndexes}
                  items={mappedIndexes}
                  currentRefinement={defaultRefinement}
                />
              </>
            ),
          ],
          [
            equals('vertical'),
            () => (
              <>
                <IndexTabLabel css={{ marginBottom: '$6' }}>
                  Sort by
                </IndexTabLabel>
                <Grid css={{ gap: '$3' }}>
                  <AlgoliaSelectField
                    // items={algoliaIndexes}
                    items={mappedIndexes}
                    // defaultRefinement={defaultRefinement}
                  currentRefinement={defaultRefinement}
                  />
                </Grid>
              </>
            ),
          ],
        ])(orientation)}
      </SearchNavigationContainer>
    </>
  );
}

const SearchNavigationContainer = styled(Flex, {
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        alignItems: 'center',
        marginBottom: 'auto',
      },
    },
  },
});

const IndexTabLabel = styled(Text, {
  fontSize: '$2',
  fontWeight: 600,
  fontFamily: '$body',
  color: '$black100',
  whiteSpace: 'nowrap',
  variants: {
    isActive: {
      true: {
        color: '$black100 !important',
      },
    },
  },
});
