import { useEffect } from "react";

import "./index.css";
import viewsStore, { Views } from "./state/useViewsStore";
import mainStore from "./state/useMainStore";
import uiStore from "./state/useUIStore";

import SettingsButton from "./components/UI/SettingsButton";
import Welcome from "./components/views/Welcome";
import Calendar from "./components/views/Calendar";
import Settings from "./components/views/Settings";

function App() {
  const view = viewsStore(state => state.view);
  const isFirstTime = mainStore(state => state.isFirstTime);
  const setView = viewsStore(state => state.setView);
  const {isSettingsModalOpen} = uiStore();

  useEffect(() => {
    if (isFirstTime) { setView(Views.Welcome) }
  }, [isFirstTime, setView])

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
