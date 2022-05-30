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
import { SelectIcon } from '~/components/forms/fields/SelectField';
import CloseIcon from '~/assets/icons/close-icon-bold';
import { css, styled } from '~/stitches.config';

type StringOrNumber = string | number;
interface RangeValues {
  min: StringOrNumber;
  max: StringOrNumber;
}
// function searchParams(router: NextRouter) {
//   const searchIndex = router.asPath.indexOf('?');
//   // If url has no search param default to empty state
//   if (searchIndex === -1) {
//     return {};
//   }
//   const search = router.asPath.substring(searchIndex + 1);
//   const searchParams = qs.parse(search);
//   return searchParams;
// }

// const getMarketLabel = (isPrimary: string): string =>
//   isPrimary === 'true' ? 'Primary' : 'Secondary';

// const getMarketTypeLabel = cond([
//   [
//     equals(AlgoliaArtworkMarketAvailability.HAS_ACTIVE_BUY_NOW),
//     always('Buy Now'),
//   ],
//   [
//     equals(AlgoliaArtworkMarketAvailability.RESERVE_NOT_MET),
//     always('Reserve Price'),
//   ],
//   [
//     equals(AlgoliaArtworkMarketAvailability.LIVE_AUCTION),
//     always('Live Auction'),
//   ],
//   [
//     equals(AlgoliaArtworkMarketAvailability.HAS_ACTIVE_OFFER),
//     always('Active Offer'),
//   ],
// ]);

// const getMimeTypeLabel = cond([
//   [equals('3D'), always('3D')],
//   [equals('AUDIO'), always('Audio')],
//   [equals('VIDEO'), always('Video')],
//   [equals('IMAGE'), always('Image')],
// ]);

const paddingTopZero = css({
  paddingTop: '0 !important',
})();

export default function ArtworkSearchFilters(): JSX.Element {
  // const router = useRouter();
  // const hasPriceRangeFromUrl = Boolean(
  //   searchParams(router).range?.['auction.currentPrice']
  // );

  return (
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

interface SelectDownIconProps {
  isCollapsed: boolean;
}

export function SelectDownIcon(props: SelectDownIconProps): JSX.Element {
  const { isCollapsed } = props;
  return (
    <SelectIcon
      css={{
        marginLeft: 'auto',
        transition: 'transform $1 $ease',
        transform: isCollapsed ? 'rotate(45deg)' : 'rotate(90deg)',
      }}
    >
      <CloseIcon width={10} />
    </SelectIcon>
  );
}
export const FilterHeading = styled('div', {
  fontSize: '$2',
  fontWeight: '$semibold',
  fontFamily: '$body',
  color: '$black100',
  display: 'flex',
  cursor: 'pointer',
  background: '$white100',
  border: 'none',
  paddingX: '0',
  variants: {
    isCollapsible: {
      true: {
        paddingY: '$6',
      },
    },
    isCollapsed: {
      true: {},
    },
  },
});