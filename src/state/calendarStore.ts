import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { DayOfWeek } from "../utils/weekDays";

export type WasteType = string;

type State = {
  calendarData: Record<DayOfWeek, WasteType[]>;
  setCalendar: (
    day: DayOfWeek,
    wasteType: WasteType
  ) => void;
  removeFromCalendar: (
    day: DayOfWeek,
    wasteType: WasteType
  ) => void;
  resetCalendar: () => void;
};

const calendarStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        calendarData: {
          "Lunedì": [],
          "Martedì": [],
          "Mercoledì": [],
          "Giovedì": [],
          "Venerdì": [],
          "Sabato": [],
          "Domenica": [],
        },
        setCalendar: (day, wasteType) => {
          set((state) => {
            const updatedCalendarData = {
              ...state.calendarData,
              [day]: [...state.calendarData[day], wasteType],
            };

            return {
              calendarData: updatedCalendarData,
            };
          });
        },
        removeFromCalendar: (day, wasteType) => {
          set((state) => {
            const updatedCalendarData = {
              ...state.calendarData,
              [day]: state.calendarData[day].filter((type) => type !== wasteType),
            };

            return {
              calendarData: updatedCalendarData,
            };
          });
        },
        resetCalendar: () => {
          set({
            calendarData: {
              "Lunedì": [],
              "Martedì": [],
              "Mercoledì": [],
              "Giovedì": [],
              "Venerdì": [],
              "Sabato": [],
              "Domenica": [],
            },
          });
        },
      }),
      {
        name: "calendarState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default calendarStore;
