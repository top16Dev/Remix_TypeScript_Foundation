/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/jsx-max-depth */
// import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Body from '~/components/base/Body';
import Page from '~/components/Page';
import Grid from '~/components/base/Grid';
import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import Layout, { BackgroundColor } from '~/components/layouts/Layout';
import ArtworkCard from '~/components/cards/artwork/ArtworkCard';

import { PageType } from '~/types/page';
import { ArtworkFragmentExtended } from '~/graphql/hasura/hasura-fragments.generated';

import { useArtworkByContractTokenIdFromRouter } from '~/hooks/queries/hasura/artworks/use-artwork-by-contract-token-id';
import { useArtworkByUuid } from '~/graphql/hasura/queries/artwork-by-uuid.generated';

import { getFirstValue } from '~/utils/helpers';
import { AlgoliaArtwork, AlgoliaArtworkAvailability, AlgoliaArtworkMarketAvailability, AlgoliaAuction, AlgoliaAuctionStatus, AlgoliaCollection, AlgoliaCollectionCreator, AlgoliaOffer, AlgoliaUserBasic } from '~/types/Algolia';
import { AssetStatus } from '~/types/Artwork';
import { ModerationStatus } from '~/types/Moderation';

interface TransactionLayoutWithCardV2Props {
  title: string;
  backgroundColor: BackgroundColor;
  pageType: PageType;
  artworkQueryType: 'uuid' | 'tokenId';
}

export type CurriedLayout = (
  arg0: JSX.Element,
  arg1: TransactionLayoutWithCardV2Props
) => JSX.Element;

export default function TransactionLayoutWithCardV2(
  props: TransactionLayoutWithCardV2Props
): CurriedLayout {
  const { artworkQueryType } = props;

  return function TransactionLayoutContainer(page: JSX.Element) {
    if (artworkQueryType === 'uuid') {
      return <TransactionLayoutUuid {...props}>{page}</TransactionLayoutUuid>;
    }
    return (
      <TransactionLayoutTokenId {...props}>{page}</TransactionLayoutTokenId>
    );
  };
}

interface TransactionLayoutRenderProps
  extends TransactionLayoutWithCardV2Props {
  children: ReactNode;
}

function TransactionLayoutUuid(props: TransactionLayoutRenderProps) {
  const { children, ...rest } = props;

  // const router = useRouter();

  // const artworkId = getFirstValue(router.query.id);
  const artworkId = "artworkId";

  // const { data: artworkData } = useArtworkByUuid(
  //   { id: artworkId },
  //   {
  //     enabled: Boolean(artworkId),
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false,
  //   }
  // );

  // const artwork = artworkData?.artwork;

  return (
    // <TransactionLayout {...rest} artwork={artwork}>
    <TransactionLayout {...rest}>
      {children}
    </TransactionLayout>
  );
}

function TransactionLayoutTokenId(props: TransactionLayoutRenderProps) {
  const { children, ...rest } = props;

  const { data: artwork } = useArtworkByContractTokenIdFromRouter();

  return (
    // <TransactionLayout {...rest} artwork={artwork}>
    <TransactionLayout {...rest}>
      {children}
    </TransactionLayout>
  );
}

interface TransactionLayoutProps extends TransactionLayoutRenderProps {
  // artwork: ArtworkFragmentExtended;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function TransactionLayout(props: TransactionLayoutProps) {
  const { title, backgroundColor, pageType, children,
    //  artwork 
    } = props;
    const user1 : AlgoliaUserBasic = {
      coverImageUrl : "/images/svg-text/blog1.png",
      name: "Family",
      username: "Family",
      profileImageUrl : "/images/svg-text/blog1.png",
      publicKey : "0x12asdfasdb",
      // username : "Family",
    }
    const creator1 : AlgoliaCollectionCreator = {
      coverImageUrl : "/images/svg-text/blog1.png",
      name: "Family",
      profileImageUrl : "/images/svg-text/blog1.png",
      publicKey : "0x12asdfasdb",
      username : "Family",
    }
    const collection1 : AlgoliaCollection = {
      objectID: "ObjectID",
      name: "Collection Name",
      symbol: "Collection symbol",
      description: "collection description",
      contractAddress: "contract address",
      collectionImageUrl: "/images/svg-text/blog1.png",
      coverImageUrl: "/images/svg-text/blog1.png",
      isHidden: false,
      createdAt: 4 ,
      slug: "collection slug",
      creator: creator1,
      artworkCount: 10,
    }
    const auction1: AlgoliaAuction = {
      auctionId: 1,
      createdAt: "aaasdf",
      currentPrice: 0.03,
      endsAt: "00:05:13",
      highestBidder: "Family",
      isPrimarySale: false,
      reservePriceInETH: 0.05,
      seller: user1,
      startsAt: "1212",
      status: AlgoliaAuctionStatus.OPEN,
    }
    const owner1: AlgoliaUserBasic = {
      coverImageUrl: '/images/svg-text/blog1.png',
      name: 'ownername',
      username: 'ownusername',
      profileImageUrl: '/images/svg-text/blog1.png',
      publicKey: 'ownpublickey'
    }
    const latestOffer1: AlgoliaOffer = {
      acceptedAt: 0,
      amountInETH: 0,
      buyer: owner1,
      createdAt: 0,
      expiresAt: 0,
      invalidatedAt: 0,
      placedAt: 0,
      seller: owner1,
      status: 'HIGHEST'
    }
    const artwork : AlgoliaArtwork = {
      assetIPFSPath: "wefasdb",
      assetScheme: "wefasdb",
      assetHost: "wefasdb",
      assetPath: "wefasdb",
      assetId: "wefasdb",
      assetStatus: AssetStatus.SUCCESS,
      auction : auction1,
      availability: AlgoliaArtworkAvailability.LIVE_AUCTION,
      createdAt: "wefasdb",
      creator: user1,
      description: "basfasdfasdf",
      id: "0x121asf",
      isDeleted: false,
      isHidden: false,
      mimeType: "MimeType",
      moderationStatus: ModerationStatus.Active,
      name: "FamilyName",
      objectID: "ObjectID",
      tokenId: 1123,
      collection: collection1,
      marketAvailability: [
        AlgoliaArtworkMarketAvailability.LIVE_AUCTION,
      ],
      owner: owner1,
      latestOffer:latestOffer1,
    };
  return (
    <Layout backgroundColor={backgroundColor}>
      <Page title={title} type={pageType}>
        <Body
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Flex
            css={{
              position: 'relative',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <Grid
              css={{
                gridTemplateColumns: '560px 340px',
                gap: 60,
              }}
            >
              {children}
              <Box>
                <ArtworkCard
                  artwork={artwork}
                  creator={artwork?.creator}
                  // currentUser={null}
                  cardType="regular"
                  currentUserPublicKey={'currentUsePublicKey'}
                />
              </Box>
            </Grid>
          </Flex>
        </Body>
      </Page>
    </Layout>
  );
}
