import {
Accordion,
AccordionItem,
AccordionContent,
AccordionHeader,
AccordionTrigger,
} from '@radix-ui/react-accordion';
import ButtonV2 from '~/components/base/ButtonV2';
import Box from '~/components/base/Box';
import Divider from '~/components/base/Divider';
import { formatETHWithSuffix } from '~/utils/formatters';
import { LineItem } from '~/utils/transactions';
// import Fees from './FeesTable';

interface AmountBreakdownProps {
lineItems: LineItem[];
totalAmount: LineItem;
expanded?: boolean;
}

export function AmountBreakdown(props: AmountBreakdownProps) {
const { lineItems, totalAmount, expanded } = props;

const totalAmountValue = totalAmount.value
    ? totalAmount.value.toString()
    : '0';

return (
    <Accordion
    type="single"
    collapsible
    // defaultValue={expanded && totalAmountValue}
    defaultValue={"defaultValue"}
    >
    <AccordionItem value={totalAmountValue}>
        <AccordionHeader>
        <AccordionTrigger asChild>
            <ButtonV2
            variant="base"
            css={{
                minWidth: 0,
                paddingLeft: '$1',
                paddingRight: 0,
                width: '100%',
                '&:focus-visible': {
                outline: 'none',
                },
            }}
            >
            {/* <Fees.LineItem
                label={totalAmount.label}
                // value={formatETHWithSuffix(totalAmount.value)}
                value="totalAmount.value"
                // collapsible
            /> */}
            </ButtonV2>
        </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
        <Box
            css={{
            border: '1px solid $black10',
            borderRadius: '$4',
            padding: '$5',
            marginBottom: '$5',
            }}
        >
            {lineItems.map((lineItem, index) => {
            const isLastItem = index === lineItems.length - 1;
            return (
                <AccordionItem key={index} value={lineItem.value.toString()}>
                {/* <Fees.LineItem
                    size={0}
                    label={lineItem.label}
                    // value={formatETHWithSuffix(lineItem.value)}
                    value="value"
                /> */}
                {!isLastItem && (
                    <Divider
                    css={{
                        backgroundColor: '$black10',
                        marginY: '$4',
                    }}
                    />
                )}
                </AccordionItem>
            );
            })}
        </Box>
        </AccordionContent>
    </AccordionItem>
    </Accordion>
);
}