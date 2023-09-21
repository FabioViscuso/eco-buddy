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
          isToday ? "bg-green-800" : isTomorrow ? "bg-green-700" : "bg-green-950"
        } border-green-700 border-2 rounded-lg hover:[box-shadow:0px_0px_6px_2px_#227744] hover:cursor-pointer`}
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
