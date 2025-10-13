import star from "../../assets/noun-star-4960592.svg";
import style from "./Badge.module.css";

interface Props {
  difficulty: string;
}
const Badge = ({ difficulty }: Props) => {
  return (
    <div className={[style.difficultyIndicator, style[difficulty]].join(" ")}>
      <img src={star} alt="star-icon" className={style.indicatorIcon} />
      <span className={style.indicatorText}>{difficulty}</span>
    </div>
  );
};

export default Badge;
