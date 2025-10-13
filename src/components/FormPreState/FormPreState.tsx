import Settings from "../../assets/noun-setting-2060937.svg";
import cards from "../../assets/cards-green.svg"
import target from "../../assets/target-blue.svg"
import style from "./FormPreState.module.css";

interface Props{
    handleTypeChange: (id: number) => void
}

const FormPreState = ({handleTypeChange} : Props) => {
  return (
    <div className={style.emptyState}>
      <div className={style.iconContainer}>
        <img src={Settings} alt="settings-icon" className={style.icon}/>
      </div>
      <h3 className={style.title}>Ready to Start Learning?</h3>
      <p className={style.description}>
        Choose your preferred study method above to unlock customization options
      </p>
      <div className={style.buttonContainer}>
        <button
          onClick={() => handleTypeChange(1)}
          className={[style.flashcardButton,style.btn].join(" ")}
        >
          <img src={cards} alt="card-icon" className={style.buttonIcon}/>
          <p className={style.buttonText}>Try Flashcards</p>
        </button>
        <button
          onClick={() => handleTypeChange(2)}
          className={[style.mcqButton,style.btn].join(" ")}
        >
          <img src={target} alt="" className={style.buttonIcon}/>
          <p className={style.buttonText}>Try MCQs</p>
        </button>
      </div>
    </div>
  );
};

export default FormPreState;
