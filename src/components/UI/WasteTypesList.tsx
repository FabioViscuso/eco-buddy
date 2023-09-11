import weeklyCalendarStore, {
  WasteType,
} from "../../state/useWeeklyCalendarStore";
import monthlyCalendarStore from "../../state/useMonthlyCalendarStore";
import wasteTypes from "../../utils/wasteTypes";
import WasteTypeThumbnail from "./WasteTypeThumbnail";
import { DayOfWeek } from "../../utils/weekDays";

interface Props {
  weekday: DayOfWeek;
  weekNumber?: number;
}

export default function WasteTypesList({ weekday, weekNumber }: Props) {
  const { calendarData } = weeklyCalendarStore();
  const { monthlyCalendarData } = monthlyCalendarStore();
  return (
    <>
      {weekNumber 
      ? monthlyCalendarData[weekNumber][weekday].map((wasteType) => (
        <WasteTypeThumbnail
          key={`wastetype-${Math.random()}`}
          wasteType={wasteType}
          bgColor={wasteTypes.find((type) => type.type === wasteType)!.bgColor}
        />
      ))
      : calendarData[weekday].map((wasteType: WasteType) => (
        <WasteTypeThumbnail
          key={`wastetype-${Math.random()}`}
          wasteType={wasteType}
          bgColor={wasteTypes.find((type) => type.type === wasteType)!.bgColor}
        />
      ))}
    </>
  );
}
