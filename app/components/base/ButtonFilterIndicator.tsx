import { styled } from '~/stitches.config';
import { pluralizeWord } from '~/utils/strings';

export const ButtonFilterIndicatorRoot = styled('div', {
  borderRadius: '$round',
  background: '$black100',
  color: '$white100',
  fontSize: '$0',
  lineHeight: '$base',
  fontWeight: '$semibold',
  fontVariantNumeric: 'tabular-nums',

  minWidth: '20px',
  height: '20px',
  paddingX: '$2',

  position: 'absolute',
  right: -4,
  top: -4,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'opacity $1 ease',
});

const Dot = styled('div', {
  background: '$white100',
  width: '4px',
  height: '4px',
  borderRadius: '$round',
});

interface ButtonFilterIndicatorProps {
  applied: boolean | number;
}

// TODO: review if we still want to support numeric values. These are currently not used, because they gave of notification vibes.
function ButtonFilterIndicator(props: ButtonFilterIndicatorProps) {
  const { applied } = props;

  // Not applied, or zero
  if (applied === false || applied === 0) {
    return null;
  }

  // Applied, with unkown or irrelevant count of applied items
  if (applied === true) {
    return (
      <ButtonFilterIndicatorRoot aria-label="Has filters applied">
        <Dot />
      </ButtonFilterIndicatorRoot>
    );
  }

  const numericLabel = `Has ${applied} ${pluralizeWord(
    'filter',
    applied
  )} applied`;

  // Prevents very long indicators
  if (applied >= 100) {
    return (
      <ButtonFilterIndicatorRoot aria-label={numericLabel}>
        99+
      </ButtonFilterIndicatorRoot>
    );
  }

  return (
    <ButtonFilterIndicatorRoot aria-label={numericLabel}>
      {applied}
    </ButtonFilterIndicatorRoot>
  );
}

export default ButtonFilterIndicator;
