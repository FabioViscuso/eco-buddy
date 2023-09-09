import wasteTypes from "../../utils/wasteTypes";
import WasteType from "./WasteType";

interface Props {
  fn: () => void
}

export function WasteSelectionModal({fn}: Props) {
  return (
    <div className="fixed z-50 h-[100dvh] w-[100vw] flex flex-col justify-center items-center gap-10 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="flex flex-col justify-center gap-10 h-full w-full md:w-[80vw] mx-auto">
        <p className=" text-center">Seleziona i tipi di rifiuti da conferire</p>
        <div className="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-20 gap-y-10 justify-center justify-items-center">
          {wasteTypes.map((wasteType) => (
            <WasteType name={wasteType.type} bgColor={`${wasteType.bgColor}`} icon={wasteType.icon} />
          ))}
        </div>
        <button onClick={fn} className="self-center py-2 px-4 rounded-lg bg-red-600">Chiudi</button>
      </div>
    </div>
  );
}
