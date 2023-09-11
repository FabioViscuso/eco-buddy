import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type State = {
  isFirstTime: boolean;
  preferredCalendar: string;
  setIsFirstTime: (flag: boolean) => void;
  setPreferredCalendar: (preference: string) => void;
  resetMainState: () => void;
}

const mainStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isFirstTime: true,
        preferredCalendar: '',
        setIsFirstTime: (flag) => set({ isFirstTime: flag }),
        setPreferredCalendar: (preference) => set({ preferredCalendar: preference}),
        resetMainState: () => set({preferredCalendar: '', isFirstTime: true}),
      }),
      {
        name: "appState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default mainStore;
