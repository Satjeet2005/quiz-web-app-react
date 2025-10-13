import style from "./SelectedTag.module.css"

interface Props{
  optionId: number;
}
const SelectedTag = ({optionId} : Props) => {
  return (
    <span className={[style.tag,optionId === 1 ? style.tagGreen : style.tagBlue].join(" ")}>Selected</span>
  )
}

export default SelectedTag