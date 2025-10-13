import nextButton from "../../assets/arrow-right.svg";
import backButton from "../../assets/arrow-left.svg";
import clear from "../../assets/x (1).svg";
import mark from "../../assets/bookmark-simple.svg";
import submit from "../../assets/paper-plane-right.svg";

interface Props {
  handleNext: () => void;
  handlePrevious: () => void;
  handleOptionSelection: (clear: null) => void;
  handleReview: (review: boolean) => void;
  handleSubmit: () => void;
}

const MCQNextButton = ({
  handlePrevious,
  handleNext,
  handleOptionSelection,
  handleReview,
  handleSubmit
}: Props) => {

  

  return (
    <div className="flex flex-col gap-3 w-full max-w-[800px] mt-auto mx-auto border-t border-gray-300 p-3 font-Inter">
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-1 gap-3">
        <button
          className={
            "w-full flex flex-row justify-center  items-center mr-auto gap-2 box-border text-sm text-black bg-white border-2 border-gray-200 px-3 py-2 rounded-md  transition-[background-color] ease-linear hover:bg-gray-100"
          }
          onClick={() => handlePrevious()}
        >
          <img src={backButton} className="w-5" />
          <p>Previous Step</p>
        </button>
        <button
          className={
            "w-full flex flex-row justify-center  items-center mr-auto gap-2 box-border text-sm text-black bg-white border-2 border-gray-200 px-3 py-2 rounded-md  transition-[background-color] ease-linear hover:bg-gray-100"
          }
          onClick={() => handleOptionSelection(null)}
        >
          <img src={clear} className="w-5" />
          <p>Clear</p>
        </button>

        <button
          className={
            "w-full flex flex-row justify-center  items-center mr-auto gap-2 box-border text-sm text-black bg-white border-2 border-gray-200 px-3 py-2 rounded-md  transition-[background-color] ease-linear hover:bg-gray-100 col-span-2 md:col-span-1"
          }
          onClick={() => handleReview(true)}
        >
          <img src={mark} className="w-5" />
          <p>Mark & Next</p>
        </button>
      </div>

      <div className="flex gap-3">
        <button className="w-full flex flex-row justify-center items-center ml-auto gap-2 box-border text-sm text-white px-3 py-[10px] rounded-md  transition-all ease-linear disabled:opacity-30 disabled:cursor-not-allowed bg-black hover:opacity-80" onClick={() => handleNext()}>
          <p>Save & Next</p>
          <img src={nextButton} className="w-5" />
        </button>
        <button className="w-full flex flex-row justify-center items-center ml-auto gap-2 box-border text-sm text-white px-3 py-[10px] rounded-md  transition-all ease-linear disabled:opacity-30 disabled:cursor-not-allowed bg-black hover:opacity-80" onClick={() => handleSubmit()}>
          <p>Submit</p>
          <img src={submit} className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default MCQNextButton;
