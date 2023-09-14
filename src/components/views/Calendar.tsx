import { Views } from "../../state/useViewsStore";
import { DayOfWeek, daysOfWeek } from "../../utils/weekDays";
import DayCell from "../UI/DayCell";

export default function Calendar() {
  const context = Views.Calendar;

  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
        {daysOfWeek.map((weekday, index) => (
          <DayCell
            key={`day-${weekday}${index}`}
            weekday={weekday as DayOfWeek}
          />
        ))}
      </div>
    </section>
  );
}
