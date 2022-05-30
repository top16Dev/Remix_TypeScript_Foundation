import Flex from '~/components/base/Flex';
import UserTagV3 from '~/components/users/UserTagV3';
import CollectionPopoverCard from '~/components/collections/CollectionPopoverCard';

// import { UserFragment } from '~/graphql/hasura/hasura-fragments.generated';
// import { CollectionCardFragment } from '~/types/Collection';
// import { HandleSegmentEventFn } from './types';

import {
  ArtworkInfoBlock,
  ArtworkInfoContainer,
  ArtworkInfoHeading,
} from '../ArtworkInfo';
import UserTag from '~/components/users/UserTag';

interface FeaturedArtworkInfoProps {
  // user: UserFragment;
  // collection: CollectionCardFragment;
  // handleSegmentEvent: HandleSegmentEventFn;
}

export default function FeaturedArtworkInfo(
  props: FeaturedArtworkInfoProps
): JSX.Element {
  // const { user, collection, handleSegmentEvent } = props;

  const collection={
    objectID : 12,
    name : "Family",
    creator : "/images/svg-text/Blog1.png",
    collectionImageUrl : "/images/svg-text/Blog1.png",
    symbol : "1231",
    coverImageUrl : "/images/svg-text/Blog1.png",
    contractAddress:"asdfasdf",
    artworkCount:20,
  }
  return (
    <ArtworkInfoContainer>
      {/* <ArtworkInfoBlock onClick={() => handleSegmentEvent('created_by_pill')}> */}
      <ArtworkInfoBlock>
        <ArtworkInfoHeading spacing="large">Created by</ArtworkInfoHeading>
        <Flex css={{ marginY: 'auto' }}>
          {/* <UserTag user={user} /> */}
          <UserTag />
          {/* <UserTagV3 user={'/images/svg-text/Blog1.png'} /> */}
        </Flex>
      </ArtworkInfoBlock>
      <ArtworkInfoBlock>
        <ArtworkInfoHeading spacing="large">Collection</ArtworkInfoHeading>
        {/* <CollectionPopoverCard user={user} collection={collection} /> */}
        <CollectionPopoverCard collection={collection}/>
      </ArtworkInfoBlock>
    </ArtworkInfoContainer>
  );
}
