import viewsStore, { Views } from "../../state/useViewsStore";
import ViewSelectionButton from "./ViewSelectionButton";

export default function NavigationBar() {
  const context = viewsStore((state) => state.view);
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-12 flex justify-center items-center gap-10 backdrop-blur-sm">
      <ViewSelectionButton
        className={`text-green-600`}
        targetView={Views.Calendar}
      >
        <span className="no-underline ">🗓️&nbsp;</span>
        <span className={`${context === Views.Calendar && "underline"}`}>
          Calendario
        </span>
      </ViewSelectionButton>
      <ViewSelectionButton
        className={`text-green-600`}
        targetView={Views.Settings}
      >
        <span className="no-underline">⚙️&nbsp;</span>
        <span className={`${context === Views.Settings && "underline"}`}>
          Impostazioni
        </span>
      </ViewSelectionButton>
    </nav>
  );
}
