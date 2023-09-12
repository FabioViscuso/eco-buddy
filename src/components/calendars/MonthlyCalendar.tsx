import { DayOfWeek, daysOfWeek } from "../../utils/weekDays";
import DayCell from "../UI/DayCell";

export default function MonthlyCalendar() {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center gap-8 overflow-y-auto snap-y snap-mandatory">
      <div className="min-h-screen flex-none snap-start w-full py-12">
        <p className="text-center mb-16">Settimana 1</p>
        <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
          {daysOfWeek.map((weekday, index) => (
            <DayCell
              key={`week-1-day-${weekday}${index}`}
              weekNumber={1}
              weekday={weekday as DayOfWeek}
            />
          ))}
        </div>
      </div>

      <div className="min-h-screen flex-none snap-start w-full py-10">
        <p className="text-center mb-16">Settimana 2</p>
        <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
          {daysOfWeek.map((weekday, index) => (
            <DayCell
              key={`week-1-day-${weekday}${index}`}
              weekNumber={2}
              weekday={weekday as DayOfWeek}
            />
          ))}
        </div>
      </div>

      <div className="min-h-screen flex-none snap-start w-full py-20">
        <p className="text-center mb-16">Settimana 3</p>
        <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
          {daysOfWeek.map((weekday, index) => (
            <DayCell
              key={`week-1-day-${weekday}${index}`}
              weekNumber={3}
              weekday={weekday as DayOfWeek}
            />
          ))}
        </div>
      </div>

      <div className="min-h-screen flex-none snap-start w-full py-10">
        <p className="text-center mb-16">Settimana 4</p>
        <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
          {daysOfWeek.map((weekday, index) => (
            <DayCell
              key={`week-1-day-${weekday}${index}`}
              weekNumber={4}
              weekday={weekday as DayOfWeek}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
