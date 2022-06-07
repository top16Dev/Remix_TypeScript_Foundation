import { useField } from 'formik';
import { when, always } from 'ramda';

import Text from '~/components/base/Text';

import ETHinUSD from '~/components/ETHinUSD';
// import { isEmptyOrNil } from '~/utils/helpers';

interface BidAmountInUSDProps {
  name: string;
}

// const valueOrEmpty = when(isEmptyOrNil, always('0'));
const valueOrEmpty = 0;

export default function BidAmountInUSD(
  props: BidAmountInUSDProps
): JSX.Element {
  // const [field] = useField(props);

  return (
    <Text css={{ color: '$black60' }} weight="semibold">
      {/* <ETHinUSD amount={valueOrEmpty(field.value)} /> */}
      <ETHinUSD amount={valueOrEmpty} />
    </Text>
  );
}
