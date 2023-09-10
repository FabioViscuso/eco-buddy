import calendarStore, { WasteType } from "../../state/useWeeklyCalendarStore"
import { DayOfWeek } from "../../utils/weekDays";
interface Props {
  wasteType: WasteType;
  bgColor: string;
  icon: any;
  forWeekday: DayOfWeek;
  forWeekNumber?: number;
}

export default function WasteType({wasteType, bgColor, icon, forWeekday}: Props) {
  const {calendarData, setCalendar, removeFromCalendar} = calendarStore();

  function handleCalendarUpdate() {
    if (calendarData[forWeekday].includes(wasteType)) {
      removeFromCalendar(forWeekday, wasteType)
    } else {
      setCalendar(forWeekday, wasteType);
    }
    console.log(calendarData);
  }

  return(
    <div onClick={handleCalendarUpdate} className={`py-2 px-4 w-[clamp(12rem,15vw,15rem)] rounded-md flex justify-between items-center`} style={{backgroundColor: bgColor}}>
      <p className="[filter:invert(100%)]">{wasteType}</p>
      <img src={icon} className="h-8 w-8" />
    </div>
  )
}