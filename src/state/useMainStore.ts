import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type State = {
  isFirstTime: boolean;
  isNotificationAllowed: boolean;
  notificationHour: number;
  setIsFirstTime: (flag: boolean) => void;
  setIsNotificationAllowed: (flag: boolean) => void;
  setNotificationHour: (hour: number) => void;
  resetMainState: () => void;
};

const mainStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isFirstTime: true,
        isNotificationAllowed: false,
        notificationHour: 21,
        setIsFirstTime: (flag) => set({ isFirstTime: flag }),
        setIsNotificationAllowed: (flag) =>
          set({ isNotificationAllowed: flag }),
        setNotificationHour: (hour) => set({ notificationHour: hour }),
        resetMainState: () =>
          set({
            isFirstTime: true,
            isNotificationAllowed: false,
            notificationHour: new Date().setHours(21, 0, 0),
          }),
      }),
      {
        name: "appState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default mainStore;
