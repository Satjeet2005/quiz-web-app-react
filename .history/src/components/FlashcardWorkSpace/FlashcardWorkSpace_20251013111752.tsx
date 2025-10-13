import { useState } from "react";
import Flashcard from "../Flashcard/Flashcard";
// import style from "./FlashcardWorkSpace.module.css"
// import useQuestions from "../../hooks/useQuestions";
// import Spinner from "../Spinner/Spinner";

interface Props {
  amount: number;
  category: number;
  difficulty: string;
}

const FlashcardWorkSpace = ({ category: _category, amount: _amount, difficulty: _difficulty }: Props) => {
      // const { questions, error, isLoading } = useQuestions(amount,category,difficulty);
  // const [index, setIndex] = useState(0);
  // const [card1,setCard1] = useState("current");
  const [card2/* ,setCard2 */] = useState("next")

    // const safeQuestions = questions ?? [];

        
  //   const handleFlashcardChange = () => {
  //   if(index < (safeQuestions.length-1)) 
  //       if(index%2 === 0) {setCard1("exit"); setCard2("current");}
  //       else {setCard1("current"); setCard2("exit");}
  //       setIndex(index+1);
  // }

  // if (!safeQuestions || safeQuestions.length === 0) {
  //    return <Spinner></Spinner>
  // }

  return (
    <>
    {/* <Flashcard questionDifficulty={safeQuestions[index].difficulty} question={safeQuestions[index].question} answer={safeQuestions[index].correct_answer} handleFlashcardChange={handleFlashcardChange} position={card1}></Flashcard> */}
  <Flashcard questionDifficulty={"hard"} question={"What was the name of Charles Babbage's father?"} answer={"I don't know"}  position={card2}></Flashcard>
    </>
  )
}

export default FlashcardWorkSpace