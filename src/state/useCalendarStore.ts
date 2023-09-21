import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DayOfWeek } from "../utils/weekDays";
import { dbInterface } from "../utils/db";

export type WasteType = string;

type State = {
  CalendarData: Record<DayOfWeek, WasteType[]>;
  addToCalendar: (day: DayOfWeek, wasteType: WasteType) => void;
  removeFromCalendar: (day: DayOfWeek, wasteType: WasteType) => void;
  resetCalendar: () => void;
  syncCalendar: (calendarData: Record<DayOfWeek, WasteType[]>) => void;
};

const calendarStore = create<State>()(
  devtools((set) => ({
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

        dbInterface.setItem('CalendarData', updatedCalendarData);

        return {
          CalendarData: updatedCalendarData,
        };
      });
    },
    removeFromCalendar: (day, wasteType) => {
      set((state) => {
        const updatedCalendarData = {
          ...state.CalendarData,
          [day]: state.CalendarData[day].filter((type) => type !== wasteType),
        };

        dbInterface.setItem('CalendarData', updatedCalendarData);

        return {
          CalendarData: updatedCalendarData,
        };
      });
    },
    resetCalendar: () => {
      set(() => {
        const updatedCalendarData = {
          Lunedì: [],
          Martedì: [],
          Mercoledì: [],
          Giovedì: [],
          Venerdì: [],
          Sabato: [],
          Domenica: [],
        };

        dbInterface.setItem('CalendarData', updatedCalendarData);

        return {
          CalendarData: updatedCalendarData
        }
      });
    },
    syncCalendar: (incomingCalendarData) => set(() => {
      if (!incomingCalendarData) {
        return {
          CalendarData: {
            Lunedì: [],
            Martedì: [],
            Mercoledì: [],
            Giovedì: [],
            Venerdì: [],
            Sabato: [],
            Domenica: [],
          }
        }
      } else {
        return {
          CalendarData: incomingCalendarData
        }
      }
    })
  }))
);

export default calendarStore;
