import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { dbInterface } from "../utils/db";

interface State {
  isNotificationAllowed: boolean;
  notificationHour: number;
  setIsNotificationAllowed: (flag: boolean) => void;
  setNotificationHour: (hour: number) => void;
  resetSettingsState: () => void;
}

const mainStore = create<State>()(
  devtools((set) => ({
    isNotificationAllowed: false,
    notificationHour: 13,
    setIsNotificationAllowed: async (flag) => {
      set({ isNotificationAllowed: flag });
      await dbInterface.setItem("isNotificationAllowed", flag);
    },
    setNotificationHour: async (hour) => {
      set({ notificationHour: hour });
      await dbInterface.setItem("notificationHour", hour);
    },
    resetSettingsState: async () => {
      set({
        isNotificationAllowed: false,
        notificationHour: 13,
      });
      await dbInterface.setItem("isNotificationAllowed", false);
      await dbInterface.setItem("notificationHour", 13);
    },
  }))
);

export default mainStore;
