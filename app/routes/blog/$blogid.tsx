import { useLocation } from '@remix-run/react';

// export default function BlogArticle(){
//     let location = useLocation();
  
//     return <>{location.pathname}</>
// }

// import { getAllArticles, getArticleBySlug } from '~/queries/server/articles';

import Box from '~/components/base/Box';
import Text from '~/components/base/Text';
import { H1Heading, H3Heading } from '~/components/base/Heading';
import Image from '~/components/base/Image';
import Body from '~/components/base/Body';
import Page from '~/components/Page';
import { PageType } from '~/types/page';

import { 
    // buildAvatarUrl,
//  urlWithParams
} 
 from '~/utils/urls';
// import { postedOn } from '~/utils/dates/dates';
// import RenderArticle from '~/components/renderers/RenderArticle';
// import LoadingPage from '~/components/LoadingPage';
import Mono from '~/components/base/Mono';

export default function BlogArticle(props: { article: any; }) {
//   const { article } = props;
    const article = {
        coverImage : "/images/svg-text/blog1.png",
        title : "bsdwe",
        shortDescription : "Digital culture evolves quickly; so does its commercialization. The visionary artist has always managed to stay ahead of the curve.",
        datePosted : "PUBLISHED 27 MARCH 2022",
        content : "asdfa",
        author : {
        avatar : "/images/svg-text/profile-1.png",
            name : "family",
            role : "asdf",
        },
    }
//   const router = useRouter();
    const router = useLocation();

//   const coverImageUrl = urlWithParams(article?.coverImage, {
//     q: 90,
//     w: 1920,
//     fit: 'fill',
//   });

//   const avatarUrl = buildAvatarUrl(article?.author?.avatar);
    const coverImageUrl = "/images/svg-text/blog1.png";
    const avatarUrl = "/images/svg-text/profile-1.png";

//   if (router.isFallback) {
//     return <LoadingPage />;
//   }

  return (
    <Page title="Blog" type={PageType.maximal}>
      <Box
        css={{ '@bp1': { paddingTop: '$9' }, '@bp2': { paddingTop: '$10' } }}
      >
        {article?.coverImage && (
          <Box
            css={{
              maxWidth: 1080,
              marginX: 'auto',
              '@bp2': {
                borderColor: '$black100',
                borderWidth: 3,
                borderStyle: 'solid',
                borderLeft: 'solid',
                borderRight: 'solid',
              },
            }}
          >
            <Image
              alt={article?.title}
              src={coverImageUrl}
              css={{ width: '100%', display: 'block' }}
            />
          </Box>
        )}

        <Box css={{ marginX: '$6', marginTop: -30 }}>
          <Box
            css={{
              background: '$white100',
              position: 'relative',
              zIndex: 1,
              maxWidth: 910,
              marginX: 'auto',
              marginBottom: '$7',
              paddingX: '$6',
              paddingY: '$6',
              border: '3px solid $black100',
              '@bp0': {
                marginBottom: '$8',
              },
              '@bp1': {
                marginBottom: '$10',
                paddingX: '$9',
                paddingY: '$8',
              },
            }}
          >
            <H1Heading
              size={{ '@initial': 3, '@bp0': 5, '@bp1': 7 }}
              css={{
                marginBottom: '$6',
                '@bp0': { marginBottom: '$7' },
                '@bp1': { marginBottom: '$6' },
              }}
            >
              {article?.title}
            </H1Heading>

            <Text
              as="p"
              size={{ '@bp0': 2 }}
              css={{
                maxWidth: 420,
                lineHeight: '$body',
                marginBottom: '$6',
                '@bp1': { marginBottom: '$7' },
              }}
            >
              {article?.shortDescription}
            </Text>

            {article?.datePosted && (
              <Mono
                css={{
                  fontSize: '$0',
                  marginTop: 'auto',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                {/* Published {postedOn(article?.datePosted)} */}
                Published {article?.datePosted}
              </Mono>
            )}
          </Box>
        </Box>
      </Box>

      <Body>
        {/* <Box>{RenderArticle(article?.content)}</Box> */}
        <Box>{article?.content}</Box>

        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: 500,
            border: '3px solid $black100',
            padding: '$7',
            marginX: 'auto',
            marginTop: '$8',
            '@bp1': {
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '$10',
            },
          }}
        >
          <Box
            css={{
              width: 120,
              borderRadius: '50%',
              overflow: 'hidden',
              marginBottom: '$6',
              '@bp0': {
                marginBottom: 0,
              },
              '@bp1': { marginRight: '$6' },
            }}
          >
            {article?.author?.avatar && (
              <Image
                alt={article?.author?.name}
                src={avatarUrl}
                css={{ width: '100%', display: 'block', height:'120px' }}
              />
            )}
          </Box>
          <Box>
            <Mono
              size={0}
              css={{
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Written by
            </Mono>
            <H3Heading
              size={4}
              css={{
                marginTop: '$2',
              }}
            >
              {article?.author?.name}
            </H3Heading>
            <Text
              css={{
                fontSize: '$2',
                marginTop: '$2',
              }}
            >
              {article?.author?.role}
            </Text>
          </Box>
        </Box>
      </Body>
    </Page>
  );
}

// export async function getStaticPaths() {
//   const articles = await getAllArticles();
//   const paths = articles.map((article: { slug: any; }) => ({
//     params: {
//       slug: article.slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const article = await getArticleBySlug(params.slug);

//   return {
//     props: {
//       article,
//     },
//     revalidate: 60,
//   };
// }
