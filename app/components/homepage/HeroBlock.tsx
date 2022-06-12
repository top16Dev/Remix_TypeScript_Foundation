import { styled } from 'stitches.config';

import ButtonV2 from 'components/base/ButtonV2';
import CloseIcon from 'assets/icons/close-icon.svg';
import Flex from 'components/base/Flex';
import Image from 'components/base/Image';
import Mono from 'components/base/Mono';
import FoundationOS from 'assets/images/foundation-os.svg';
import { H2Heading } from 'components/base/Heading';

import { onGridPx } from 'utils/styles';
import useSegmentEvent from 'hooks/analytics/use-segment-event';

interface HeroBlockProps {
  onHide(): void;
}

export default function HeroBlock(props: HeroBlockProps): JSX.Element {
  const { onHide } = props;
  const [sendSegmentEvent] = useSegmentEvent();

  return (
    <Hero as="header">
      <HeroWrapper>
        <HeroImage
          alt="FoundationOS - the building blocks of a new internet"
          src="/images/homepage/fnd-os--hero.jpg"
          srcSet="/images/homepage/fnd-os--hero@2x.jpg 2x"
          draggable={false}
        />
      </HeroWrapper>
      <HideButtonWrapper>
        <ButtonV2
          icon
          size={0}
          variant="blur"
          onClick={() => {
            sendSegmentEvent({
              eventName: 'fndos_banner_dismissed',
              payload: {},
            });
            onHide();
          }}
        >
          <CloseIcon /> Hide
        </ButtonV2>
      </HideButtonWrapper>
      <HeroPreHeading>Introducing</HeroPreHeading>
      <FoundationSvg />
      <HeroHeading size={{ '@initial': 3, '@bp2': 4 }} weight="regular">
        The building blocks of a new internet.
      </HeroHeading>
      <ButtonV2
        as="a"
        href="https://os.foundation.app/"
        size={{ '@initial': 1, '@bp2': 2 }}
        target="_blank"
        variant="primary"
        onClick={() => {
          sendSegmentEvent({
            eventName: 'fndos_banner_clicked',
            payload: {},
          });
        }}
      >
        Learn more
      </ButtonV2>
    </Hero>
  );
}

const Hero = styled(Flex, {
  overflow: 'hidden',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  paddingY: '$6',

  minWidth: '100vw',
  maxWidth: '100vw',
  marginLeft: '-$6',
  marginRight: '-$6',

  maxHeight: '70vh',
  // Prevent text from being cropped on landscape devices
  minHeight: onGridPx(120),

  '@bp2': {
    marginTop: onGridPx(-4),
    marginBottom: onGridPx(20),
  },

  '@bp4': {
    minWidth: '100%',
    maxWidth: '100%',
    marginLeft: '0',
    marginRight: '0',
    borderRadius: '$4',
    height: '670px',
    minHeight: onGridPx(125),
  },
});

const HeroWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
});

const HideButtonWrapper = styled('div', {
  position: 'absolute',
  top: '$4',
  right: '$4',

  '@bp4': {
    top: '$6',
    right: '$6',
  },
});

const HeroPreHeading = styled('h3', Mono, {
  textTransform: 'uppercase',
  color: '$black0',
  letterSpacing: '$mono',
});

const HeroHeading = styled(H2Heading, {
  maxWidth: 420,
  textAlign: 'center',
  color: '$black0',
  marginBottom: '$6',
});

const HeroImage = styled(Image, {
  color: 'transparent',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const FoundationSvg = styled(FoundationOS, {
  width: '90%',
  maxWidth: 780,
  height: 'auto',
  color: '$black0',
});
