import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface State {
  isFirstTime: boolean;
  isSettingsModalOpen: boolean;
  setIsFirstTime: (flag: boolean) => void;
  setOpenSettingsModal: () => void;
  setCloseSettingsModal: () => void;
}

const uiStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isFirstTime: false,
        isSettingsModalOpen: false,
        setIsFirstTime: (flag) => set({isFirstTime: flag}),
        setOpenSettingsModal: () => set({isSettingsModalOpen: true}),
        setCloseSettingsModal: () => set({isSettingsModalOpen: false})
      }),
      {
        name: 'uiState',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default uiStore;
