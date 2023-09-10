import {useState} from 'react';
import { Views } from "../../state/useViewsStore";
import MonthlyCalendar from "../calendars/MonthlyCalendar";
import WeeklyCalendar from "../calendars/WeeklyCalendar";
import CalendarTypeSelectionModal from '../UI/CalendarTypeSelectionModal';

export default function Calendar() {
  const [calendarType, setCalendarType] = useState<string>('')
  const context = Views.Calendar;

  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      {calendarType !== "weekly" && calendarType !== "monthly" && <CalendarTypeSelectionModal fn={setCalendarType} />}
      {calendarType === "weekly" && <WeeklyCalendar />}
      {calendarType === "monthly" && <MonthlyCalendar />}
    </section>
  );
}
