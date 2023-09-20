import { useEffect } from "react";

import "./index.css";
import settingsStore from "./state/useSettingsStore";
import viewsStore, { Views } from "./state/useViewsStore";
import uiStore from "./state/useUIStore";

import SettingsButton from "./components/UI/SettingsButton";
import Welcome from "./components/views/Welcome";
import Calendar from "./components/views/Calendar";
import Settings from "./components/views/Settings";
import { dbInterface } from "./utils/db";

function App() {
  const { setIsNotificationAllowed, setNotificationHour } = settingsStore();
  const { view, setView } = viewsStore();
  const { isSettingsModalOpen, isFirstTime } = uiStore();

  useEffect(() => {
    if (isFirstTime) {
      setView(Views.Welcome);
    }
    (async function name() {
      const savedNotificationPermission = await dbInterface.getItem("isNotificationAllowed");
      const savedNotificationHour = await dbInterface.getItem("notificationHour");
      setIsNotificationAllowed(savedNotificationPermission);
      setNotificationHour(savedNotificationHour)
    })()
  }, [isFirstTime, setView]);

  return (
    <>
      {view === Views.Welcome && <Welcome />}
      {view === Views.Calendar && <Calendar />}
      {isSettingsModalOpen && <Settings />}
      {view !== Views.Welcome && <SettingsButton />}
    </>
  );
}

export default App;
