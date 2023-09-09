import DayCell from "../UI/DayCell";

export default function MonthlyCalendar() {
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
    <div className="calendar">
      <div className="flex flex-col items-center gap-8">
        <p>Settimana 1</p>
        {daysOfWeek.map((weekday) => (
          <DayCell key={`day-${weekday}${Math.random()}`} weekday={weekday} />
        ))}
        <p>Settimana 2</p>
        {daysOfWeek.map((weekday) => (
          <DayCell key={`day-${weekday}${Math.random()}`} weekday={weekday} />
        ))}
        <p>Settimana 3</p>
        {daysOfWeek.map((weekday) => (
          <DayCell key={`day-${weekday}${Math.random()}`} weekday={weekday} />
        ))}
        <p>Settimana 4</p>
        {daysOfWeek.map((weekday) => (
          <DayCell key={`day-${weekday}${Math.random()}`} weekday={weekday} />
        ))}
      </div>
    </div>
  );
}
