/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { config } from '~/stitches.config';
import { useState } from 'react';
import { useMedia } from 'react-use';

import DataTable from '~/components/data-table/DataTable';

import { buildUserProfilePath } from '~/utils/artwork/artwork';
import {
  getTimeFilterPrefix,
  getTrendingCreatorOrderByField,
} from '~/utils/trending';

import useTrendingCreators from '~/hooks/queries/hasura/use-trending-creators';
import useInfiniteData from '~/hooks/use-infinite-data';

import {
  TimeFilter,
  TrendingCreator,
  TrendingCreatorColumn,
} from '~/types/Trending';
import TrendingCreatorColumns from './TrendingCreatorsColumns';
import React from 'react';

interface TrendingCreatorsTableProps {
  activeTimeFilter: TimeFilter;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function TrendingCreatorsTable(
  props: TrendingCreatorsTableProps
) {
  const { activeTimeFilter } = props;

  const [activeColumn, setActiveColumn] = useState(
    TrendingCreatorColumn.TotalVolume
  );

  const orderByField = getTrendingCreatorOrderByField({
    timeFilter: activeTimeFilter,
    orderByColumn: activeColumn,
  });
  // const { data, isLoading } = useTrendingCreators({
  //   orderByField,
  // });

  // const flattenedData = useInfiniteData(data, 'user');

  // const onlyDataWithSales = flattenedData.filter((d) => {
  //   const queryField = `${getTimeFilterPrefix(activeTimeFilter)}NumSold`;
  //   return d[queryField] > 0;
  // });

  const isMobile = !useMedia(config.media.bp2);
  // const isMobile = false;
  const columns = TrendingCreatorColumns(activeTimeFilter, isMobile);

  const mycolumns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        columns: [
          {
            Header: 'Owners',
            accessor: 'totalCollectors',
          },
          {
            Header: 'NFTs sold',
            accessor: 'totalNumSold',
          },
          {
            Header: 'Primary Sales',
            accessor: 'totalPrimaryVol',
          },
          {
            Header: 'Secondary Sales',
            accessor: 'totalSecondaryVol',
          },
          {
            Header: 'Total Sales',
            accessor: 'totalVol',
          },
        ],
      },
    ],
    []
  )
  const mydata = {
    oneDayVol: 2,
    oneDayNumSold: 3,
    oneDayCollectors: 1,
    oneDayPrimaryVol: 123,
    oneDaySecondaryVol: 52,

    oneWeekVol: 42,
    oneWeekNumSold: 342,
    oneWeekCollectors: 423,
    oneWeekPrimaryVol: 234,
    oneWeekSecondaryVol: 123,

    oneMonthVol: 432,
    oneMonthNumSold: 234,
    oneMonthCollectors: 423,
    oneMonthPrimaryVol: 12,
    oneMonthSecondaryVol: 124,

    totalVol: 10000,
    totalNumSold: 423,
    totalCollectors: 234,
    totalPrimaryVol: 121,
    totalSecondaryVol: 4234,
  }
  const myarray = new Array<TrendingCreator>();
  myarray.push(mydata);
  myarray.push(mydata);
  return (
    <DataTable<TrendingCreator>
      // isLoading={isLoading}
      isLoading={false}
      // data={onlyDataWithSales}
      columns={columns}
      // columns={mycolumns} 
      data={myarray}
      // initialState={{
      //   sortBy: [{ id: TrendingCreatorColumn.TotalVolume }],
      // }}
      // onSortBy={(sort) => {
      //   const sortColumn = TrendingCreatorColumn[sort[0].id];
      //   setActiveColumn(sortColumn);
      // }}
      // getLink={(props) => {
      //   const { original } = props;
      //   return buildUserProfilePath({ user: original.user });
      // }}
      hiddenMobileCols={[
        {
          id: TrendingCreatorColumn.UniqueCollectors,
          label: 'Unique Collectors',
        },
        { id: TrendingCreatorColumn.NftsSold, label: 'NFTs Sold' },
        {
          id: TrendingCreatorColumn.PrimarySales,
          label: 'Primary Sales',
        },
        {
          id: TrendingCreatorColumn.SecondarySales,
          label: 'Secondary Sales',
        },
        { id: TrendingCreatorColumn.TotalVolume, label: 'Total Volume' },
      ]}
      defaultMobileCol={{
        id: TrendingCreatorColumn.TotalVolume,
        label: 'Total Volume',
      }}     
      />
  );
}