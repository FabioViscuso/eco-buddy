import { Views } from "../../store/viewsStore"

export default function Welcome() {
    return <section id={Views.Welcome} className="h-full flex flex-col justify-center gap-10">
        <h1>Benvenuto</h1>
        <p>Con RecyQ puoi gestire il calendario della raccolta differenziata</p>
    </section>
}