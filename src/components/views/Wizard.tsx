import { Views } from "../../state/viewsStore";
import ViewSelectButton from "../ViewSelectButton";

export default function Wizard() {
  const context = Views.Wizard;
  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <p>wizard</p>
      <ViewSelectButton className="text-green-600 hover:text-green-400 hover:underline" targetView={Views.Calendar}>
        Fatto!
      </ViewSelectButton>
    </section>
  );
}
