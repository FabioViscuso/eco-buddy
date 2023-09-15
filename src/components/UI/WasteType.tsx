import weeklyCalendarStore, {
  WasteType,
} from "../../state/useCalendarStore";
import { DayOfWeek } from "../../utils/weekDays";
import AddRemoveIcon from "./AddRemoveIcon";
interface Props {
  wasteType: WasteType;
  bgColor: string;
  icon: any;
  forWeekday: DayOfWeek;
  forWeekNumber?: number;
}

export default function WasteType({
  wasteType,
  bgColor,
  icon,
  forWeekday,
}: Props) {
  const { CalendarData, addToCalendar, removeFromCalendar } =
    weeklyCalendarStore();
  const isWasteTypePresentInWeeklyCalendar =
  CalendarData[forWeekday].includes(wasteType);

  function handleCalendarUpdate() {
    if (CalendarData[forWeekday].includes(wasteType)) {
      removeFromCalendar(forWeekday, wasteType);
    } else {
      addToCalendar(forWeekday, wasteType);
    }
    console.log(CalendarData);
  }

  return (
    <div
      onClick={handleCalendarUpdate}
      className={`relative py-2 px-4 w-[clamp(12rem,15vw,15rem)] rounded-md flex justify-between items-center hover:cursor-pointer`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="[filter:invert(100%)]">{wasteType}</p>
      <img src={icon} className="h-8 w-8" />
      <AddRemoveIcon isWasteTypePresent={isWasteTypePresentInWeeklyCalendar} />
    </div>
  );
}
