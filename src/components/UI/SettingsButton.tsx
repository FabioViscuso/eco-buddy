import uiStore from "../../state/useUIStore";

export default function SettingsButton() {
  const {setOpenSettingsModal} = uiStore();
  return (
    <nav className="fixed top-10 right-2 lg:right-10 z-40 h-12 flex justify-center items-center gap-10 backdrop-blur-sm">
      <button onClick={() => setOpenSettingsModal()}>
        <span className="text-3xl">⚙️&nbsp;</span>
      </button>
    </nav>
  );
}
