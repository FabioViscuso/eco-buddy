import { DayOfWeek, daysOfWeek } from "../../utils/weekDays";
import DayCell from "../UI/DayCell";

export default function MonthlyCalendar() {
  return (
    <div className="h-[100dvh] w-[100vw] flex md:flex-col items-center gap-8 overflow-x-auto md:overflow-y-auto snap-x md:snap-y snap-mandatory">
      <div className="relative h-[100dvh] flex-none snap-start w-full py-10">
        <p className="sticky top-0 z-20 text-center w-full mx-auto mb-16 p-2 bg-[#242424] bg-opacity-70 backdrop-blur-sm">
          Settimana 1
        </p>
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

      <div className="relative h-[100dvh] flex-none snap-start w-full py-10">
        <p className="sticky top-0 z-20 text-center w-full mx-auto mb-16 p-2 bg-[#242424] bg-opacity-70 backdrop-blur-sm">Settimana 2</p>
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

      <div className="relative h-[100dvh] flex-none snap-start w-full py-10">
        <p className="sticky top-0 z-20 text-center w-full mx-auto mb-16 p-2 bg-[#242424] bg-opacity-70 backdrop-blur-sm">Settimana 3</p>
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

      <div className="relative h-[100dvh] flex-none snap-start w-full py-10">
        <p className="sticky top-0 z-20 text-center w-full mx-auto mb-16 p-2 bg-[#242424] bg-opacity-70 backdrop-blur-sm">Settimana 4</p>
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
