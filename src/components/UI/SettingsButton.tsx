import uiStore from "../../state/useUIStore";

export default function SettingsButton() {
  const { setOpenSettingsModal } = uiStore();
  return (
    <nav className="fixed top-0 right-0 z-40 h-14 w-14 hover:h-16 hover:w-16 rounded-bl-full bg-green-300 [box-shadow:0px_0px_10px_2px_#4ade80] hover:[box-shadow:0px_0px_12px_4px_#4ade80] transition-all ">
      <button
        onClick={() => setOpenSettingsModal()}
        className="h-full w-full relative"
      >
        <span className="absolute top-1 -right-2 text-3xl [text-shadow:0px_0px_7px_#000]">
          ⚙️&nbsp;
        </span>
      </button>
    </nav>
  );
}
