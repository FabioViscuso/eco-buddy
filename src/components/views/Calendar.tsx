import { Views } from "../../state/viewsStore";
import WeeklyCalendar from "../calendars/WeeklyCalendar";

export default function Calendar() {
  const context = Views.Calendar;

  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <WeeklyCalendar />
    </section>
  );
}
