import { WasteType } from "../../state/useWeeklyCalendarStore"

interface Props {
  wasteType: WasteType,
  bgColor: string
}

export default function WasteTypeThumbnail({wasteType, bgColor}: Props) {
  return (
    <>
      <div className="flex items-center leading-none p-2" style={{backgroundColor: bgColor}}>
        <p className="[filter:invert(100%)]">{wasteType}</p>
      </div>
    </>
  )
}