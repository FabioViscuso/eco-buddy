import { DayOfWeek, daysOfWeek} from "../../utils/weekDays";
import DayCell from "../UI/DayCell";

export default function WeeklyCalendar() {
  return (
    <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
      {daysOfWeek.map((weekday, index) => (
        <DayCell key={`day-${weekday}${index}`} weekday={weekday as DayOfWeek} />
      ))}
    </div>
  );
}
