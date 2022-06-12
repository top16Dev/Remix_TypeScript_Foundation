/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Paragraph from '~/components/base/Paragraph';
import Box from '~/components/base/Box';
import TransactionSubmitButton from './TransactionSubmitButton';
import TransitionPane from '~/components/animation/TransitionPane';
import TransactionHeading from '../TransactionHeading';
import ETHField from '~/components/forms/fields/ETHField';
import Grid from '~/components/base/Grid';

import { TransactionCard } from '~/components/layouts/TransactionLayoutV2';

import { formatETH, formatETHWithSuffix } from '~/utils/formatters';
import Text from '~/components/base/Text';
// import { AmountBreakdown } from './AmountBreakDown';
import TextLink from '~/components/base/TextLink';
import Flex from '~/components/base/Flex';
import { transactionCopy, TransactionType } from '~/lib/transaction-copy';
import Fees from './FeesTable';
import { LineItem } from '~/utils/transactions';
import { useField } from 'formik';
import { AmountBreakdown } from './AmountBreakdown';

interface TransactionFieldsProps {
  amount: LineItem;
  transactionType: TransactionType;
  lineItems: LineItem[];
}

// TO DO:
// Remove conditional showing of Amount Breakdown to always show once Buy Now and Auctions are able to use Marketplace Balance

export default function TransactionFields(props: TransactionFieldsProps) {
  const { amount, transactionType, lineItems } = props;

  // const [field] = useField('buyNowPrice');
  // const buyNowPrice = field.value;
  const buyNowPrice = 0.23;

  // const { title, description, button, learnMoreLink } = transactionCopy[transactionType].initial;
  const title = transactionCopy[transactionType].initial?.title;
  const description = transactionCopy[transactionType].initial?.description;
  const learnMoreLink = transactionCopy[transactionType].initial?.learnMoreLink;
  const button = transactionCopy[transactionType].initial?.button;
    // const title = "Place a bid";
    // const description = "Once your bid is placed, you will be the highest bidder in the auction";
    // const learnMoreLink = "/";
    // const button = {
    //     label: 'Place bid',
    //     submittingLabel: 'Placing bid…',
    //     submittedLabel: 'Bid placed',
    // };
  const isBuyNowAccept = transactionType === 'buy-now-accept';
  // const isBuyNowAccept = true;

  return (
    <TransitionPane>
      <TransactionCard>
        <TransactionHeading css={{ marginBottom: '$7' }}>
          {title}
        </TransactionHeading>
        <Box css={{ marginBottom: '$8' }}>
          <Paragraph css={{ marginBottom: '$5'}}>
            <Flex 
            // css={{
            //   backgroundColor: '$black100',
            //   borderRadius: '$3',
            // }}
            >
              <Text>
                {description}{' '}
                {learnMoreLink && (
                  <TextLink
                    css={{
                      display: 'inline',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={learnMoreLink}
                  >
                    Learn more.
                  </TextLink>
                )}
              </Text>
            </Flex>
          </Paragraph>
          <ETHField
            // frozenValue={isBuyNowAccept && formatETH(buyNowPrice)}
            frozenValue=""
            placeholder="0.00"
            name={isBuyNowAccept ? 'buyNowPrice' : 'amount'}
          />
          <Grid css={{ gap: '$4', marginY: '$6' }}>
            {isBuyNowAccept || transactionType === 'bid-place' ? (
              <Fees.LineItem
                label="Balance"
                // value={formatETHWithSuffix(amount.value)}
                value="0 ETH"
              />
            ) : (
              <AmountBreakdown lineItems={lineItems} totalAmount={amount} />
            )}
          </Grid>
        </Box>
        <TransactionSubmitButton
          label={button?.label}
          submittingLabel={button?.submittingLabel}
          submittedLabel={button?.submittedLabel}
        />
      </TransactionCard>
    </TransitionPane>
  );
}
