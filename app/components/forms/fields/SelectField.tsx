import { styled } from '~/stitches.config';
import { useState } from 'react';
import { ChangeEvent } from 'react';

import Text from '~/components/base/Text';
import Flex from '~/components/base/Flex';

// import DownIcon from '~/assets/icons/down-chevron.svg';
import DownIcon from '~/assets/icons/down-chevron'

export const Select = styled('select', {
  appearance: 'none',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: '100%',
  opacity: 0,
  fontSize: '$1',
  cursor: 'pointer',
});

export const SelectWrapper = styled(Flex, {
  maxHeight: 38,
  fontFamily: '$body',
  fontWeight: 600,
  fontSize: '$1',
  color: '$black100',
  borderRadius: '$1',
  backgroundColor: '$white100',
  border: '1px solid $black10',
  paddingY: '$2',
  paddingLeft: '$2',
  paddingRight: '$2',
  minHeight: 'auto',
  whiteSpace: 'nowrap',
  transition: 'border-color $1 $ease',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '$0',
  '@hover': {
    '&:hover': {
      borderColor: '$black100',
    },
  },
});

export const SelectIcon = styled(Flex, {
  marginLeft: '$4',
  alignSelf: 'stretch',
});

interface SelectFieldProps<T> {
  items: T[];
  // className?: string;
  // defaultSelectedItem: T;
  // onSelectedItemChange: (selectedItem: T) => void;
}

export default function SelectField<T extends { id: string; label: string }>(
  props: SelectFieldProps<T>
): JSX.Element {
  // const {
  //   items = [],
  //   className,
  //   defaultSelectedItem,
  //   onSelectedItemChange,
  // } = props;
  const {
    items = [],
    //   defaultSelectedItem,
  } = props;

  // const [selectedItem, setSelectedItem] = useState<T>(defaultSelectedItem);

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    const rawValue = ev.target.value;
    const selectedItem = items.find((item) => item.id === rawValue);
    // setSelectedItem(selectedItem);
    // onSelectedItemChange(selectedItem);
  };

  return (
    <>
      {/* <SelectWrapper className={className}> */}
      <SelectWrapper >
        {/* <Select onChange={handleChange} value={selectedItem.id}> */}
        <Select onChange={handleChange} value={'1231'}>
          {items.map((item, i) => (
            <option key={i} value={item.id}>
              {item.label}
            </option>
          ))}
        </Select>

        {/* <Text css={{ pointerEvents: 'none' }}>{selectedItem.label}</Text> */}
        <Text css={{ pointerEvents: 'none' }}>"123123"</Text>
        <SelectIcon css={{ pointerEvents: 'none' }}>
          <DownIcon />
        </SelectIcon>
      </SelectWrapper>
    </>
  );
}
