import { Views } from "../store/viewsStore";
import viewsStore from "../store/viewsStore";

export default function NavigationBar() {
  const setView = viewsStore((state) => state.setView);

  function handleViewSelector(e: React.MouseEvent) {
    e.preventDefault();
    const newView: Views = e.currentTarget.getAttribute("data-view") as Views;
    setView(newView);
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center items-center gap-10">
      <button
        id={`select-${Views.Calendar}`}
        onClick={handleViewSelector}
        data-view={Views.Calendar}
        type="button"
        role="button"
      >
        🗓️ Calendario
      </button>
      <button
        id={`select-${Views.Settings}`}
        onClick={handleViewSelector}
        data-view={Views.Settings}
        type="button"
        role="button"
      >
        ⚙️ Impostazioni
      </button>
    </nav>
  );
}
