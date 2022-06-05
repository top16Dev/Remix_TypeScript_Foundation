import CardGrid from '~/components/CardGrid';
import Box from '~/components/base/Box';
import CollectionCard from '~/components/cards/collections/CollectionCard';
import FeaturedSectionHeading from '~/components/FeaturedSectionHeading';

import { CollectionFragmentExtended } from '~/graphql/hasura/hasura-fragments.generated';

// import { isEmptyOrNil } from '~/utils/helpers';

interface FeaturedCollectionsProps {
  // collections: CollectionFragmentExtended[];
}

export default function FeaturedCollections(
  props: FeaturedCollectionsProps
): JSX.Element {
  // const { collections } = props;

  // const hasNoCollections = isEmptyOrNil(collections);
  const hasNoCollections = false;
  // if (hasNoCollections) {
  //   return null;
  // }

  const collection={
    objectID : 12,
    name : "Family",
    creator : "/images/svg-text/blog1.png",
    collectionImageUrl : "/images/svg-text/blog1.png",
    symbol : "1231",
    coverImageUrl : "/images/svg-text/blog1.png",
    contractAddress:"asdfasdf",
    artworkCount:20,
  }
  return (
    <Box>
      <FeaturedSectionHeading
        link={{ href: '/collections', text: 'View all collections' }}
      >
        Featured collections
      </FeaturedSectionHeading>
      <CardGrid>
        {/* {collections.map((collection) => { */}
          {/* return ( */}
            <CollectionCard
              // key={collection.id}
              collection={collection}
              // creator={collection.creator}
              creator = {"abasdfs"}
            />
            <CollectionCard
              // key={collection.id}
              collection={collection}
              // creator={collection.creator}
              creator = {"abasdfs"}
            />
          {/* ); */}
        {/* })} */}
      </CardGrid>
    </Box>
  );
}
