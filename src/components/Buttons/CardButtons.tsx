import nextButton from "../../assets/arrow-right.svg";
import backButton from "../../assets/arrow-left.svg";
import type { Category, Type } from "../../App";

interface Props {
  isValid: boolean;
  selectedCategory: Category | null;
  selectedType: Type | null;
  selectedDifficulty: string | null;
  activeStep: number;
  handleNext: (step: number, op: string) => void;
}
const CardButtons = ({
  isValid,
  selectedDifficulty,
  selectedType,
  selectedCategory,
  activeStep,
  handleNext,
}: Props) => {
  function checkDisabled() {
    if (activeStep === 1) {
      return !selectedCategory ? true : false;
    }

    if (activeStep === 2) {
      return !selectedType || !selectedDifficulty || !isValid ? true : false;
    }
  }

  return (
    <div className="w-full flex  box-border py-3 px-4 bg-white/50 backdrop-blur-sm border-t border-gray-200 fixed bottom-0 md:absolute md:rounded-b-2xl md:py-4 md:right-0">
      {activeStep > 1 && (
        <button
          className="flex flex-row items-center gap-2 box-border text-sm text-black bg-white border-2 border-gray-200 px-3 py-2 rounded-md  transition-[background-color] ease-linear hover:bg-gray-100"
          onClick={() => handleNext(activeStep - 1, "down")}
        >
          <img src={backButton} alt="back" className="w-5" />
          <p>Previous Step</p>
        </button>
      )}

      <button
        className={[
          "flex flex-row items-center ml-auto gap-2 box-border text-sm text-white px-3 py-2 rounded-md  transition-all ease-linear disabled:opacity-30 disabled:cursor-not-allowed",
          activeStep === 1
            ? "bg-black hover:opacity-80"
            : "bg-gradient-to-r from-indigo-800 via-purple-700 to-violet-500 hover:from-indigo-900 hover:via-purple-800 hover:to-violet-600 transition-all",
        ].join(" ")}
        disabled={checkDisabled()}
        onClick={() => handleNext(activeStep + 1, "up")}
      >
        <p>Next Step</p>
        <img src={nextButton} alt="next" className="w-5" />
      </button>
    </div>
  );
};

export default CardButtons;
