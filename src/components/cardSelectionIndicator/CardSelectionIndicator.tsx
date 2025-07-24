import style from "./CardSelectionIndicator.module.css";
import bulb from "../../assets/lightbulb-yellow.svg";
const CardSelectionIndicator = () => {
  return (
    <div className={style.hintContainer}>
      <img src={bulb} alt="bulb-icon" className={style.hintIcon} />
      Click on a card below to get started
    </div>
  );
};

export default CardSelectionIndicator;
