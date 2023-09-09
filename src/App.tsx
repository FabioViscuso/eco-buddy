import { useEffect } from "react";

import "./index.css";
import viewsStore, { Views } from "./state/viewsStore";
import mainStore from "./state/mainStore";

import NavigationBar from "./components/UI/NavigationBar";
import Welcome from "./components/views/Welcome";
import Calendar from "./components/views/Calendar";
import Settings from "./components/views/Settings";

function App() {
  const view = viewsStore(state => state.view);
  const isFirstTime = mainStore(state => state.isFirstTime);
  const setView = viewsStore(state => state.setView);

  useEffect(() => {
    if (isFirstTime) { setView(Views.Welcome) }
  }, [isFirstTime, setView])

  return (
    <>
      {view === Views.Welcome && <Welcome />}
      {view === Views.Calendar && <Calendar />}
      {view === Views.Settings && <Settings />}
      <NavigationBar />
    </>
  );
}

export default App;
