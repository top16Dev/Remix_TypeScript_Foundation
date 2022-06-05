import { styled } from '~/stitches.config';
import Text from '~/components/base/Text';

const Mono = styled(Text, {
  fontFamily: '$mono',
  fontWeight: '$regular',
  variants: {
    // The monospaced font looks quite chunky compared to the body font
    // This scale reduces the font size to make it match
    size: {
      0: { fontSize: '13px' }, // $0 - 1px
      1: { fontSize: '15px' }, // $1 - 1px
      2: { fontSize: '17px' }, // $2 - 1px
      3: { fontSize: '23px' }, // $3 - 1px
      4: { fontSize: '34px' }, // $4 - 2px
      5: { fontSize: '44px' }, // $5 - 2px
      6: { fontSize: '52px' }, // $6 - 4px
    },
  },
});

export default Mono;
