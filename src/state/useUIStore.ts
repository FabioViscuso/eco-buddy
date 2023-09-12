import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  isSettingsModalOpen: boolean;
  setOpenSettingsModal: () => void;
  setCloseSettingsModal: () => void;
}

const uiStore = create<State>()(
  devtools(
      (set) => ({
        isSettingsModalOpen: false,
        setOpenSettingsModal: () => set({isSettingsModalOpen: true}),
        setCloseSettingsModal: () => set({isSettingsModalOpen: false})
      })
  )
);

export default uiStore;
