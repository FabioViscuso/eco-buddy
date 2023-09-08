import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export enum CalendarTypes {
  Monthly = "monthly",
  Weekly = "weekly",
}

export type CalendarWeek = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
}

interface State {
  calendarType: CalendarTypes | unknown;
  calendarData: CalendarWeek | CalendarWeek[] | unknown;
  setCalendarType: (newCalendar: CalendarTypes) => void;
}

const calendarStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        calendarType: null,
        calendarData: null,
        setCalendarType: (newCalendarType) => set({ calendarType: newCalendarType }),
      }),
      {
        name: "calendarState",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default calendarStore;
