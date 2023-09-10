import viewsStore, { Views } from "../../state/viewsStore";
import calendarStore from "../../state/calendarStore";

export default function Settings() {
  const context = Views.Settings;
  const setView = viewsStore((state) => state.setView);
  const { resetCalendar } = calendarStore();

  function handleResetSettings() {
    resetCalendar();
    localStorage.clear();
    sessionStorage.clear();
    setView(Views.Welcome);
  }

  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <button onClick={handleResetSettings}>Reimposta l'applicazione</button>
    </section>
  );
}
