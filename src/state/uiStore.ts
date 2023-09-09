import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  isWasteSelectionModalOpen: boolean;
  setOpenWasteSelectionModal: () => void;
  setCloseWasteSelectionModal: () => void;
}

const uiStore = create<State>()(
  devtools(
      (set) => ({
        isWasteSelectionModalOpen: false,
        setOpenWasteSelectionModal: () => set({isWasteSelectionModalOpen: true}),
        setCloseWasteSelectionModal: () => set({isWasteSelectionModalOpen: false})
      })
  )
);

export default uiStore;
