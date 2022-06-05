import { styled } from '~/stitches.config';

import AvatarV2, { AvatarProps, AvatarImage } from '~/components/base/AvatarV2';
import Mono from '~/components/base/Mono';
import Text from '~/components/base/Text';

export type AvatarTextProps = AvatarProps & {
  mono?: boolean;
  text: string;
};

export default function AvatarText(props: AvatarTextProps) {
  const { imageUrl, mono = false, round, size = 1, text } = props;
  return (
    <Container size={size}>
      {imageUrl && (
        <AvatarV2 size={size} alt={text} imageUrl={imageUrl} round={round} />
      )}
      {mono ? (
        <Mono as="span" size={size}>
          {text}
        </Mono>
      ) : (
        <Text as="span" size={size} weight="semibold">
          {text}
        </Text>
      )}
    </Container>
  );
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  [`${Text}`]: {
    color: 'currentColor',
    lineHeight: '$base',
    whiteSpace: 'nowrap',
  },
  [`${Mono}`]: {
    color: 'currentColor',
    lineHeight: '$base',
    whiteSpace: 'nowrap',
  },
  variants: {
    size: {
      0: {
        [`${AvatarImage}`]: {
          marginRight: '$1',
        },
      },
      1: {
        [`${AvatarImage}`]: {
          marginRight: '$2',
        },
      },
      2: {
        [`${AvatarImage}`]: {
          marginRight: '$2',
        },
      },
    },
  },
});
