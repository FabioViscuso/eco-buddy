interface Props {
  isWasteTypePresent: boolean;
}

export default function AddRemoveIcon({isWasteTypePresent}: Props) {
  return (
    <div className={`absolute -top-3 -right-3 p-2 rounded-full leading-none ${isWasteTypePresent ? 'bg-red-600' : 'bg-green-500'}`}>
      {isWasteTypePresent ? '-' : '+'}
    </div>
  )
}