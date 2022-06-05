// import NextLink from 'next/link';
import { Link as RemixLink } from '@remix-run/react'
import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import Heading from '~/components/base/Heading';
import Text from '~/components/base/Text';
import Image from '~/components/base/Image';
import Page from '~/components/Page';
import Body from '~/components/base/Body';
import Link from '~/components/base/Link';
import { ArticleGrid } from '~/components/Articles';

// import { getAllArticles } from 'queries/server/articles';

// import { urlWithParams } from '~/utils/urls';
// import { postedOn } from '~/utils/dates/dates';

import { PageType } from '~/types/page';
import Mono from '~/components/base/Mono';

export default function BlogIndex(props: { articles: any; }) {
  // const { articles } = props;
  // const [featuredArticle, ...otherArticles] = articles;
  return (
    <Page title="Blog" type={PageType.maximal}>
      <Body
        css={{
          position: 'relative',
          zIndex: 4,
          paddingY: '$7',
          '@bp0': {
            paddingY: '$8',
          },
          '@bp1': {
            paddingY: '$9',
          },
          '@bp2': {
            paddingY: '$10',
          },
        }}
      >
        <Box
          css={{
            marginBottom: '$7',
            '@bp1': {
              marginBottom: '$8',
            },
          }}
        >
          {/* <FeaturedArticle article={featuredArticle} /> */}
          <FeaturedArticle/>
        </Box>
        {/* <ArticleGrid articles={otherArticles} /> */}
        <ArticleGrid/>
      </Body>
    </Page>
  );
}

function FeaturedArticle(_props: any) {
  // const { article } = props;

  const coverImageUrl = "/images/svg-text/blog1.png";
  const imageArgs = {
    q: 90,
    w: 630,
    h: 420,
    fit: 'pad',
  };

  return (
    // <NextLink href={`/blog/${article.slug}`} passHref>
    <RemixLink to={'/blog/m-i-a'} style={{textDecoration:"none", color:"black"}}>
      <Link
        as="a"
        css={{
          display: 'grid',
          gap: 3,
          border: '2px solid $black100',
          textDecoration: 'none',
          color: '$black100',
          transition: 'transform $1 $ease',
          willChange: 'transform',
          gridTemplateColumns: 'repeat(1, 1fr)',
          '@hover': {
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '$2',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          },
          '@bp2': { gridTemplateColumns: '450px auto' },
          '@bp3': { gridTemplateColumns: '600px auto' },
        }}
      >
        <Box
          css={{
            borderBottom: '2px solid $black100',
            '@bp2': {
              borderBottom: 'none',
              borderRight: '2px solid $black100',
              display: 'flex',
            },
          }}
        >
          <Image
            // src={urlWithParams(article?.coverImage, imageArgs)}
            src={coverImageUrl}
            css={{
              display: 'block',
              width: '100%',
              '@bp2': {
                objectFit: 'cover',
              },
            }}
          />
        </Box>
        <Flex
          css={{
            padding: '$7',
            flexDirection: 'column',
            '@bp3': { padding: '$8' },
          }}
        >
          <Heading
            size={5}
            css={{
              maxWidth: 560,
              marginBottom: '$7',
            }}
          >
            {/* {article.title} */}M.I.A. is extremely online
          </Heading>
          <Text size={2} css={{ maxWidth: 420, lineHeight: '$body' }}>
            {/* {article?.shortDescription} */}Digital culture evolves quickly; so does its commercialization.
          </Text>
          <Box css={{ paddingTop: '$8', marginTop: 'auto' }}>
            <Mono
              size={0}
              css={{
                marginTop: 'auto',
                textTransform: 'uppercase',
                letterSpacing: 2,
              }}
            >
              Published  27 MARCH 2022
              {/* {postedOn(article?.datePosted)} */}
            </Mono>
          </Box>
        </Flex>
      </Link>
    </RemixLink>
  );
}

// export async function getStaticProps() {
//   const articles = await getAllArticles();

//   return {
//     props: {
//       articles,
//     },
//     revalidate: 60,
//   };
// }
