import { styled } from '~/stitches.config';
import Text from './Text';

const Paragraph = styled('p', Text, {
  fontFamily: '$body',
  lineHeight: '$body',
  fontSize: '$1',

  variants: {
    size: {
      0: { fontSize: '$0', letterSpacing: '$0' },
      1: { fontSize: '$1', letterSpacing: '$1' },
      2: { fontSize: '$2', letterSpacing: '$2' },
      3: { fontSize: '$3', letterSpacing: '$3' },
      4: { fontSize: '$4', letterSpacing: '$4' },
      5: { fontSize: '$5', letterSpacing: '$5' },
      6: { fontSize: '$6', letterSpacing: '$6' },
      7: { fontSize: '$7', letterSpacing: '$7' },
      8: { fontSize: '$8', letterSpacing: '$8' },
      9: { fontSize: '$9', letterSpacing: '$9' },
      10: { fontSize: '$10', letterSpacing: '$10' },
    },
  },
});

export default Paragraph;
