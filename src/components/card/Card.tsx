import style from "./Card.module.css"
import rightArrow from "../../assets/right-arrow.png"

interface Props{
  styled : {}
  name : string
  description : string
  handleClick : () => void
}

const Card = ({styled,name,description,handleClick} : Props) => {
  return (
    <div className={style.card} onClick={() => handleClick()}>
        <div className={style.iconContainer} style={styled}>
        </div>
        <div className={style.cardContent}>
        <p className={style.cardHeading}>{name}</p>
        <p className={style.cardDescription}>{description}</p>
        </div>
            <img src={rightArrow} className={style.icon} />
    </div>
  )
}

export default Card