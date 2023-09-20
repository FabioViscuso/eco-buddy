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

const settingsStore = create<State>()(
  devtools((set) => ({
    isNotificationAllowed: false,
    notificationHour: 21,
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
        notificationHour: 21,
      });
      await dbInterface.setItem("isNotificationAllowed", false);
      await dbInterface.setItem("notificationHour", 21);
    },
  }))
);

export default settingsStore;
