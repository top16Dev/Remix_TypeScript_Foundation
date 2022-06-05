import { VariantProps } from '@stitches/react';
import { styled, CSS } from '~/stitches.config';

import Box from './Box';

type AvatarV2Variants = VariantProps<typeof AvatarImage>;

export const AvatarImage = styled(Box, {
  backgroundSize: 'cover',
  backgroundColor: '$blackT5',
  backgroundPosition: 'center',
  variants: {
    size: {
      0: {
        width: '$avatar0',
        height: '$avatar0',
      },
      1: {
        width: '$avatar1',
        height: '$avatar1',
      },
      2: {
        width: '$avatar2',
        height: '$avatar2',
      },
    },
    round: {
      true: {
        borderRadius: '$round',
      },
    },
  },
  compoundVariants: [
    {
      round: false,
      size: 0,
      css: {
        borderRadius: '$1',
      },
    },
    {
      round: false,
      size: 1,
      css: {
        borderRadius: '$2',
      },
    },
    {
      round: false,
      size: 2,
      css: {
        borderRadius: '$3',
      },
    },
  ],
  defaultVariants: {
    round: true,
    size: 1,
  },
});

type AvatarProps = AvatarV2Variants & {
  alt?: string;
  css?: CSS;
  imageUrl?: string;
};

function AvatarV2(props: AvatarProps) {
  const { alt, imageUrl, size, round, css } = props;
  return (
    <AvatarImage
      aria-label={alt}
      css={css}
      role="img"
      round={round}
      size={size}
      style={{
        ...(imageUrl && { backgroundImage: `url(${imageUrl})` }),
      }}
    />
  );
}

export type { AvatarV2Variants, AvatarProps };
export default AvatarV2;
