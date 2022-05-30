/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useCallback } from 'react';

import Box from '~/components/base/Box';
import Button from '~/components/base/Button';

import { ModalKey } from '~/types/modal';

import useModal from '~/hooks/use-modal';
import ButtonV2 from '../base/ButtonV2';

interface ConnectWalletButtonProps {
  isDark?: boolean;
  className?: string;
}

export default function ConnectWalletButton(
  props: ConnectWalletButtonProps
): JSX.Element {
  const { isDark, className } = props;

  const { setCurrentModal } = useModal();

  const openModal = useCallback(() => {
    setCurrentModal(ModalKey.AUTH_MAIN);
  }, [setCurrentModal]);

  return (
    <Box css={{ alignItems: 'center' }} className={className}>
      <ButtonV2
        size={{ '@initial': 1, '@bp1': 2 }}
        variant={isDark ? 'secondary' : 'primary'}
        onClick={openModal}
      >
        Connect
        <Box css={{ display: 'none', '@bp1': { display: 'inline' } }}>
          {'\u00A0'}Wallet
        </Box>
      </ButtonV2>
    </Box>
  );
}
