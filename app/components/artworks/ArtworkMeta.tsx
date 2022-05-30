/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import ReactMarkdown from 'react-markdown';

import ArtworkAuthenticity from './ArtworkAuthenticity';
import ArtworkTags from './ArtworkTags';
import Grid from '~/components/base/Grid';
import Box from '~/components/base/Box';
import Heading from '~/components/base/Heading';
import Text from '~/components/base/Text';

import { CollectionFragmentExtended } from '~/graphql/hasura/hasura-fragments.generated';

import { BasicArtwork } from '~/types/Artwork';

import { notEmptyOrNil } from '~/utils/helpers';
import { areKeysEqual } from '~/utils/users';
import { AlgoliaCollection } from '~/types/Algolia';

interface ArtworkMetaProps {
  description: string;
  artwork: BasicArtwork;
  creatorPublicKey: string;
  currentUserPublicKey: string;
  tags?: string[];
  collection: CollectionFragmentExtended | AlgoliaCollection;
}

export default function ArtworkMeta(props: ArtworkMetaProps): JSX.Element {
  const {
    description,
    artwork,
    creatorPublicKey,
    currentUserPublicKey,
    tags,
    collection,
  } = props;

  // const hasDescription = notEmptyOrNil(description);
  // const hasTags = notEmptyOrNil(tags);
  const hasDescription = true;
  const hasTags = true;

  // const isCurrentUserProfile = areKeysEqual([
  //   creatorPublicKey,
  //   currentUserPublicKey,
  // ]);
  const isCurrentUserProfile = false;

  return (
    <Grid css={{ gridGap: '$6', '@bp1': { gridGap: '$8' } }}>
      {hasDescription && (
        <Box>
          <Heading
            size={{ '@initial': 2, '@bp0': 3 }}
            css={{
              marginBottom: '$5',
              borderBottom: '1px solid $black10',
              paddingBottom: '$5',
            }}
          >
            Description
          </Heading>
          <Text
            size={1}
            css={{
              wordBreak: 'break-word',
              lineHeight: 1.6,
              maxWidth: '33rem',
              '& > p:not(:last-of-type)': {
                marginBottom: '$5',
              },
              '& > ol': {
                listStylePosition: 'inside',
              },
              '& pre': {
                whiteSpace: 'normal',
              },
              '& code': {
                whiteSpace: 'normal',
              },
              a: {
                color: 'inherit',
              },
            }}
          >
            {/* <ReactMarkdown plugins={[require('remark-breaks')]}> */}
              {description}
            {/* </ReactMarkdown> */}
          </Text>
        </Box>
      )}
      <Box>
        <ArtworkAuthenticity artwork={artwork} collection={collection} />
      </Box>
      {/* {hasTags && (
        <ArtworkTags
          artwork={artwork}
          tags={tags}
          isCurrentUserProfile={isCurrentUserProfile}
        />
      )} */}
    </Grid>
  );
}
