import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface State {
  isFirstTime: boolean;
  setIsFirstTime: (flag: boolean) => void;
}

const userStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isFirstTime: true,
        setIsFirstTime: (flag) => set({ isFirstTime: flag }),
      }),
      {
        name: "appState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default userStore;
