import { useCallback } from 'react';
import NextLink from 'next/link';

import { styled } from 'stitches.config';
import { onGridPx } from 'utils/styles';

import Flex from 'components/base/Flex';
import Text from 'components/base/Text';
import ButtonV2 from 'components/base/ButtonV2';

import useSegmentEvent from 'hooks/analytics/use-segment-event';
import Heading from 'components/base/Heading';

export default function CreatorsBlock() {
  const [sendSegmentEvent] = useSegmentEvent();

  const handleSegmentEvent = useCallback(() => {
    sendSegmentEvent({
      eventName: 'homepage_primary_cta_clicked',
      payload: {},
    });
  }, [sendSegmentEvent]);

  return (
    <Container>
      <Heading size={{ '@initial': 4, '@bp2': 6 }} weight="medium">
        Web3 is for everyone.
      </Heading>
      <Paragraph size={{ '@initial': 2, '@bp2': 3 }} weight="regular">
        Join the millions of creators, collectors, and curators who are on this
        journey with you.
      </Paragraph>
      <NextLink href="/feed">
        <ButtonV2
          as="a"
          onClick={() => handleSegmentEvent()}
          size={2}
          variant="primary"
        >
          Get started
        </ButtonV2>
      </NextLink>
    </Container>
  );
}

const Container = styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

  width: '100%',
  maxWidth: '$container',

  paddingX: '$6',
  marginX: 'auto',
});

const Paragraph = styled('p', Text, {
  color: '$black70',
  lineHeight: '$mid',
  marginBottom: '$7',
  maxWidth: onGridPx(77),

  '@bp2': {
    maxWidth: onGridPx(150),
  },
});
