import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type State = {
  isFirstTime: boolean;
  setIsFirstTime: (flag: boolean) => void;
  resetMainState: () => void;
}

const mainStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isFirstTime: true,
        setIsFirstTime: (flag) => set({ isFirstTime: flag }),
        resetMainState: () => set({ isFirstTime: true}),
      }),
      {
        name: "appState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default mainStore;
