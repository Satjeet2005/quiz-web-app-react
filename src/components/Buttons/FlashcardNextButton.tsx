import style from "./FlashcardNextButton.module.css"

interface Props{
    text: string
    handleFlashcardChange: () => void;
}

const FlashcardNextButton = ({text,handleFlashcardChange} : Props) => {
  return (
    <button className={[style.btn,style.btnGreen].join(" ")} onClick={handleFlashcardChange}>
        {text}
    </button>
  )
}

export default FlashcardNextButton;