import weeklyCalendarStore, {
  WasteType,
} from "../../state/useWeeklyCalendarStore";
import monthlyCalendarStore from "../../state/useMonthlyCalendarStore";
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
  forWeekNumber,
}: Props) {
  const { calendarData, addToWeeklyCalendar, removeFromWeeklyCalendar } =
    weeklyCalendarStore();
  const {
    monthlyCalendarData,
    addToMonthlyCalendar,
    removeFromMonthlyCalendar,
  } = monthlyCalendarStore();
  const isWasteTypePresentInWeeklyCalendar =
    calendarData[forWeekday].includes(wasteType);
  const isWasteTypePresentInMonthlyCalendar = forWeekNumber
    ? monthlyCalendarData[forWeekNumber][forWeekday].includes(wasteType)
    : false;

  function handleCalendarUpdate() {
    if (forWeekNumber) {
      if (monthlyCalendarData[forWeekNumber][forWeekday].includes(wasteType)) {
        removeFromMonthlyCalendar(forWeekNumber, forWeekday, wasteType);
      } else {
        addToMonthlyCalendar(forWeekNumber, forWeekday, wasteType);
      }
      console.log(
        monthlyCalendarData[forWeekNumber],
        forWeekNumber,
        forWeekday
      );
    } else {
      if (calendarData[forWeekday].includes(wasteType)) {
        removeFromWeeklyCalendar(forWeekday, wasteType);
      } else {
        addToWeeklyCalendar(forWeekday, wasteType);
      }
      console.log(calendarData);
    }
  }

  return (
    <div
      onClick={handleCalendarUpdate}
      className={`relative py-2 px-4 w-[clamp(12rem,15vw,15rem)] rounded-md flex justify-between items-center`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="[filter:invert(100%)]">{wasteType}</p>
      <img src={icon} className="h-8 w-8" />
      <AddRemoveIcon
        isWasteTypePresent={
          forWeekNumber
            ? isWasteTypePresentInMonthlyCalendar
            : isWasteTypePresentInWeeklyCalendar
        }
      />
    </div>
  );
}
