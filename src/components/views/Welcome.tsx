import { Views } from "../../store/viewsStore";
import ViewSelectButton from "../ViewSelectButton";

export default function Welcome() {
  const context = Views.Welcome;
  return (
    <section
      id={Views.Welcome}
      className="h-full flex flex-col justify-center gap-10"
    >
      <h1>Benvenuto</h1>
      <p>Con RecyQ puoi gestire il calendario della raccolta differenziata</p>
      <ViewSelectButton currentView={context} targetView={Views.Wizard}>
        Imposta il calendario
      </ViewSelectButton>
    </section>
  );
}
