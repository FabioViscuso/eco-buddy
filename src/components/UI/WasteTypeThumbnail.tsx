import { WasteType } from "../../state/useCalendarStore"

interface Props {
  wasteType: WasteType,
  bgColor: string
}

export default function WasteTypeThumbnail({wasteType, bgColor}: Props) {
  return (
    <>
      <div className="flex items-center justify-center p-2 h-12 w-12 rounded-full" style={{backgroundColor: bgColor}}>
        <img src={wasteType} className="" />
      </div>
    </>
  )
}