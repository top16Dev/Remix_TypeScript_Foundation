import Box from '~/components/base/Box';
import Grid from '~/components/base/Grid';

import RefinementFilters from '~/components/search/algolia/RefinementFilters';
import Flex from '~/components/base/Flex';
import Button from '~/components/base/Button';
import PriceField from '~/components/forms/fields/PriceField';
import { AvailabilityMarket, AvailabilityNFT, AvailabilitType } from '~/types/Algolia';
import CollapsibleFilterSection from '../CollapsibleFilterSection';
import {useState} from 'react'
import { Formik, Form, useFormikContext } from 'formik';
type StringOrNumber = string | number;
interface RangeValues {
  min: StringOrNumber;
  max: StringOrNumber;
}

export default function ProfileSearchFilters(): JSX.Element {
  return (
    <>
    <Box>
      <Grid>
        <PriceRange></PriceRange>
        <RefinementFilters
          attribute="userTypeFacet"
          title="Availability"
          sortOrder={[
            AvailabilityNFT.BUY_NOW,
            AvailabilityNFT.RESERVE_PRICE,
            AvailabilityNFT.LIVE_AUCTION,
            AvailabilityNFT.ACTIVE_OFFER
          ]}
          defaultRefinement={[AvailabilityNFT.BUY_NOW]}
          collapsed={false}
        />
        <RefinementFilters
          attribute="userTypeFacet"
          title="Market"
          sortOrder={[
            AvailabilityMarket.PRIRMARY,
            AvailabilityMarket.SECONDARY,
          ]}
          defaultRefinement={[AvailabilityMarket.PRIRMARY]}
          collapsed={true}
        />
        <RefinementFilters
          attribute="userTypeFacet"
          title="Market"
          sortOrder={[
            AvailabilitType.IMAGE,
            AvailabilitType.VIDEO,
            AvailabilitType.THREEDIMENSION,
          ]}
          defaultRefinement={[AvailabilitType.IMAGE]}
          collapsed={true}
        />
      {/* <div> I'm in profileSearchFilters.</div> */}
      </Grid>
    </Box>
    </>
  );
}
function PriceRange(){
  // const { isValid } = useFormikContext<RangeValues>();
  const [isValid1, setValid1] = useState(false);
  const isValid = false;
  return(
    <>
    <Grid>
      <CollapsibleFilterSection title={"Price Range"} collapsed={false}>
        <Grid css={{ gap: '$3' }}>
          <Grid css={{ gridTemplateColumns: '1fr 1fr', gap: '$3' }}>
            <PriceField name="min" placeholder="0.00" />
            <PriceField name="max" placeholder="0.00" />
          </Grid>
          <Flex css={{ cursor: isValid ? 'inherit' : 'not-allowed' }}>
            <Button
              color="white"
              type="submit"
              size="large"
              shape="regular"
              disabled={!isValid}
              css={{
                width: '100%',
                opacity: isValid ? 1 : 0.3,
              }}
            >
              Set price
            </Button>
          </Flex>
      </Grid>
    </CollapsibleFilterSection>
    </Grid>
    </>
  );
}