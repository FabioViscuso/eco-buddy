interface Props {
  name: string,
  bgColor: string,
  icon: any
}

export default function WasteType({name, bgColor, icon}: Props) {

  return(
    <div className={`py-2 px-4 w-[clamp(12rem,15vw,15rem)] rounded-md flex justify-between items-center`} style={{backgroundColor: bgColor}}>
      <p className="[filter:invert(100%)]">{name}</p>
      <img src={icon} className="h-8 w-8" />
    </div>
  )
}