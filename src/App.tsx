import viewsStore, {Views} from "./store/viewsStore";
import mainStore from "./store/store";
import "./index.css";

function App() {
  const view = viewsStore(state => state.view);
  const isFirstTime = mainStore(state => state.isFirstTime);

  return <>
    {(isFirstTime && view === Views.Welcome) && <p>welcome</p>}
    {view === Views.Wizard && <p>wizard</p>}
    {view === Views.Calendar && <p>calendar</p>}
    {view === Views.Settings && <p>settings</p>}
  </>;
}

export default App;
