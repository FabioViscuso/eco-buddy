import { Views } from "../../state/useViewsStore";
import MonthlyCalendar from "../calendars/MonthlyCalendar";
import WeeklyCalendar from "../calendars/WeeklyCalendar";
import mainStore from '../../state/useMainStore';
import CalendarTypeSelectionModal from '../UI/CalendarTypeSelectionModal';

export default function Calendar() {
  const {preferredCalendar} = mainStore();
  const context = Views.Calendar;

  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      {preferredCalendar !== "weekly" && preferredCalendar !== "monthly" && <CalendarTypeSelectionModal />}
      {preferredCalendar === "weekly" && <WeeklyCalendar />}
      {preferredCalendar === "monthly" && <MonthlyCalendar />}
    </section>
  );
}
