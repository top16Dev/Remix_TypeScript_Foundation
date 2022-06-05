import NextLink from 'next/link';

import { H1Heading } from '~/components/base/Heading';
import ButtonV2 from '~/components/base/ButtonV2';
import Box from '~/components/base/Box';
import { styled } from '~/stitches.config';
import ConnectWalletButton from './headers/ConnectWalletButton';
import Text from './base/Text';

interface MaximalCallToActionProps {
  heading: string;
  subheading: string;
  action:
    | 'CONNECT'
    | {
        content: string;
        href: string;
      };
}

export default function MaximalCallToAction(props: MaximalCallToActionProps) {
  const { heading, subheading, action } = props;
  return (
    <Wrapper>
      <Box css={{ alignItems: 'center' }}>
        <H1Heading size={{ '@initial': 5, '@bp2': 6 }}>{heading}</H1Heading>
        <Subheading>{subheading}</Subheading>
        <ActionWrapper>
          {action === 'CONNECT' ? (
            <ConnectWalletButton />
          ) : (
            <NextLink href={action.href} passHref>
              <ButtonV2
                as="a"
                variant="primary"
                size={{ '@initial': 1, '@bp1': 2 }}
              >
                {action.content}
              </ButtonV2>
            </NextLink>
          )}
        </ActionWrapper>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  marginX: 'auto',
  maxWidth: '65ch',
  width: '100%',
  justifyContent: 'center',
  textAlign: 'center',
});

const Subheading = styled(Text, {
  marginX: 'auto',
  maxWidth: '55ch',
  color: '$black70',
  fontSize: '$2',
  paddingX: '$4',
  marginTop: '$3',
  marginBottom: '$5',
  lineHeight: '$body',
});

const ActionWrapper = styled('div', {
  'a, button': {
    width: 'max-content',
    marginX: 'auto',
  },
});
