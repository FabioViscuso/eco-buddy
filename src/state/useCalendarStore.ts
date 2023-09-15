import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { DayOfWeek } from "../utils/weekDays";

export type WasteType = string;

type State = {
  CalendarData: Record<DayOfWeek, WasteType[]>;
  addToCalendar: (day: DayOfWeek, wasteType: WasteType) => void;
  removeFromCalendar: (day: DayOfWeek, wasteType: WasteType) => void;
  resetCalendar: () => void;
};

const CalendarStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        CalendarData: {
          Lunedì: [],
          Martedì: [],
          Mercoledì: [],
          Giovedì: [],
          Venerdì: [],
          Sabato: [],
          Domenica: [],
        },
        addToCalendar: (day, wasteType) => {
          set((state) => {
            const updatedCalendarData = {
              ...state.CalendarData,
              [day]: [...state.CalendarData[day], wasteType],
            };

            return {
              CalendarData: updatedCalendarData,
            };
          });
        },
        removeFromCalendar: (day, wasteType) => {
          set((state) => {
            const updatedCalendarData = {
              ...state.CalendarData,
              [day]: state.CalendarData[day].filter(
                (type) => type !== wasteType
              ),
            };

            return {
              CalendarData: updatedCalendarData,
            };
          });
        },
        resetCalendar: () => {
          set({
            CalendarData: {
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
        name: "CalendarState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default CalendarStore;
