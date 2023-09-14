interface Props {
  isWasteTypePresent: boolean;
}

export default function AddRemoveIcon({isWasteTypePresent}: Props) {
  return (
    <div className={`absolute -top-3 -right-3 rounded-full leading-none ${isWasteTypePresent ? 'bg-red-600' : 'bg-green-500'}`}>
      <div className="relative h-8 w-8"></div>
       <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xl -mt-1">{isWasteTypePresent ? '-' : '+'}</span>
    </div>
  )
}