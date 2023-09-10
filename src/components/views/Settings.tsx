import viewsStore, { Views } from "../../state/useViewsStore";
import weeklyCalendarStore from "../../state/useWeeklyCalendarStore";
import monthlyCalendarStore from "../../state/useMonthlyCalendarStore";

export default function Settings() {
  const context = Views.Settings;
  const setView = viewsStore((state) => state.setView);
  const { resetWeeklyCalendar } = weeklyCalendarStore();
  const { resetMonthlyCalendar } = monthlyCalendarStore();

  function handleResetSettings() {
    resetWeeklyCalendar();
    resetMonthlyCalendar();
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
