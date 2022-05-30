import { connectSortBy } from 'react-instantsearch-dom';

import Text from '~/components/base/Text';
import {
  SelectWrapper,
  Select,
  SelectIcon,
} from '~/components/forms/fields/SelectField';

import DownIcon from '~/assets/icons/down-chevron';

interface SelectOption {
  value: string;
  label: string;
}

// const AlgoliaSelectField = connectSortBy((props) => {
function AlgoliaSelectField(props: { items: any; currentRefinement: any; }){
  // const { items, currentRefinement, refine } = props;
  const { items, currentRefinement} = props;

  // const activeOption = items.find((item: { value: any; }) => item.value === currentRefinement);

  // if (!currentRefinement || !activeOption) {
  //   return null;
  // }

  // const handleSort = (e: { target: { value: any; }; }) => {
  //   const value = e.target.value;
  //   refine(value);
  // };

  return (
    <>
    {/* <div>It is in Algolia</div> */}
      <SelectWrapper css={{ minWidth: 220 }}>
        {/* <Select onBlur={handleSort} onChange={handleSort}> */}
        <Select>
          {items.map((item: SelectOption, i: number) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
          {/* <option>1</option><option>2</option><option>3</option><option>4</option> */}
        </Select>
        {/* <Text>{activeOption.label}</Text> */}
        <Text>Total Volume</Text>
        <SelectIcon css={{ marginLeft: 'auto' }}>
          <DownIcon width={15} />
        </SelectIcon>
      </SelectWrapper>
    </>
  );
}

export default AlgoliaSelectField;
