import Flex from '~/components/base/Flex';
import ArtworkCardMetaBlock from '~/components/cards/artwork/subcomponents/meta/ArtworkCardMetaBlock';
import ArtworkCardMetaContainer from '~/components/cards/artwork/subcomponents/meta/ArtworkCardMetaContainer';
import ArtworkCardMetaLabel from '~/components/cards/artwork/subcomponents/meta/ArtworkCardMetaLabel';

// import { ArtworkMetaProps } from '~/components/cards/artwork/subcomponents/meta/types';

import useCountdown from '~/hooks/use-countdown';

import { parseDateToUnix } from '~/utils/dates/dates';
import { formatETHWithSuffix } from '~/utils/formatters';
interface ArtworkMetaProps {
	label: string;
	value: number;
	endsAt: date;
}
export default function ArtworkMetaLiveAuction(
  props: ArtworkMetaProps
  // props: { auction: any; }
): JSX.Element {
  const { label, value, endsAt } = props;

  // const { countdownParts, hasEnded } = useCountdown(
  //   parseDateToUnix(auction?.endsAt)
  // );
  const hasEnded = false;
  return (
    <ArtworkCardMetaContainer css={{ backgroundColor: '$black100' }}>
      <ArtworkCardMetaBlock css={{ flex: 1 }}>
        <ArtworkCardMetaLabel css={{ color: '$black50' }}>
          Current bid
        </ArtworkCardMetaLabel>
        <ArtworkCardMetaLabel color="white">
          {/* {formatETHWithSuffix(auction?.highestBidAmount)} */}0.35
        </ArtworkCardMetaLabel>
      </ArtworkCardMetaBlock>

      <ArtworkCardMetaBlock css={{ textAlign: 'right' }}>
        <ArtworkCardMetaLabel css={{ color: '$black50' }}>
          Ending in
        </ArtworkCardMetaLabel>
        <Flex css={{ justifyContent: 'flex-end' }}>
          {hasEnded ? (
            <ArtworkCardMetaLabel color="white">
              Auction ended
            </ArtworkCardMetaLabel>
          ) : (
            // countdownParts.map(({ value, shortLabel }, key) => (
            //   <ArtworkCardMetaLabel
            //     key={key}
            //     color="white"
            //     css={{ marginLeft: '$2', minWidth: 32 }}
            //   >
            //     {value}
            //     {shortLabel}
            //   </ArtworkCardMetaLabel>
            // ))
            <>asdf</>
          )}
        </Flex>
      </ArtworkCardMetaBlock>
    </ArtworkCardMetaContainer>
  );
}
