import React from 'react';
import { styled, CSS } from '~/stitches.config';

import { AvatarImage } from './AvatarV2';
import AvatarText from './AvatarText';
import ButtonV2 from './ButtonV2';
import type { ButtonV2Props } from './ButtonV2';
import type { AvatarTextProps } from './AvatarText';

const ButtonWithAvatarRoot = styled(ButtonV2, {
  '&:disabled': {
    [`${AvatarImage}`]: {
      opacity: 0.5,
    },
  },
  variants: {
    size: {
      0: {
        paddingLeft: '6px',
        paddingRight: '$3',
      },
      1: {
        paddingLeft: '$2',
        paddingRight: '$3',
      },
      2: {
        paddingLeft: '$2',
        paddingRight: '$4',
      },
    },
    round: {
      true: {},
    },
    hasImage: {
      true: {},
    },
  },
  compoundVariants: [
    {
      round: false,
      size: 0,
      css: {
        borderRadius: '$2',
      },
    },
    {
      round: false,
      size: 1,
      css: {
        borderRadius: '$3',
      },
    },
    {
      round: false,
      size: 2,
      css: {
        borderRadius: '$4',
      },
    },
    // Lack of image
    {
      hasImage: false,
      size: 0,
      css: {
        paddingX: '$3',
      },
    },
    {
      hasImage: false,
      size: 1,
      css: {
        paddingX: '$3',
      },
    },
    {
      hasImage: false,
      size: 2,
      css: {
        paddingX: '$4',
      },
    },
  ],
});

type ButtonWithAvatarProps = ButtonV2Props &
  AvatarTextProps & {
    as?: React.ElementType;
    css?: CSS;
  };

function ButtonWithAvatar(props: ButtonWithAvatarProps) {
  const { as, imageUrl, mono, round, size, text, css, ...rest } = props;
  return (
    <ButtonWithAvatarRoot
      as={as}
      css={css}
      hasImage={!!imageUrl}
      round={round}
      size={size}
      {...rest}
    >
      <AvatarText
        imageUrl={imageUrl}
        mono={mono}
        round={round}
        size={size}
        text={text}
      />
    </ButtonWithAvatarRoot>
  );
}

export default ButtonWithAvatar;
