import viewsStore, { Views } from "./store/viewsStore";
import mainStore from "./store/store";
import "./index.css";

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/views/Welcome";
import Wizard from "./components/views/Wizard";
import Calendar from "./components/views/Calendar";
import Settings from "./components/views/Settings";

function App() {
  const view = viewsStore((state) => state.view);
  const isFirstTime = mainStore((state) => state.isFirstTime);

  return (
    <>
      {isFirstTime && view === Views.Welcome && <Welcome />}
      {view === Views.Wizard && <Wizard />}
      {view === Views.Calendar && <Calendar />}
      {view === Views.Settings && <Settings />}
      <NavigationBar />
    </>
  );
}

export default App;
