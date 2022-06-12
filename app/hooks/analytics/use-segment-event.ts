import { useCallback } from 'react';

import useSegment from './use-segment';

// bid events
type BidEvent = 'bid_viewed' | 'bid_placed' | 'bid_approved' | 'bid_rejected';
// wallet events
type WalletEvent = 'wallet_connected';
// search events
type GlobalSearch = 'global_search';
// follow events
type FollowEvent = 'follow_create' | 'follow_remove';
// settle events
type SettleEvent = 'auction_settled';
// featured artwork
type FeaturedArtworkEvent =
  | 'primary_featured_artwork_clicked'
  | 'featured_artwork_clicked'
  | 'trending_auction_clicked'
  | 'featured_collection_clicked';
// mint events
type MintEvent = 'artwork_minted';
// list events
type ListEvent = 'artwork_listed';
// buy now events
type BuyNowEvent =
  | 'buy_now_viewed'
  | 'buy_now_set'
  | 'buy_now_changed'
  | 'buy_now_removed'
  | 'buy_now_accepted';
// offer events
type OfferEvent = 'offer_viewed' | 'offer_made' | 'offer_accepted';
// Homepage events
type HomepageEvent =
  | 'fndos_banner_clicked'
  | 'fndos_banner_dismissed'
  | 'homepage_primary_cta_clicked'
  | 'featured_profile_clicked'
  | 'featured_profile_in_collection_clicked';
type MarketingEvent =
  | 'marketing_top_cta_clicked'
  | 'marketing_bottom_cta_clicked'
  | 'marketing_sticky_header_cta_clicked';

type Web3ActionEvent =
  | 'web3_action_viewed'
  | 'web3_action_accepted'
  | 'web3_action_rejected';

type ShareEvent =
  | 'share_button_clicked'
  | 'share_url_clicked'
  | 'share_twitter_clicked';

export type EventName =
  | BidEvent
  | WalletEvent
  | GlobalSearch
  | FollowEvent
  | SettleEvent
  | FeaturedArtworkEvent
  | MintEvent
  | ListEvent
  | BuyNowEvent
  | OfferEvent
  | HomepageEvent
  | MarketingEvent
  | Web3ActionEvent
  | ShareEvent;

export type SegmentEvent<Payload extends Record<string, unknown>> = {
  eventName: EventName;
  payload: Payload;
};

export type SegmentAuctionPayload = {
  contractAddress: string;
  auctionId: number;
  tokenId: number;
};

export type SegmentAuctionBidPayload = SegmentAuctionPayload & {
  ethAmount: number;
};

export type SegmentMarketPayload = {
  contractAddress: string;
  tokenId: number;
  ethAmount: number;
  sellerAddress: string;
  buyerAddress: string;
  creatorAddress: string;
};

export type SegmentWeb3Payload = {
  /**
   * seller = creator/minter of an NFT
   * buyer = buyer of an NFT
   */
  userType: 'buyer' | 'seller';
} & (
  | {
      /** web3 marketplace activity */
      type: 'market';
      marketType: 'auction' | 'buy_now' | 'offer';
    }
  | {
      /** web3 creation flows */
      type: 'supply';
      userType: 'seller';
      actionType: 'mint';
    }
);

export default function useSegmentEvent() {
  const analytics = useSegment();

  const sendSegmentEvent = useCallback(
    <T extends Record<string, any>>(event: SegmentEvent<T>) => {
      analytics?.track(event.eventName, event.payload);
    },
    [analytics]
  );

  return [sendSegmentEvent];
}
