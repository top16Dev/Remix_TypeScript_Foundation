import Grid from '~/components/base/Grid';
import Text from '~/components/base/Text';

import { ceilETHWithSuffix } from '~/utils/formatters';

interface MinBidAmountProps {
  minBidAmount: number;
}

export default function MinBidAmount(props: MinBidAmountProps): JSX.Element {
  const { minBidAmount = 0 } = props;
  return (
    <Grid css={{ gap: 5 }}>
      <Text
        size={2}
        weight="semibold"
        css={{ color: '$black60', marginRight: '0.5ch' }}
      >
        You must bid at least
      </Text>
      <Text size={2} weight="semibold">
        {/* {ceilETHWithSuffix(minBidAmount)} */}
        {0.15}
      </Text>
    </Grid>
  );
}
