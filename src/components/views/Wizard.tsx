import { Views } from "../../store/viewsStore";
import ViewSelectButton from "../ViewSelectButton";

export default function Wizard() {
  const context = Views.Wizard;
  return (
    <section id={context}>
      <p>wizard</p>
      <ViewSelectButton currentView={context} targetView={Views.Calendar}>
        Complete Wizard
      </ViewSelectButton>
    </section>
  );
}