/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { LinkedTag } from '~/components/artworks/ArtworkTags';
import Flex from '~/components/base/Flex';
import Grid from '~/components/base/Grid';
import Heading from '~/components/base/Heading';
import Link from '~/components/links/Link';

interface SearchTagsProps {
  tags: string[];
}

export default function SearchTags(props: SearchTagsProps): JSX.Element {
  const { tags } = props;

  // const firstTenTags = tags.slice(0, 10);

  return (
    <Grid key={"SearchTags"} css={{ gap: '$2' }}>
      <Heading css={{ color: '$black50' }}>Tags</Heading>
      <Flex css={{ flexWrap: 'wrap' }}>
        {/* {firstTenTags.map((tag: string) => ( */}
        {tags.map((tag: string) => (
          // <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <LinkedTag key={tag}>{tag}</LinkedTag>
            </a>
          // </Link>
        ))}
      </Flex>
    </Grid>
  );
}
