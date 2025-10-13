import mcq from "../../assets/list-checks (1).svg";
// import style from "../individualCategory/Category.module.css";
import cards from "../../assets/stack.svg";
// import bulb from "../../assets/lightbulb.svg";
// import repeat from "../../assets/repeat.svg";
// import mcq2 from "../../assets/target-04-svgrepo-com.svg";
// import timer from "../../assets/timer.svg";
// import instant from "../../assets/lightning.svg";
// import random from "../../assets/shuffle.svg";
// import tick from "../../assets/categories/tick-svgrepo-com (4).svg";
// import SelectedTag from "../selectedTag/SelectedTag";
// import trend from "../../assets/trend-up.svg";
// import clock from "../../assets/clock.svg";
// import brain from "../../assets/brain (1).svg";
// import flash from "../../assets/lightning (1).svg";
// import medal from "../../assets/medal.svg";
// import user from "../../assets/users.svg";
// import featureTick from "../../assets/result_tick2.svg";
import cross from "../../assets/x.svg";
import type { Category, Type } from "../../App";
// import Customization from "../customization/Customization";
import SelectionCard from "../Card/SelectionCard";

interface Props {
  selectedCategory: Category | null;
  selectedType: Type | null;
  selectedDifficulty: string | null;
  selectedCount: number;
  formValidation: (valid: boolean) => void;
  handleQuestionCountChange: (count: number) => void;
  handleDifficultyChange: (label: string | null) => void;
  handleCategoryChange: (category: Category | null) => void;
  handleTypeChange: (type: Type | null) => void;
}

const options = [
  {
    id: 1,
    heading: "Flashcards",
    fullName: "Flashcards",
    description: "Interactive card-based learning",
    detailedDescription:
      "Learn at your own pace with interactive card flips. Perfect for memorizing facts and reinforcing knowledge through repetition.",
    icon: cards,
    features: "Self-paced",
    infoSet: [
      "Learn at your own speed.",
      "Flip and test your memory.",
      "Choose topics and number of cards.",
    ],
    customClass: "optionGreen",
  },
  {
    id: 2,
    heading: "MCQs",
    fullName: "Multiple Choice Questions",
    description: "Timed multiple-choice challenges",
    detailedDescription:
      "Test yourself with timed multiple-choice challenges. Get instant feedback, track scores, and sharpen your recall.",
    icon: mcq,
    features: "Timed",
    infoSet: [
      "Beat the clock.",
      "Know what's right/wrong immediately.",
      "See your performance stats.",
    ],
    customClass: "optionBlue",
  },
];

const LearningOption = ({
  selectedCategory,
  selectedType,
  selectedCount,
  handleTypeChange,
  handleCategoryChange,
  formValidation,
  handleDifficultyChange,
  handleQuestionCountChange,
  selectedDifficulty,
}: Props) => {
  return (
    <div className="w-full flex flex-col box-border pb-[90px] lg:pt-10">
      <div className=" flex flex-col flex-wrap border-b-2 pb-4 px-5 pt-2 md:px-10 lg:pr-11 lg:pl-8">
        <p className="text-3xl font-Hando font-medium text-center md:text-left">
          Choose Your Learning Path
        </p>
        <p className="text-md text-gray-600 font-normal font-Inter mt-1 mb-6 text-center md:text-left">
          Learn at your pace or challenge yourself — the choice is yours.
        </p>
        <div className="flex flex-row flex-wrap gap-4 mx-auto md:mx-0">
          <div className="flex items-center gap-1 md:mx-0 bg-green-100 text-green-700 border border-green-600 w-fit font-Inter px-3 py-2 leading-none rounded-full">
            <span className="text-sm">{selectedCategory?.name}</span>
            <img
              src={cross}
              className="w-5 cursor-pointer"
              onClick={() => handleCategoryChange(null)}
            ></img>
          </div>

          {selectedType && (
            <div className="flex items-center gap-1  md:mx-0 bg-green-100 text-green-700 border border-green-600 w-fit font-Inter px-3 py-2 leading-none rounded-full">
              <span className="text-sm">{selectedType?.name}</span>
              <img
                src={cross}
                className="w-5 cursor-pointer"
                onClick={() => handleTypeChange(null)}
              ></img>
            </div>
          )}

          {selectedDifficulty && (
            <div className="flex items-center gap-1 md:mx-0 bg-green-100 text-green-700 border border-green-600 w-fit font-Inter px-3 py-2 leading-none rounded-full">
              <span className="text-sm capitalize">{selectedDifficulty}</span>
              <img
                src={cross}
                className="w-5 cursor-pointer"
                onClick={() => handleDifficultyChange(null)}
              ></img>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl h-full m-5 box-border">
        {/* <p className="font-Inter leading-none font-medium">Step 1</p> */}
        <p className="font-Inter font-medium">Select Learning Method</p>
        <div className="grid justify-items-center gap-x-[20px] gap-y-[20px] mt-[10px] md:grid-cols-2 lg:items-center">
          {options.map((option) => (
            <div
              className={[
                "rounded-2xl border-2 shadow-md cursor-pointer w-full box-border pl-[18px] pr-[18px] py-[18px] bg-white relative transition-all",
                selectedType?.id === option.id ? "border-black/40" : "",
              ].join(" ")}
              key={option.heading}
              onClick={() =>
                handleTypeChange({
                  id: option.id,
                  name: option.heading,
                  fullName: option.fullName,
                })
              }
            >
              <div className="grid grid-cols-[0.1fr_auto] gap-x-[15px]">
                {/*border-b border-b-[#d6ccc2]*/}
                <div
                  className={[
                    " w-[60px] h-[60px] flex flex-col items-center justify-center rounded-[15px]",
                    option.id === 1 ? "bg-[#0e9f6e]" : "bg-[#3f83f8]",
                  ].join(" ")}
                >
                  <img src={option.icon} className="w-[35px]" />
                </div>
                <div>
                  <p className="m-[0] text-[22px] font-Hando">
                    {option.heading}
                  </p>
                  <p className="ml-[0] mr-[0] text-[13.5px] font-Inter">
                    {option.description}
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-2">
                {option.features.map((feature, index) => (
                  <span
                  style={{ backgroundColor: tagColors[index] }}
                  className="flex justify-center items-center leading-none px-2 py-1 rounded-full text-[13px] bg-gray-200 font-Inter"
                  >
                    {feature}
                  </span>
                ))}
              </div> */}
              {/* <p className="font-Inter mb-4 text-md">{option.detailedDescription}</p> */}

              {/* <p className="mt-4 font-Inter font-medium">Features:</p> */}
              {/* <div className="flex flex-col gap-2 mt-1">
                {option.infoSet.map((info,index) => (
                  <div className="w-full flex flex-row items-center gap-2" key={index}>
                    <img src={featureTick} className="w-4" />
                    <p className="text-sm font-Inter">{info}</p>
                  </div>
                ))}
              </div> */}

              {/* {selectedType === option.id ? (
                <button className="w-full flex flex-row items-center justify-center mt-6 gap-1 text-sm text-white bg-black border-black border-2 px-[10px] py-[6px] rounded-md ml-auto">
                  <img src={tick} alt="tick" className="w-6 leading-none" />
                  <p className="mt-px">Selected</p>
                </button>
              ) : (
                <button
                  className=" w-full text-sm border-2 border-gray-200 mt-6 px-4 py-[6px] rounded-md ml-auto hover:bg-gray-50 transition-[background-color] ease-linear"
                  onClick={() => handleTypeChange(option.id)}
                >
                  Select
                </button>
              )} */}
            </div>
          ))}
        </div>
        {/* <p className="font-Inter leading-none mt-6 font-medium">Step 2</p> */}
        <SelectionCard
          selectedCount={selectedCount}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          selectedType={selectedType}
          handleDifficultyChange={handleDifficultyChange}
          handleQuestionCountChange={handleQuestionCountChange}
          formValidation={formValidation}
          handleTypeChange={handleTypeChange}
        ></SelectionCard>
      </div>
    </div>
  );
};

export default LearningOption;
