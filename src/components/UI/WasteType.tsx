interface Props {
  name: string,
  bgColor: string,
  icon: any
}

export default function WasteType({name, bgColor, icon}: Props) {

  return(
    <div className={`p-2 rounded-md flex ${bgColor}`}>
      <p>{name}</p>
{/*       <img src={icon} /> */}
    </div>
  )
}