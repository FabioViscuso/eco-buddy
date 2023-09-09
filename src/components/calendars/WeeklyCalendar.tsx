import DayCell from "../UI/DayCell";

export default function WeeklyCalendar() {
  const daysOfWeek = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ];

  return (
    <div className="w-full p-4 grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
      {daysOfWeek.map((weekday) => (
        <DayCell key={`day-${weekday}${Math.random()}`} weekday={weekday} />
      ))}
    </div>
  );
}
