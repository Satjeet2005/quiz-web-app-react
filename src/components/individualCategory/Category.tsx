import style from "./Category.module.css";
import cards from "../../assets/download.svg";
import brain from "../../assets/brain.svg"
import bulb from "../../assets/lightbulb.svg"
import repeat from "../../assets/repeat.svg"
import mcq from "../../assets/target-04-svgrepo-com.svg"
import timer from "../../assets/timer.svg"
import instant from "../../assets/lightning.svg"
import random from "../../assets/shuffle.svg"

interface Props {
  selectedCategory: string | null;
}

const options = [{
  heading : "Flashcards",
  description : "Designed for clarity, built for understanding.",
  icon : cards,
  features : [{
    icon : brain,
    description : "Boost Memory Recall"
  },{
    icon : bulb,
    description : "Simple & Effective"
  },{
    icon : repeat,
    description : "Self-paced Learning"
  }],
  customClass : "optionGreen"
},{
  heading : "MCQs",
  description : "Practice with timed multiple-choice questions.",
  icon : mcq,
  features : [{
    icon : timer,
    description : "Timed Challenges"
  },{
    icon : instant,
    description : "Instant Feedback"
  },{
    icon : random,
    description : "Randomized Questions"
  }],
  customClass : "optionBlue"
}]

const Category = ({ selectedCategory }: Props) => {
  return (
    <>
      <h2 className={style.heading}>{selectedCategory}</h2>
      <p></p>
      <div className={style.optionContainer}>

      {options.map((option) => 
        <div className={[style.option,style[option.customClass]].join(" ")}>
          <div className={style.optionHeader}>
            <div className={[style.iconContainer,style.iconContainerBlue].join(" ")}>
              <img src={option.icon} className={style.icon} />
            </div>
            <div>
              <p className={style.optionHeading}>{option.heading}</p>
              <p className={style.optionDescription}>
                {option.description}
              </p>
            </div>
          </div>

          <div className={style.optionMain}>
              {option.features.map((feature) => 
                <div className={style.feature}>
                  <img src={feature.icon} className={style.featureIcon} />
                  <p className={style.featureHeading}>{feature.description}</p>
                </div>
              )}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Category;
