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
        isFirstTime: false,
        setIsFirstTime: (flag) => set({ isFirstTime: flag }),
      }),
      {
        name: "appState",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default userStore;
