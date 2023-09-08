import { Views } from "../../state/viewsStore";

export default function Calendar() {
  const context = Views.Calendar;

  return (
    <section
      id={context}
      className="h-full w-full flex flex-col justify-center items-center gap-10"
    >
      <p>calendar</p>
    </section>
  );
}
