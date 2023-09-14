import viewsStore, { Views } from "../../state/useViewsStore";
import weeklyCalendarStore from "../../state/useWeeklyCalendarStore";
import mainStore from "../../state/useMainStore";
import uiStore from "../../state/useUIStore";

export default function Settings() {
  const context = Views.Settings;
  const setView = viewsStore((state) => state.setView);
  const { resetWeeklyCalendar } = weeklyCalendarStore();
  const { resetMainState } = mainStore();
  const { setCloseSettingsModal } = uiStore();

  function handleResetSettings() {
    localStorage.clear();
    sessionStorage.clear();
    resetWeeklyCalendar();
    resetMainState();
    setCloseSettingsModal();
    setView(Views.Welcome);
  }

  return (
    <section
      id={`section-${context}`}
      className="fixed top-0 h-[100dvh] left-0 z-50 w-full flex flex-col justify-center items-center gap-10 bg-opacity-60 backdrop-blur-md"
    >
      <div className="relative h-full w-full flex flex-col justify-center items-center gap-5">
        <button
          onClick={() => setCloseSettingsModal()}
          className="absolute top-10 right-10 bg-red-500 rounded-md py-2 px-4 "
        >
          Chiudi X
        </button>
        <button onClick={handleResetSettings} className="bg-red-500 rounded-md py-2 px-4">Reimposta l'applicazione</button>
      </div>
    </section>
  );
}
