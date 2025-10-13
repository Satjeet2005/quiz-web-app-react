import photo from "../../assets/sideimage.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import { lazy, Suspense } from "react";
import CardButtons from "../Buttons/CardButtons";
import type { Category, Type } from "../../App";
// import Customization from "../customization/Customization";
// const CategoriesComponent = lazy(() => import("../categories"));
import LearningOption from "../LearningOption/LearningOption";
import Categories from "../Categories/Categories";
// import MCQ from "../MCQ/MCQ";
// import MCQWorkspace from "../MCQWorkspace/MCQWorkspace";

interface Props {
  selectedCategory: Category | null;
  selectedType: Type | null;
  activeStep: number;
  selectedDifficulty: string | null;
  isValid: boolean;
  questionsCount: number;
  formValidation: (valid: boolean) => void;
  handleQuestionCountChange: (count: number) => void;
  handleTypeChange: (type: Type | null) => void;
  handleClick: (category: Category | null) => void;
  handleDifficultyChange: (type: string | null) => void;
  handleActiveStep: (step: number, op: string) => void;
}

const headings = [
  {
    heading: "Category selection",
    subheading: "Sei want tilect your favourite category & get started.",
  },
  {
    heading: "Learning Style",
    subheading: "Select your preffered learning style.",
  },
];

const Card = ({
  isValid,
  selectedDifficulty,
  selectedCategory,
  selectedType,
  questionsCount,
  activeStep,
  handleTypeChange,
  handleClick,
  handleDifficultyChange,
  formValidation,
  handleQuestionCountChange,
  handleActiveStep,
}: Props) => {
  return (
    <div className="w-full h-full relative bg-white box-border mt-4 md:w-[90%] md:h-fit md:shadow-lg  md:mx-auto md:my-auto md:rounded-2xl lg:h-[85%] lg:flex lg:flex-row lg:max-w-[1140px]">
      <CardButtons
        isValid={isValid}
        selectedDifficulty={selectedDifficulty}
        selectedType={selectedType}
        selectedCategory={selectedCategory}
        activeStep={activeStep}
        handleNext={handleActiveStep}
      ></CardButtons>
      <div className="lg:w-[500px] lg:h-full lg:rounded-l-2xl lg:relative">
        <div className="lg:absolute lg:bottom-4 lg:left-[30px]">
          {activeStep <= 2 && (
            <>
              <span className="hidden lg:block font-Inter font-medium">
                Step {activeStep}
              </span>
              <p className="hidden lg:block font-Hando text-2xl mt-3">
                {headings[activeStep - 1].heading}
              </p>
              <p className="hidden lg:block font-Inter text-gray-600 mt-1">
                {headings[activeStep - 1].subheading}
              </p>
              <ProgressBar activeStep={activeStep}></ProgressBar>
            </>
          )}
        </div>
        <img
          src={photo}
          alt="side-image"
          className="hidden lg:block object-cover h-full overflow-hidden rounded-l-2xl"
        />
      </div>
      {activeStep === 1 && (
        <Suspense fallback={null}>
          <Categories
            selectedCategory={selectedCategory}
            activeStep={activeStep}
            handleClick={handleClick}
          />
        </Suspense>
      )}
      {activeStep === 2 && (
        <LearningOption
          selectedCount={questionsCount}
          selectedDifficulty={selectedDifficulty}
          formValidation={formValidation}
          handleDifficultyChange={handleDifficultyChange}
          handleQuestionCountChange={handleQuestionCountChange}
          selectedCategory={selectedCategory}
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
          handleCategoryChange={(category) => handleClick(category)}
        ></LearningOption>
      )}
    </div>
  );
};

export default Card;
