/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CSS } from '~/stitches.config';
import { UseMutationResult } from 'react-query';

import PopoverMeatball from '~/components/popover/PopoverMeatball';
import PopoverMenu from '~/components/popover/PopoverMenu';
import SpinnerStroked from '~/components/SpinnerStroked';
import Icon from '~/components/Icon';
import Box from '~/components/base/Box';

import UnhideIcon from '~/assets/icons/eye-icon-bold';
import HideIcon from '~/assets/icons/hide-icon';

import { ArtworkV2 } from '~/types/Artwork';

import {
  SetArtworkUserVisibility,
  SetArtworkUserVisibilityVariables,
} from '~/graphql/server/mutations/set-artwork-user-visibility.generated';

// import { isAllTrue, notEmptyOrNil } from '~/utils/helpers';
import { areKeysEqual } from '~/utils/users';
import { AlgoliaArtwork } from '~/types/Algolia';

interface ArtworkCardPopoverOwnerProps {
  artwork: ArtworkV2 | AlgoliaArtwork;
  currentUserPublicKey: string;
  css?: CSS;
  setArtworkUserVisibility?: UseMutationResult<
    SetArtworkUserVisibility,
    Error,
    SetArtworkUserVisibilityVariables
  >;
}

export default function ArtworkCardPopoverOwner(
  props: ArtworkCardPopoverOwnerProps
): JSX.Element {
  const { artwork, 
    // currentUserPusblicKey, 
    setArtworkUserVisibility, css } = props;

  // const hasSplits = artwork?.splitRecipients?.aggregate?.count > 0;
  const hasSplits = true;
  // const isCreator = areKeysEqual([artwork?.publicKey, currentUserPublicKey]);
  const isCreator = true;
  // const isHidden = notEmptyOrNil(artwork?.artworkUserVisibilities);
  const isHidden = false;
  const isLoading = setArtworkUserVisibility?.isLoading;
  const mutate = setArtworkUserVisibility?.mutate;

  const unhideArtworkLabel = isLoading ? 'Hiding NFT' : 'Hide NFT';
  const hideArtworkLabel = isLoading ? 'Unhiding NFT' : 'Unhide NFT';

  // const canHide = isAllTrue([
  //   setArtworkUserVisibility,
  //   (hasSplits && !isCreator) || !isCreator,
  // ]);
  const canHide = true;
  const hideOption = [
    {
      enabled: canHide,
      icon: isLoading ? (
        <SpinnerStroked size={20} />
      ) : isHidden ? (
        <Icon icon={UnhideIcon} width={22} height={16} />
      ) : (
        <Icon icon={HideIcon} width={22} height={22} />
      ),
      children: isHidden ? hideArtworkLabel : unhideArtworkLabel,
      // onClick: () => {
      //   mutate({
      //     tokenId: artwork?.tokenId,
      //     contractAddress: artwork?.contractAddress,
      //     shouldHide: !isHidden,
      //   });
      // },
    },
  ];

  if (hideOption[0].enabled) {
    return (
      <Box css={{ position: 'relative', zIndex: 4 }}>
        <PopoverMeatball size="small" appearance="minimal" css={css}>
          <PopoverMenu options={hideOption} />
        </PopoverMeatball>
      </Box>
    );
  }
  return <></>;
}
