import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { DayOfWeek } from "../utils/weekDays";

export type WasteType = string;

type State = {
  calendarData: Record<DayOfWeek, WasteType[]>;
  addToWeeklyCalendar: (day: DayOfWeek, wasteType: WasteType) => void;
  removeFromWeeklyCalendar: (day: DayOfWeek, wasteType: WasteType) => void;
  resetWeeklyCalendar: () => void;
};

const weeklyCalendarStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        calendarData: {
          Lunedì: [],
          Martedì: [],
          Mercoledì: [],
          Giovedì: [],
          Venerdì: [],
          Sabato: [],
          Domenica: [],
        },
        addToWeeklyCalendar: (day, wasteType) => {
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
        removeFromWeeklyCalendar: (day, wasteType) => {
          set((state) => {
            const updatedCalendarData = {
              ...state.calendarData,
              [day]: state.calendarData[day].filter(
                (type) => type !== wasteType
              ),
            };

            return {
              calendarData: updatedCalendarData,
            };
          });
        },
        resetWeeklyCalendar: () => {
          set({
            calendarData: {
              Lunedì: [],
              Martedì: [],
              Mercoledì: [],
              Giovedì: [],
              Venerdì: [],
              Sabato: [],
              Domenica: [],
            },
          });
        },
      }),
      {
        name: "weeklyCalendarState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default weeklyCalendarStore;
