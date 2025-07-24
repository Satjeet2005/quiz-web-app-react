import style from "./Category.module.css";
import cards from "../../assets/cards-white.svg";
import brain from "../../assets/brain.svg"
import bulb from "../../assets/lightbulb.svg"
import repeat from "../../assets/repeat.svg"
import mcq from "../../assets/target-04-svgrepo-com.svg"
import timer from "../../assets/timer.svg"
import instant from "../../assets/lightning.svg"
import random from "../../assets/shuffle.svg"
import SelectedTag from "../selectedTag/SelectedTag";
import SelectionCard from "../card/SelectionCard";
import CardSelectionIndicator from "../cardSelectionIndicator/CardSelectionIndicator";

interface Props {
  selectedCategory: number | null;
  selectedType : number | null;
  selectedDifficulty : number;
  handleDifficultyChange : (id : number) => void;
  handleTypeChange : (id : number) => void;
  formValidation : () => void;
}

const options = [{
  id : 1,
  heading : "Flashcards",
  description : "Interactive card-based learning",
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
  id : 2,
  heading : "MCQs",
  description : "Timed multiple-choice challenges",
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

const Category = ({ selectedCategory,selectedType,selectedDifficulty,handleDifficultyChange,handleTypeChange,formValidation }: Props) => {
  return (
    <>
      <h2 className={style.heading}>Choose Your Learning Path</h2>
      <p className={style.subheading}>Select your preferred study method and customize your learning experience</p>
      <div className={style.indicator}><CardSelectionIndicator></CardSelectionIndicator></div>
      <div className={style.optionContainer}>

      {options.map((option) => 
        <div className={[style.option,style[option.customClass],selectedType === option.id ? selectedType === 1 ? style.optionGreenSelected : style.optionBlueSelected : ""].join(" ")} key={option.heading} onClick={() => handleTypeChange(option.id)}>
          {selectedType === option.id &&  <SelectedTag optionId={option.id}></SelectedTag>}
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
                <div className={style.feature} key={feature.description}>
                  <img src={feature.icon} className={style.featureIcon} />
                  <p className={style.featureHeading}>{feature.description}</p>
                </div>
              )}
          </div>
        </div>
      )}
      </div>

      <SelectionCard handleDifficultyChange={id => handleDifficultyChange(id)} selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedType={selectedType} handleTypeChange={id => handleTypeChange(id)} formValidation={formValidation}></SelectionCard>
    </>
  );
};

export default Category;
