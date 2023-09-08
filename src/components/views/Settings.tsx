import viewsStore, {Views} from "../../store/viewsStore";

export default function Settings() {
  const setView = viewsStore(state => state.setView);

  function handleResetSettings() {
    localStorage.clear();
    sessionStorage.clear();
    setView(Views.Welcome);
  }

  return (
    <section id={`section-${Views.Settings}`}>
      <button onClick={handleResetSettings}>Reimposta l'applicazione</button>
    </section>
  );
}
