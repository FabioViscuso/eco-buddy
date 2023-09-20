import { useState } from "react";
import { createPortal } from "react-dom";
import { WasteSelectionModal } from "./WasteSelectionModal";
import { DayOfWeek } from "../../utils/weekDays";
import WasteTypesList from "./WasteTypesList";

interface Props {
  weekday: DayOfWeek;
}

export default function DayCell({ weekday }: Props) {
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
        onClick={handleToggleWasteSelectionModal}
        className={`relative [width:clamp(16rem,15vw,30rem)] p-4 flex flex-col gap-5 ${
          isToday ? "bg-green-950" : isTomorrow ? "bg-green-800" : ""
        } border-green-700 border-2 rounded-md hover:[box-shadow:0px_0px_6px_2px_#227744] hover:cursor-pointer`}
      >
        
        <p>
          {weekday}{" "}
          {isToday ? (
            <span className="">{`(Oggi)`}</span>
          ) : isTomorrow ? (
            <span className="">{`(Domani)`}</span>
          ) : null}
        </p>

        <div id={weekday} className="w-full flex gap-2">
          <WasteTypesList weekday={weekday} />
          <button
            onClick={handleToggleWasteSelectionModal}
            className="relative p-3 ml-auto h-12 w-12 border-[#eee] border-2 rounded-full hover:border-green-400 hover:text-green-400 [filter:invert(0%)]"
          >
            <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl -mt-1">
              +
            </span>
          </button>
        </div>

      </div>
      {isWasteSelectionModalOpen &&
        createPortal(
          <WasteSelectionModal
            key={Math.floor(1000 + Math.random() * 9999)}
            fn={handleToggleWasteSelectionModal}
            weekday={weekday}
          />,
          document.body
        )}
    </>
  );
}
