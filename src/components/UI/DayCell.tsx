import { useState } from "react";
import { createPortal } from "react-dom";
import { WasteSelectionModal } from "./WasteSelectionModal";
import { DayOfWeek } from "../../utils/weekDays";
import calendarStore from "../../state/useWeeklyCalendarStore";
import wasteTypes from "../../utils/wasteTypes";
import WasteTypeThumbnail from "./WasteTypeThumbnail";

interface Props {
  weekday: DayOfWeek;
}

export default function DayCell({ weekday }: Props) {
  const { calendarData } = calendarStore();
  const [isWasteSelectionModalOpen, setIsWasteSelectionModalOpen] =
    useState<boolean>(false);
  const handleToggleWasteSelectionModal = () => {
    setIsWasteSelectionModalOpen(!isWasteSelectionModalOpen);
  };

  const today = new Date();
  const currentWeekday = today.toLocaleDateString("it-IT", { weekday: "long" });
  const isToday = currentWeekday.toLowerCase() === weekday.toLowerCase();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowWeekday = tomorrow.toLocaleDateString("it-IT", {
    weekday: "long",
  });
  const isTomorrow = tomorrowWeekday.toLowerCase() === weekday.toLowerCase();

  return (
    <>
      <div
        className={`relative [width:clamp(16rem,20vw,40rem)] p-4 flex flex-col gap-5 ${
          isToday ? "bg-green-950" : isTomorrow ? "bg-green-800" : ""
        } border-green-700 border-2 rounded-md`}
      >
        <p>{weekday}</p>
        <div id={weekday} className="w-full flex">
          {calendarData[weekday].map((wasteType) => (
            <WasteTypeThumbnail
              key={`wastetype-${Math.random()}`}
              wasteType={wasteType}
              bgColor={wasteTypes.find(type => type.type === wasteType)!.bgColor}
            />
          ))}
          <button
            onClick={handleToggleWasteSelectionModal}
            className="p-3 ml-auto leading-[0.7] border-[#eee] border-2 rounded-full hover:border-green-400 hover:text-green-400 [filter:invert(0%)]"
          >
            +
          </button>
        </div>
        {isToday ? (
          <p className="absolute -top-7 left-0">Oggi</p>
        ) : isTomorrow ? (
          <p className="absolute -top-7 left-0">Domani</p>
        ) : null}
      </div>
      {isWasteSelectionModalOpen &&
        createPortal(
          <WasteSelectionModal
            key={`weekday-${weekday}${Math.random()}`}
            fn={handleToggleWasteSelectionModal}
            weekday={weekday}
          />,
          document.body
        )}
    </>
  );
}
