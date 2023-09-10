import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { DayOfWeek } from "../utils/weekDays";

export type WasteType = string;

type State = {
  monthlyCalendarData: Record<number, Record<DayOfWeek, WasteType[]>>;
  addToMonthlyCalendar: (
    week: number,
    day: DayOfWeek,
    wasteType: WasteType
  ) => void;
  removeFromMonthlyCalendar: (
    week: number,
    day: DayOfWeek,
    wasteType: WasteType
  ) => void;
  resetMonthlyCalendar: () => void;
};

const monthlyCalendarStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        monthlyCalendarData: {
          1: {
            Lunedì: [],
            Martedì: [],
            Mercoledì: [],
            Giovedì: [],
            Venerdì: [],
            Sabato: [],
            Domenica: [],
          },
          2: {
            Lunedì: [],
            Martedì: [],
            Mercoledì: [],
            Giovedì: [],
            Venerdì: [],
            Sabato: [],
            Domenica: [],
          },
          3: {
            Lunedì: [],
            Martedì: [],
            Mercoledì: [],
            Giovedì: [],
            Venerdì: [],
            Sabato: [],
            Domenica: [],
          },
          4: {
            Lunedì: [],
            Martedì: [],
            Mercoledì: [],
            Giovedì: [],
            Venerdì: [],
            Sabato: [],
            Domenica: [],
          },
        },
        addToMonthlyCalendar: (week, day, wasteType) => {
          set((state) => {
            const updatedMonthData = state.monthlyCalendarData[week] || {};
            const updatedDayData = updatedMonthData[day] || [];
            updatedMonthData[day] = [...updatedDayData, wasteType];

            const updatedCalendarData = {
              ...state.monthlyCalendarData,
              [week]: updatedMonthData,
            };

            return {
              monthlyCalendarData: updatedCalendarData,
            };
          });
        },
        removeFromMonthlyCalendar: (week, day, wasteType) => {
          set((state) => {
            if (!state.monthlyCalendarData[week] || !state.monthlyCalendarData[week][day]) {
              return state;
            }

            const updatedDayData = state.monthlyCalendarData[week][day].filter(
              (type) => type !== wasteType
            );

            const updatedMonthData = {
              ...state.monthlyCalendarData[week],
              [day]: updatedDayData,
            };

            const updatedCalendarData = {
              ...state.monthlyCalendarData,
              [week]: updatedMonthData,
            };

            return {
              monthlyCalendarData: updatedCalendarData,
            };
          });
        },
        resetMonthlyCalendar: () => {
          set({
            monthlyCalendarData: {
              1: {
                Lunedì: [],
                Martedì: [],
                Mercoledì: [],
                Giovedì: [],
                Venerdì: [],
                Sabato: [],
                Domenica: [],
              },
              2: {
                Lunedì: [],
                Martedì: [],
                Mercoledì: [],
                Giovedì: [],
                Venerdì: [],
                Sabato: [],
                Domenica: [],
              },
              3: {
                Lunedì: [],
                Martedì: [],
                Mercoledì: [],
                Giovedì: [],
                Venerdì: [],
                Sabato: [],
                Domenica: [],
              },
              4: {
                Lunedì: [],
                Martedì: [],
                Mercoledì: [],
                Giovedì: [],
                Venerdì: [],
                Sabato: [],
                Domenica: [],
              },
            },
          });
        },
      }),
      {
        name: "monthlyCalendarState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default monthlyCalendarStore;
