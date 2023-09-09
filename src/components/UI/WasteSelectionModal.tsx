import uiStore from "../../state/uiStore";
import wasteTypes from "../../utils/wasteTypes";
import WasteType from "./WasteType";

export function WasteSelectionModal() {
  const setCloseWasteSelectionModal = uiStore(
    (state) => state.setCloseWasteSelectionModal
  );

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex place-content-center bg-black bg-opacity-70">
      <div className="flex flex-col">
        <p>Seleziona i tipi di rifiuti da conferire</p>
        <div className="grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center justify-items-center">
          {wasteTypes.map((wasteType) => (
            <WasteType name={wasteType.type} bgColor={`bg-[${wasteType.bgColor}]`} icon={wasteType.icon} />
          ))}
        </div>
        <button onClick={setCloseWasteSelectionModal}>Chiudi</button>
      </div>
    </div>
  );
}
