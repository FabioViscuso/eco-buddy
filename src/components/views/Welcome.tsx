import { Views } from "../../state/useViewsStore";
import ViewSelectionButton from "../UI/ViewSelectionButton";

export default function Welcome() {
  const context = Views.Welcome;
  
  return (
    <section
      id={`section-${context}`}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-green-400 text-4xl">Ciao!</h1>
      <p>
        Con RecyQ puoi gestire il calendario della raccolta differenziata e, se
        vuoi, ricevere una notifica appena arriva il momento di conferirla.
      </p>
      <div className="flex">
        <p>Per iniziare,&nbsp;</p>
        <ViewSelectionButton
          className="text-green-600 hover:text-green-400 hover:underline"
          targetView={Views.Calendar}
        >
          <span>imposta il calendario &#10230;</span>
        </ViewSelectionButton>
      </div>
    </section>
  );
}
