import wasteTypes from "../../utils/wasteTypes";
import { DayOfWeek } from "../../utils/weekDays";
import WasteType from "./WasteType";

interface Props {
  weekday: DayOfWeek;
  weekNumber?: number;
  fn: () => void;
}

export function WasteSelectionModal({weekday, fn}: Props) {
  return (
    <div className="fixed z-50 top-0 left-0 h-[100dvh] w-[100vw] bg-black bg-opacity-80 backdrop-blur-md">
      <div className="relative flex flex-col justify-center gap-20 h-full w-full md:px-[5vw] mx-auto px-10">
        <p className=" text-center text-xl ">Seleziona i tipi di rifiuti da conferire <span className=" text-green-300 underline ">{weekday.toLowerCase()}</span></p>
        <div className="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-32 gap-y-10 justify-center justify-items-center">
          {wasteTypes.map((wasteType) => (
            <WasteType wasteType={wasteType.type} bgColor={`${wasteType.bgColor}`} icon={wasteType.icon} forWeekday={weekday} />
          ))}
        </div>
        <button
          onClick={fn}
          className="absolute top-0 right-0 bg-red-600 rounded-bl-full h-16 w-16 hover:h-18 hover:w-18 flex items-start justify-end pt-2 pr-2 [box-shadow:0px_0px_12px_6px_#f87171]  transition-all"
        >
          <span className="text-3xl">⛌</span>
        </button>      </div>
    </div>
  );
}
