import { styled } from '~/stitches.config';
import Box from '~/components/base/Box';

const Overlay = styled(Box, {
  position: 'absolute',
  zIndex: 2,
  height: '100%',
  top: 0,
  left: 0,
  background: '$blackT30',
  width: '100%',
});

export default Overlay;
