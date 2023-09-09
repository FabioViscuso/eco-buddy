import uiStore from "../../state/uiStore"

export function WasteSelectionModal() {
  const setCloseWasteSelectionModal = uiStore(state => state.setCloseWasteSelectionModal);
  return(
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 backdrop-blur-md">
      <div className="flex flex-col">
        <p>Seleziona i tipi di rifiuti da conferire</p>
        <div className="flex">
          <div>Carta</div>
          <div>Cartone</div>
          <div>Plastica</div>
          <div>Alluminio</div>
          <div>Vetro</div>
        </div>
        <button onClick={setCloseWasteSelectionModal}>Chiudi</button>
      </div>
    </div>
  )
}