import viewsStore, { Views } from "../store/viewsStore";
import ViewSelectButton from "./ViewSelectButton";

export default function NavigationBar() {
  const context = viewsStore(state => state.view);
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center items-center gap-10">
      <ViewSelectButton currentView={context} targetView={Views.Calendar}>
        🗓️ Calendario
      </ViewSelectButton>
      <ViewSelectButton currentView={context} targetView={Views.Settings}>
        ⚙️ Impostazioni
      </ViewSelectButton>
    </nav>
  );
}
