// import style from "./Flashcard.module.css";
import { useState } from "react";
import FlashcardNextButton from "../Buttons/FlashcardNextButton";
import type { MouseEvent } from "react";
import Badge from "../Badge/Badge";
import { motion } from "motion/react";
interface Props {
  questionDifficulty: string;
  question : string;
  answer : string;
  position: string;
  // handleFlashcardChange: () => void
}

const Flashcard = ({ question,answer, questionDifficulty}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const [swap,setSwap] = useState(false);

  const handleClick = (event: MouseEvent) => {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.id === ("front") || clickedElement.id === ("back") || clickedElement.id === ("hello")) setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    // handleFlashcardChange();
  }



  return (
  <motion.div transition={{duration: 1,ease: [0.4, 0.0, 0.2, 1],delay:0 }} animate={{ rotateX: isFlipped ? 180 : 0 }} className="flex w-11/12 h-[400px] bg-white rounded-2xl shadow-md perspective-1000" onClick={(event) => {handleClick(event)}}>

      <motion.div className={["w-full h-full p-5 cursor-pointer box-border",isFlipped ? "[transform:rotateX(180deg)]" : ""].join(" ")} id="flashcard">

        <motion.div className={["w-full h-full relative preserve-3d",isFlipped ? "[transform:rotateX(180deg)]" : ""].join(" ")}>
          
          {/* front */}
          <div className="absolute w-full h-full flex flex-col [transform:rotateX(0deg)] backface-hidden" id="front">
              <div className="flex justify-between items-center w-full">
                <p className="m-0 text-xs">Question</p>
                <Badge difficulty={questionDifficulty}></Badge>
              </div>
              <p className="text-[20px] ml-[0] mr-[0] my-[40px] absolute top-[30%] md:text-[25px]">
                {question}
              </p>
          </div>
          
          {/* back */}
          <div className="absolute w-full h-full flex flex-col [transform:rotateX(180deg)] backface-hidden" id="back">
              <div className="flex justify-between items-center w-full">
                <p className="m-0 text-[12px]">Answer</p>
                <Badge difficulty={questionDifficulty}></Badge>
              </div>
              <p className="text-[20px] ml-[0] mr-[0] my-[40px] absolute top-[30%] md:text-[25px]">{answer}</p>
              <div className="flex gap-[15px] ml-[0] mr-[0] mt-[auto]">
                <FlashcardNextButton text="Next" handleFlashcardChange={handleNext}></FlashcardNextButton>
              </div>
          
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Flashcard;
