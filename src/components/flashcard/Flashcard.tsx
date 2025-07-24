import style from "./Flashcard.module.css";
import star from "../../assets/noun-star-4960592.svg";
import "../../animista.css";
import { useEffect, useState } from "react";

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  let answer = "PPP";
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("HO")
  //     answer = "FIRE"
  //   },250)
  // },answer)
  return (
    <div
      className={[
        style.flashcardContainer,
        isClicked
          ? isFlipped
            ? "flip-horizontal-top"
            : "flip-horizontal-bottom"
          : "",
      ].join(" ")}
      onClick={() => {
        setIsClicked(true);
        setIsFlipped(!isFlipped);
      }}
    >
      <div
        className={[
          style.flashcard,
          isClicked ? (isFlipped ? style.transform : "") : "",
        ].join(" ")}
      >
        <div className={style.headingContainer}>
          <p className={style.heading}>Question</p>
          <div className={[style.difficultyIndicator, style["easy"]].join(" ")}>
            <img src={star} alt="star-icon" className={style.indicatorIcon} />

            <span className={style.indicatorText}>Easy</span>
          </div>
        </div>
        {isClicked ? !isFlipped ? <p className={[style.text,isClicked ? (!isFlipped ? style.forward : style.backward) : "",].join(" ")}>How's Going?</p> : (<p className={[style.text,isClicked ? (!isFlipped ? style.backward : style.forward) : "",].join(" ")}>{answer}</p>) : <p>HEllo</p>}
        {/* <p className={[style.text,style.question].join(" ")}>How's Going?</p> */}
      </div>
    </div>
  );
};

export default Flashcard;
