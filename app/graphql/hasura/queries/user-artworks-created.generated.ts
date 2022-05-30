import * as Types from '../types-hasura.generated';

import { ArtworkFragmentExtended } from '../hasura-fragments.generated';
import { useQuery, UseQueryOptions } from 'react-query';
import { hasuraFetcher } from '~/lib/clients/graphql';
export type UserArtworksCreatedVariables = Types.Exact<{
  publicKey: Types.Scalars['String'];
  contractAddress: Types.Scalars['String'];
  limit?: Types.Maybe<Types.Scalars['Int']>;
  offset?: Types.Maybe<Types.Scalars['Int']>;
  indexedStates: Array<Types.Scalars['Boolean']> | Types.Scalars['Boolean'];
}>;


export type UserArtworksCreated = { artworks: Array<(
    { artworkUserVisibilities: Array<Pick<Types.Artwork_User_Visibility, 'hiddenAt'>> }
    & ArtworkFragmentExtended
  )> };


export const UserArtworksCreatedDocument = /*#__PURE__*/ `
    query UserArtworksCreated($publicKey: String!, $contractAddress: String!, $limit: Int, $offset: Int, $indexedStates: [Boolean!]!) {
  artworks: artwork(
    where: {publicKey: {_eq: $publicKey}, contractAddress: {_eq: $contractAddress}, isIndexed: {_in: $indexedStates}, tokenId: {_is_null: false}, deletedAt: {_is_null: true}}
    order_by: {tokenId: desc_nulls_last}
    limit: $limit
    offset: $offset
  ) {
    ...ArtworkFragmentExtended
    artworkUserVisibilities(
      where: {publicKey: {_eq: $publicKey}, hiddenAt: {_is_null: false}}
    ) {
      hiddenAt
    }
  }
}
    ${ArtworkFragmentExtended}`;
export const useUserArtworksCreated = <
      TData = UserArtworksCreated,
      TError = Error
    >(
      variables: UserArtworksCreatedVariables, 
      options?: UseQueryOptions<UserArtworksCreated, TError, TData>
    ) => 
    useQuery<UserArtworksCreated, TError, TData>(
      ['UserArtworksCreated', variables],
      hasuraFetcher<UserArtworksCreated, UserArtworksCreatedVariables>(UserArtworksCreatedDocument, variables),
      options
    );
useUserArtworksCreated.getKey = (variables: UserArtworksCreatedVariables) => ['UserArtworksCreated', variables];
