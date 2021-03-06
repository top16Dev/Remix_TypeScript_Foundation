import { gql } from 'graphql-request';

export const ArtworkFragment = gql`
  fragment ArtworkFragment on Artwork {
    id
    name
    description
    assetScheme
    assetHost
    assetPath
    assetIPFSPath
    metadataScheme
    metadataHost
    metadataPath
    metadataIPFSPath
    mintTxHash
    auctionStartTxHash
    width
    height
    duration
    mimeType
    tokenId
    status
    hiddenAt
    deletedAt
    moderationStatus
  }
`;

export const UserFragmentLight = gql`
  fragment UserFragmentLight on User {
    userIndex
    publicKey
    username
    profileImageUrl
    coverImageUrl
    name
    bio
    isApprovedCreator
    moderationStatus
  }
`;

export const UserFragment = gql`
  fragment UserFragment on User {
    userIndex
    publicKey
    username
    name
    firstName
    lastName
    isAdmin
    providerType
    bio
    coverImageUrl
    profileImageUrl
    isApprovedCreator
    moderationStatus
    links {
      website {
        platform
        handle
      }
      instagram {
        platform
        handle
      }
      twitter {
        platform
        handle
      }
      youtube {
        platform
        handle
      }
      facebook {
        platform
        handle
      }
      twitch {
        platform
        handle
      }
      tiktok {
        platform
        handle
      }
      discord {
        platform
        handle
      }
      snapchat {
        platform
        handle
      }
    }
  }
`;

export const InviteCodeFragment = gql`
  fragment InviteCodeFragment on InviteCode {
    inviteCode
    createdAt
    updatedAt
    redeemedAt
  }
`;

export const SocialVerificationFragment = gql`
  fragment SocialVerificationFragment on SocialVerification {
    id
    createdAt
    updatedAt
    lastCheckedAt
    socialVerificationURL
    verificationText
    userId
    username
    isValid
    service
    status
  }
`;
