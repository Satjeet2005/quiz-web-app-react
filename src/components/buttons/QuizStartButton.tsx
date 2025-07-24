import style from "./QuizStartButton.module.css"
import playIcon from "../../assets/play-button-svgrepo-com.svg"
import { useFormContext } from "react-hook-form";

interface Props{
    selectedType : number | null;
    formValidation: () => void;
}

const conversion : {[key : number] : string}= {
    1 : "Flashcards",
    2 : "Quiz"
}

const QuizStartButton = ({selectedType,formValidation} : Props) => {

  const { trigger } = useFormContext();

  async function onClick(){
    const isValid = await trigger();
    if(isValid) formValidation()
  }

  return (
    <button type="submit" className={[style.btn,selectedType ? selectedType === 1 ? style.btnGreen : style.btnBlue : ""].join(" ")} onClick={onClick}>
        <img src={playIcon} alt="play-button" className={style.icon}/>
        {<p className={style.btnText}>Start {selectedType ? conversion[selectedType] : ""}</p>}
        
    </button>
  )
}

export default QuizStartButton


