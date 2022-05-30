/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import { styled, css } from '~/stitches.config';
import type { CellProps } from 'react-table';

import { formatETHWithSuffix } from '~/utils/formatters';

import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import ETHinUSD from '~/components/ETHinUSD';
import TrendingName from './TrendingName';
import TrendingUsername from './TrendingUsername';
import SingleValue from './SingleValue';
import SubValue from './SubValue';
import RankValue from './RankValue';
import FollowPopover from '~/components/follows/FollowPopover';
import type {
  TimeFilter,
  TrendingCreator} from '~/types/Trending';
import {
  TrendingCreatorColumn,
} from '~/types/Trending';
import CircleAvatar from '~/components/avatars/CircleAvatar';

import {
  // getUsernameOrTruncatedAddress,
  hasUsername,
  publicKeyOrIdOrAddress,
} from '~/utils/helpers';
import { getTimeFilterPrefix } from '~/utils/trending';

const Header = styled(Box, {
  display: 'none',
  fontFamily: '$body',
  fontWeight: 600,
  color: '$black60',
  fontSize: '$1',
  paddingX: '$2',
  cursor: 'pointer',
  '@bp2': { display: 'block' },
  variants: {
    isActive: { true: { color: '$black100' } },
  },
});

export default function TrendingCreatorColumns(
  activeTimeFilter: TimeFilter,
  isMobile: boolean
) {
  return [
    {
      id: 'rank',
      width: 50,
      Header: function RankHeader() {
        return (
          <Box css={{ paddingLeft: '$4', '@bp2': { paddingLeft: '$2' } }}>
            Rank
          </Box>
        );
      },
      Cell: function RankCell({ row, column }: CellProps<TrendingCreator>) {
        if (isMobile) {
          column.width = 40;
        }

        return <RankValue>#{row.index + 1}</RankValue>;
      },
    },
    {
      id: 'user',
      width: 250,
      Cell: function UserCell({ row, column }: CellProps<TrendingCreator>) {
        if (isMobile) {
          column.width = 180;
        }
        // const {
        //   original: { user },
        // } = row;
        const user = {
          profileImageUrl : "/images/svg-text/Blog1.png",
          publicKey : "1111",
          name : "fam"
        }
        // const userHasUsername = hasUsername(user);
        const userHasUsername = true;
        // const userHasName = user.name;
        const userHasName = "Family";
        // const usernameOrTruncatedAddress = getUsernameOrTruncatedAddress(user);
        const usernameOrTruncatedAddress = "aasdfa";

        const popoverStyles = css({
          position: 'relative',
          zIndex: 3,
          display: 'flex',
        })();

        return (
          <FollowPopover
          // publicKey={publicKeyOrIdOrAddress(user)}
          publicKey="121212"
          className={popoverStyles}
          >
            <Flex
              css={{
                maxWidth: 160,
                alignItems: 'center',
                '@bp0': {
                  maxWidth: 250,
                },
              }}
            >
              <CircleAvatar
                maxSize={50}
                css={{
                  flexShrink: 0,
                  width: 30,
                  height: 30,
                  '@bp2': { width: 50, height: 50 },
                }}
                publicKey={user.publicKey}
                imageUrl={user.profileImageUrl}
              />
              <Box
                css={{
                  marginLeft: '$3',
                  overflow: 'hidden',
                  '@bp1': { marginLeft: '$5' },
                }}
              >
                {userHasName && <TrendingName>{user.name}</TrendingName>}
                <Flex>
                  <TrendingUsername
                    // color={userHasUsername ? 'rainbow' : null}
                    color={'rainbow'}
                    hasNoUsername={!userHasUsername}
                    hasNoName={!userHasName}
                  >
                    {usernameOrTruncatedAddress}
                  </TrendingUsername>
                </Flex>
              </Box>
            </Flex>
          </FollowPopover>
        );
      },
    },
    {
      id: TrendingCreatorColumn.UniqueCollectors,
      canSort: true,
      width: 150,
      Header: function CollectorsHeader({
        // column {: isSorted, toggleSortBy },
        column
      }: CellProps<TrendingCreator>) {
        return (
          <Header
          // onClick={() => toggleSortBy()}
          // isActive={isSorted}
          // css={{ textAlign: 'right' }}
        >
            Unique Collectors
          </Header>
        );
      },
      Cell: function CollectorsCell({
        row: { original },
      }: CellProps<TrendingCreator>) {
        const queryField = `${getTimeFilterPrefix(activeTimeFilter)}Collectors`;
        return (
          <Box css={{ textAlign: 'right', '@bp1': { textAlign: 'left' } }}>
            {/* <SingleValue>{original[queryField]}</SingleValue> */}121
          </Box>
        );
      },
    },
    {
      id: TrendingCreatorColumn.NftsSold,
      canSort: true,
      width: 100,
      Header: function NftsSoldHeader({
        // column: { isSorted, toggleSortBy },
        column
      }: CellProps<TrendingCreator>) {
        return (
          <Header
            // onClick={() => toggleSortBy()}
            // isActive={isSorted}
            // css={{ textAlign: 'right' }}
            >
            NFTs Sold
          </Header>
        );
      },
      Cell: function SoldCell({
        row: { original },
      }: CellProps<TrendingCreator>) {
        const queryField = `${getTimeFilterPrefix(activeTimeFilter)}NumSold`;
        return (
          <Box css={{ textAlign: 'right', '@bp1': { textAlign: 'left' } }}>
            {/* <SingleValue>{original[queryField]}</SingleValue> */}2
          </Box>
        );
      },
    },
    {
      id: TrendingCreatorColumn.PrimarySales,
      canSort: true,
      Header: function PrimarySalesHeader({
        column
        // column: { isSorted, toggleSortBy },
      }: CellProps<TrendingCreator>) {
        return (
          <Header
            // onClick={() => toggleSortBy()}
            // isActive={isSorted}
            css={{ textAlign: 'right' }}
          >
            Primary Sales
          </Header>
        );
      },
      Cell: function PrimaryVolCell({
        row: { original },
      }: CellProps<TrendingCreator>) {
        const queryField = `${getTimeFilterPrefix(activeTimeFilter)}PrimaryVol`;
        return (
          <Box css={{ textAlign: 'right' }}>
            <SingleValue css={{ marginBottom: '$1' }}>
              {/* {formatETHWithSuffix(original[queryField])} */}3.00ETH
            </SingleValue>
            <SubValue>
              {/* <ETHinUSD amount={original[queryField]} /> */}$5289
            </SubValue>
          </Box>
        );
      },
    },
    {
      id: TrendingCreatorColumn.SecondarySales,
      canSort: true,
      Header: function SecondarySalesHeader({
        // column: { isSorted, toggleSortBy },
        column
      }: CellProps<TrendingCreator>) {
        return (
          <Header
            // onClick={() => toggleSortBy()}
            // isActive={isSorted}
            css={{ textAlign: 'right' }}
          >
            Secondary Sales
          </Header>
        );
      },
      Cell: function SecondaryVolCell({
        row: { original },
      }: CellProps<TrendingCreator>) {
        const queryField = `${getTimeFilterPrefix(
          activeTimeFilter
        )}SecondaryVol`;
        return (
          <Box css={{ textAlign: 'right' }}>
            <SingleValue css={{ marginBottom: '$1' }}>
              {/* {formatETHWithSuffix(original[queryField])} */}0ETH
            </SingleValue>
            <SubValue>
              {/* <ETHinUSD amount={original[queryField]} /> */}$0.00
            </SubValue>
          </Box>
        );
      },
    },
    {
      id: TrendingCreatorColumn.TotalVolume,
      canSort: true,
      Header: function TotalVolHeader({
        // column: { isSorted, toggleSortBy },
        column
      }: CellProps<TrendingCreator>) {
        return (
          <Header
            // onClick={() => toggleSortBy()}
            // isActive={isSorted}
            css={{ textAlign: 'right' }}
          >
            Total Sales
          </Header>
        );
      },
      Cell: function TotalVolHeader({
        row: { original },
        column,
      }: CellProps<TrendingCreator>) {
        if (isMobile) {
          column.width = 100;
        }
        const queryField = `${getTimeFilterPrefix(activeTimeFilter)}Vol`;
        return (
          <Box css={{ textAlign: 'right', '@bp2': { paddingRight: '$3' } }}>
            <SingleValue css={{ marginBottom: '$1' }}>
              {/* {formatETHWithSuffix(original[queryField])} */}3.00ETH
            </SingleValue>
            <SubValue>
              {/* <ETHinUSD amount={original[queryField]} /> */}$5289
            </SubValue>
          </Box>
        );
      },
    },
  ];
}
