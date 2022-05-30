/* eslint-disable @typescript-eslint/consistent-type-imports */
import create from 'zustand';
import { ModalMode, ModalKey } from '~/types/modal';

export interface Modal {
  modalKey: ModalKey;
  entityId: string;
  currentTab: ModalMode;
  setModalState?: (newState: Modal) => void;
  setModalKey?: (value: ModalKey) => void;
  setModalEntity?: (value: string) => void;
  setModalTab?: (value: ModalMode) => void;
  resetModalState?: () => void;
}

const useModalState = create<Modal>((set) => ({
  modalKey: ModalKey.AUTH_MAIN,
  entityId: "",
  currentTab: ModalMode.Followers,
  setModalState: (newState) => set(newState),
  setModalKey: (value) => set({ modalKey: value }),
  setModalEntity: (value) => set({ entityId: value }),
  setModalTab: (value) => set({ currentTab: value }),
  resetModalState: () => set({ modalKey: ModalKey.AUTH_MAIN, entityId: "", currentTab: ModalMode.Followers }),
}));

export default useModalState;
