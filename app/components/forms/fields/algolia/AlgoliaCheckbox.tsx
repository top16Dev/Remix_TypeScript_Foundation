import * as Checkbox from '@radix-ui/react-checkbox';

import { styled } from '~/stitches.config';

import Flex from '~/components/base/Flex';
import Box from '~/components/base/Box';
import Icon from '~/components/Icon';
import Text from '~/components/base/Text';

import { SearchResultHit } from '~/types/Algolia';

import { formatInteger } from '~/utils/formatters';
import { getFirstValue } from '~/utils/helpers';
import { formatLabel } from '~/utils/algolia';

import CheckboxIcon from '~/assets/icons/check-box-icon';
import { useState } from 'react';

interface AlgoliaFieldProps {
  // hit: SearchResultHit;
  // refine: (value: string | string[]) => void;
}

// export default function AlgoliaCheckbox(props: AlgoliaFieldProps): JSX.Element {
export default function AlgoliaCheckbox(props: { hit: any; }): JSX.Element {
  // const { hit, refine } = props;
  const hit = props.hit;
  const [isChecked, refine] = useState(hit.isRefined);
  return (
    <CheckboxContainer
      checked={hit.isRefined}
      // checked={true}
      onCheckedChange={() => {
        refine(!isChecked);
        // refine(hit.value);
      }}
      // name={getFirstValue(hit.value)}
      name={"asdfsd"}
    >
      <Flex css={{ alignItems: 'center' }}>
        <Box>
          {isChecked ? (
            <Icon icon={CheckboxIcon} width={20} height={20} />
          ) : (
            <EmptyCheckbox />
          )}
        </Box>

        <Text
          css={{
            marginLeft: '$3',
            fontWeight: 600,
            fontFamily: '$body',
            color: '$black100',
          }}
        >
          {/* {formatLabel(hit.label)} */}
          {hit.label}
          {/* Creator */}
        </Text>
      </Flex>

      <Box css={{ color: '$black50', fontWeight: 400, fontFamily: '$body' }}>
        {/* {formatInteger(hit.count)} */}
        {/* 38756 */}
        {hit.count}
      </Box>
    </CheckboxContainer>
  );
}

const EmptyCheckbox = styled(Box, {
  borderRadius: 5,
  width: 20,
  height: 20,
  border: 'solid 2px $black10',
  transition: '$1',
});

export const CheckboxContainer = styled(Checkbox.Root, {
  display: 'flex',
  backgroundColor: 'transparent',
  justifyContent: 'space-between',
  border: 'solid 2px $black5',
  minHeight: 60,
  alignItems: 'center',
  paddingLeft: '$5',
  paddingRight: '$6',
  cursor: 'pointer',
  borderRadius: '$2',
  fontFamily: '$body',
  fontSize: '$1',
  transition: '$1',
  '@hover': {
    '&:hover': {
      borderColor: '$black20',
      [`${EmptyCheckbox}`]: {
        borderColor: '$black20',
      },
    },
  },
});
function value(value: any): [any, any] {
  throw new Error('Function not implemented.');
}

