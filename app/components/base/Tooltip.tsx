import { styled } from '~/stitches.config';
import Tippy from '@tippyjs/react';

import 'tippy.js/animations/shift-away.css';

const Tooltip = styled(Tippy, {
  backgroundColor: '$black100',
  color: '$white100',
  fontSize: '$1',
  fontWeight: '$semibold',
  paddingX: '$4',
  paddingY: '$2',
  borderRadius: '$2',
  position: 'relative',
  textAlign: 'center',
});

Tooltip.defaultProps = {
  animation: 'shift-away',
  hideOnClick: false,
};

export default Tooltip;
