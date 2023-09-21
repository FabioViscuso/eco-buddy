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
      className="fixed top-0 h-[100dvh] left-0 z-50 w-full flex flex-col justify-center items-center gap-10 bg-black bg-opacity-70 backdrop-blur-md"
    >
      <div className="relative h-full w-full flex flex-col justify-center items-center gap-14">
        <button
          onClick={() => setCloseSettingsModal()}
          className="absolute top-0 right-0 bg-red-600 rounded-bl-full h-16 w-16 hover:h-18 hover:w-18 flex items-start justify-end pt-2 pr-2 [box-shadow:0px_0px_12px_6px_#f87171]  transition-all"
        >
          <span className="text-3xl">⛌</span>
        </button>
        <button
          onClick={handleAllowNotification}
          className={`${
            isNotificationAllowed ? "bg-red-500" : "bg-green-500"
          } rounded-md py-2 px-4`}
        >
          {isNotificationAllowed ? "Disattiva notifiche" : "Attiva notifiche"}
        </button>
        <div className="flex flex-col items-center gap-5">
          <label htmlFor="notificationHour" className="mr-4">
            Seleziona un orario dalle 18:00 alle 23:00 <br></br>
            Orario corrente: {notificationHour}:00
          </label>
          <input
            className="py-2 px-4 rounded-md w-min"
            onChange={handleChangeNotificationHour}
            type="range"
            name="notificationHour"
            id="notificationHour"
            step={1}
            min={18}
            max={23}
            defaultValue={notificationHour}
          />
        </div>
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
