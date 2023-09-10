import { DayOfWeek, daysOfWeek } from "../../utils/weekDays";
import DayCell from "../UI/DayCell";

export default function MonthlyCalendar() {
  return (
    <div className="calendar">
      <div className="flex flex-col items-center gap-8">
        <p>Settimana 1</p>
        {daysOfWeek.map((weekday, index) => (
          <DayCell key={`week-1-day-${weekday}${index}`} weekNumber={1} weekday={weekday as DayOfWeek} />
        ))}
        <p>Settimana 2</p>
        {daysOfWeek.map((weekday, index) => (
          <DayCell key={`week-2-day-${weekday}${index}`} weekNumber={2} weekday={weekday as DayOfWeek} />
        ))}
        <p>Settimana 3</p>
        {daysOfWeek.map((weekday, index) => (
          <DayCell key={`week-3-day-${weekday}${index}`} weekNumber={3} weekday={weekday as DayOfWeek} />
        ))}
        <p>Settimana 4</p>
        {daysOfWeek.map((weekday, index) => (
          <DayCell key={`week-4-day-${weekday}${index}`} weekNumber={4} weekday={weekday as DayOfWeek} />
        ))}
      </div>
    </div>
  );
}
