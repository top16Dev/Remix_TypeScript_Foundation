import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useIsInViewport from 'use-is-in-viewport';

// import { isImage, isModel, isVideo } from '~/utils/assets';
// import { notEmptyOrNil } from '~/utils/helpers';

import CardVideo from '~/components/cards/shared/CardVideo';
import AspectRatio from '~/components/base/AspectRatio';
import Box from '~/components/base/Box';
import Image from '~/components/base/Image';

import useAssetReady from '~/hooks/use-asset-ready';
import MediaLoadingSpinner from '~/components/media/MediaLoadingSpinner';
import { AssetStatus } from '~/types/Artwork';
import { CollectionCardFragment } from '~/types/Collection';
import { UserFragment } from '~/graphql/hasura/hasura-fragments.generated';
import { AlgoliaCollection, AlgoliaUserBasic } from '~/types/Algolia';
import ArtworkCardMediaContainer from './ArtworkCardMediaContainer';
import ArtworkCardTitleAndCollection from './ArtworkCardTitleAndCollection';
import {
  getFallbackArtworkUrl,
  isUnsupportedArtworkAsset,
} from '~/utils/artwork/artwork';

const MotionImage = motion(Image);
const MotionCardVideo = motion(CardVideo);

interface ArtworkCardMediaProps {
  assetUrl: string;
  posterUrl?: string;
  assetStatus: AssetStatus;
  name: string;
  collection: CollectionCardFragment | AlgoliaCollection;
  artworkPath: string;
  creator: UserFragment | AlgoliaUserBasic;
  tokenId?: number;
}

export default function ArtworkCardMedia(
  props: ArtworkCardMediaProps
): JSX.Element {
  const {
    assetStatus,
    assetUrl,
    posterUrl,
    name,
    collection,
    artworkPath,
    creator,
    tokenId,
  } = props;
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false);

  // const hasAssetUrl = notEmptyOrNil(assetUrl);
  const hasAssetUrl = true;
  const [isInViewport, targetRef] = useIsInViewport();
  useEffect(() => {
    if (isInViewport) {
      setHasBeenInViewport(true);
    }
  }, [isInViewport]);

  if (hasAssetUrl) {
    const isUnsupportedAsset = isUnsupportedArtworkAsset({ assetStatus });

    return (
      <ArtworkCardMediaContainer ref={targetRef}>
      {/* <ArtworkCardMediaContainer> */}
        {/* {isNumber(tokenId) && (
          <ArtworkHiddenLink name={name} artworkPath={artworkPath} />
        )} */}
        <AspectRatio
          ratio={1 / 1}
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AnimatePresence exitBeforeEnter>
            <RenderArtworkCardMedia
              collection={collection}
              url={assetUrl}
              posterUrl={posterUrl}
              hasBeenInViewport={hasBeenInViewport}
              alt={name}
              isUnsupportedAsset={isUnsupportedAsset}
            />
          </AnimatePresence>
        </AspectRatio>
        <ArtworkCardTitleAndCollection
          name={name}
          collection={collection}
          creator={creator}
        />
      </ArtworkCardMediaContainer>
    );
  }

  return <AspectRatio ratio={1 / 1} css={{ backgroundColor: '$black5' }} />;
}

interface RenderArtworkCardMediaProps {
  url: string;
  hasBeenInViewport: boolean;
  posterUrl?: string;
  collection: ArtworkCardMediaProps['collection'];
  alt: string;
  isUnsupportedAsset: boolean;
}

function RenderArtworkCardMedia(
  props: RenderArtworkCardMediaProps
): JSX.Element {
  const {
    collection,
    url,
    posterUrl,
    hasBeenInViewport,
    alt,
    isUnsupportedAsset,
  } = props;

  // const isUrlVideo = isVideo(url);
  // const isUrlModel = isModel(url);
  // const isUrlImage = isImage(url);
  const isUrlVideo = false;
  const isUrlModel = false;
  const isUrlImage = true;

  // const { isLoading, isError } = useAssetReady(url, isUrlImage);
  const isLoading = false;
  const isError = false;
  const [imageLoaded, setImageLoaded] = useState(true);

  const animationProps = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.1 },
  };

  // if (isUnsupportedAsset) {
  //   const fallbackImageUrl = getFallbackArtworkUrl(collection) || url;

  //   return (
  //     <ArtworkCardUnsupportedMedia
  //       fallbackImageUrl={buildArtworkCardFallbackAssetUrl(fallbackImageUrl)}
  //     />
  //   );
  // }
  if (!hasBeenInViewport && (isUrlVideo || isUrlModel)) {
    return (
      <motion.div {...animationProps} style={{ backgroundColor: '#F2F2F2' }} />
    );
  }

  if (isUrlVideo) {
    return (
      <MotionCardVideo {...animationProps} posterUrl={posterUrl} url={url} />
    );
  }

  if (isUrlModel) {
    return (
      <Box css={{ position: 'relative', height: '100%', width: '100%' }}>
        <MotionImage
          {...animationProps}
          loading="lazy"
          src={posterUrl}
          css={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    );
  }
  const isImageLoading = isLoading || isError;

  if (isImageLoading) {
    return (
      <MediaLoadingSpinner
        isLoading={isImageLoading}
        size={32}
        color="$black100"
      />
    );
  }

  return (
    <>
      <MediaLoadingSpinner
        isLoading={!imageLoaded}
        size={32}
        color="$black100"
      />

      <MotionImage
        {...animationProps}
        loading="lazy"
        src={url}
        onLoad={() => setImageLoaded(true)}
        css={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
    </>
  );
}
