interface Props {
  isWasteTypePresent: boolean;
}

export default function AddRemoveIcon({isWasteTypePresent}: Props) {
  return (
    <div className={`absolute -top-3 -right-3 rounded-full leading-relaxed h-8 w-8 flex justify-center items-center ${isWasteTypePresent ? 'bg-red-600' : 'bg-green-500'}`}>
       <span className="text-2xl h-full w-full text-center -mt-1">{isWasteTypePresent ? '-' : '+'}</span>
    </div>
  )
}