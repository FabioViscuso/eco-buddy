import viewsStore, { Views } from "../../state/useViewsStore";
import calendarStore from "../../state/useCalendarStore";
import settingsStore from "../../state/useSettingsStore";
import uiStore from "../../state/useUIStore";

export default function Settings() {
  const context = Views.Settings;
  const setView = viewsStore((state) => state.setView);
  const { resetCalendar } = calendarStore();
  const {
    isNotificationAllowed,
    setIsNotificationAllowed,
    notificationHour,
    setNotificationHour,
    resetSettingsState,
  } = settingsStore();
  const { setCloseSettingsModal } = uiStore();

  function handleAllowNotification() {
    setIsNotificationAllowed(!isNotificationAllowed);
  }

  function handleChangeNotificationHour(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNotificationHour(Number(event.target.value));
  }

  function handleResetSettings() {
    localStorage.clear();
    sessionStorage.clear();
    resetCalendar();
    resetSettingsState();
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
          onClick={handleAllowNotification}
          className={`${
            isNotificationAllowed ? "bg-red-500" : "bg-green-500"
          } rounded-md py-2 px-4`}
        >
          {isNotificationAllowed ? "Disattiva notifiche" : "Attiva notifiche"}
        </button>
        <div>
          <label htmlFor="notificationHour" className="mr-4">
            Seleziona un orario dalle 18 alle 23
          </label>
          <input
            className="py-2 px-4 rounded-md w-min"
            onChange={handleChangeNotificationHour}
            type="number"
            name="notificationHour"
            id="notificationHour"
            step={1}
            min={18}
            max={23}
            defaultValue={notificationHour}
          />
        </div>
        <button
          onClick={() => setCloseSettingsModal()}
          className="absolute top-10 right-10 bg-red-500 rounded-md py-2 px-4 "
        >
          Chiudi X
        </button>
        <button
          onClick={handleResetSettings}
          className="bg-red-500 rounded-md py-2 px-4"
        >
          Reimposta l'applicazione
        </button>
      </div>
    </section>
  );
}
