import uiStore from "../../state/uiStore";
import { WasteSelectionModal } from "./WasteSelectionModal";

interface Props {
  weekday: string;
}

export default function DayCell({ weekday }: Props) {
  const isWasteSelectionModalOpen = uiStore(state => state.isWasteSelectionModalOpen);
  const setOpenWasteSelectionModal = uiStore(
    (state) => state.setOpenWasteSelectionModal
  );
  const date = new Date();
  const currentWeekday = date.toLocaleDateString("it-IT", { weekday: "long" });
  const isCurrentWeekday =
    currentWeekday.toLowerCase() === weekday.toLowerCase();

  return (
    <>
      <div
        className={`[width:clamp(12rem,20vw,40rem)] p-4 flex flex-col gap-5 ${
          isCurrentWeekday && "bg-green-950"
        } border-green-700 border-2 rounded-md`}
      >
        <p>{weekday}</p>
        <div id={weekday} className="w-full flex">
          <button
            onClick={setOpenWasteSelectionModal}
            className="p-3 ml-auto leading-[0.7] border-[#eee] border-2 rounded-full hover:border-green-400 hover:text-green-400"
          >
            +
          </button>
        </div>
      </div>
      {isWasteSelectionModalOpen && <WasteSelectionModal />}
    </>
  );
}
