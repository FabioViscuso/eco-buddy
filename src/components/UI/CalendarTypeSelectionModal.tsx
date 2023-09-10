interface Props {
  fn: (calendarType: string) => void
}

export default function CalendarTypeSelectionModal({fn} : Props) {
  return (
    <div className="fixed z-50 top-0 left-0 h-[100dvh] w-[100vw] bg-black bg-opacity-50 backdrop-blur-md">
      <div className="flex flex-col justify-center gap-10 h-full w-full md:w-[80vw] mx-auto px-10">
        <button onClick={() => fn('weekly')}>
          Seleziona calendario settimanale
        </button>
        <button onClick={() => fn('monthly')}>
          Seleziona calendario mensile
        </button>
      </div>
    </div>
  )
}