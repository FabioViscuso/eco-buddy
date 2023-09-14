import weeklyCalendarStore, {
  WasteType,
} from "../../state/useWeeklyCalendarStore";
import wasteTypes from "../../utils/wasteTypes";
import WasteTypeThumbnail from "./WasteTypeThumbnail";
import { DayOfWeek } from "../../utils/weekDays";

interface Props {
  weekday: DayOfWeek;
}

export default function WasteTypesList({ weekday }: Props) {
  const { calendarData } = weeklyCalendarStore();
  return (
    <>
      {calendarData[weekday].map((wasteType: WasteType) => (
        <WasteTypeThumbnail
          key={`wastetype-${Math.random()}`}
          wasteType={wasteTypes.find((type) => type.type === wasteType)!.icon}
          bgColor={wasteTypes.find((type) => type.type === wasteType)!.bgColor}
        />
      ))}
    </>
  );
}
