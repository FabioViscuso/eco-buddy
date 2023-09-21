import { Views } from "../../state/useViewsStore";
import mainStore from "../../state/useSettingsStore";
import ViewSelectionButton from "../UI/ViewSelectionButton";

export default function Welcome() {
  const context = Views.Welcome;
  const isNotificationAllowed = mainStore(state => state.isNotificationAllowed)
  const setIsNotificationAllowed = mainStore(state => state.setIsNotificationAllowed)

  const requestNotifPermittions = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("permission granted");
          setIsNotificationAllowed(true)
        }
      });
    }
  };

  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-green-400 text-4xl">Ciao! 👋</h1>
      <p className="text-center">
        Con Eco Buddy puoi gestire il calendario della raccolta differenziata e,
        se vuoi, ricevere una notifica appena arriva il momento di conferirla.
      </p>
      <button
        onClick={requestNotifPermittions}
        className="bg-green-500 py-2 px-4 rounded-md text-black"
      >
        <p>{isNotificationAllowed ? "✅ Hai attivato le notifiche! ✅" : "👉 Attiva le notifiche 👈"}</p>
        <p className="text-xs">{`(Potrai cambiare scelta dalle impostazioni)`}</p>
      </button>
      <div className="flex">
        <p>Per iniziare,&nbsp;</p>
        <ViewSelectionButton
          className="text-green-600 hover:text-green-400 hover:underline"
          targetView={Views.Calendar}
        >
          <span>imposta il calendario &#10230;</span>
        </ViewSelectionButton>
      </div>
    </section>
  );
}
