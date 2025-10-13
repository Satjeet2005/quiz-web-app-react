// import tick from "../../assets/tick-svgrepo-com (1).svg";
// import cross from "../../assets/cross-svgrepo-com.svg";
import Badge from "../Badge/Badge";
import { useEffect } from "react";

interface Props {
  questionNumber: number;
  question: string;
  questionDifficult: string;
  selectedOption: string | null;
  correct: string;
  timeSpent: number;
  isVisited: boolean;
  options: string[];
  setIsVisited: () => void;
  setOptionSelected: (option: string) => void;
  setTimeSpent: (time: number) => void;
}

const MCQ = ({
  timeSpent,
  selectedOption,
  questionNumber,
  question,
  // correct,
  options,
  questionDifficult,
  // isVisited,
  setIsVisited,
  setOptionSelected,
  setTimeSpent,
}: Props) => {
  const optionCount = [1, 2, 3, 4];

  const handleAnswer = (option: string) => {
    setOptionSelected(option);
  };

  useEffect(() => {
    let id = setInterval(() => {
      timeSpent += 1;
    }, 1000);

    return () => {
      clearInterval(id);
      setTimeSpent(timeSpent);
    };
  }, [question]);

  useEffect(() => {
    {
      setIsVisited();
    }
  }, [question]);

  return (
    <>
      <div
        className=" flex flex-col justify-center rounded-2xl box-border pt-7 mx-4 font-Inter md:max-w-3xl "
        id="mcq-card"
      >
        <div className="flex justify-between items-center">
          <p className="text-xs m-0">Question {questionNumber + 1}</p>
          <Badge difficulty={questionDifficult}></Badge>
        </div>
        <p
          className="text-[22px] font-[450] my-10"
          dangerouslySetInnerHTML={{ __html: question }}
        ></p>
        <div>
          <p className="text-xs m-0 text-gray-500">Choose correct answer</p>
          <div className="grid md:grid-rows-2 md:grid-cols-2 gap-3 mt-3">
            {options.map((option, index) => (
              <div
                className={[
                  "p-0.5 border rounded-lg cursor-pointer",
                  selectedOption === option
                    ? "bg-blue-400 bg-gradient-to-r from-indigo-800 via-purple-700 to-violet-500 hover:from-indigo-900 hover:via-purple-800 hover:to-violet-600"
                    : "border-gray-300",
                ].join(" ")}
                onClick={() => handleAnswer(option)}
                key={index}
              >
                <button
                  className={[
                    "flex bg-white rounded-[5px] items-center gap-3 w-full h-full px-3 py-2 hover:bg-gray-50 transition-all ease-linear",
                  ].join(" ")}
                >
                  <div
                    className={
                      "hidden md:flex justify-center items-center w-[30px] h-[30px] bg-gray-100 rounded-md text-xs font-medium text-gray-500"
                    }
                  >
                    {optionCount[index]}
                  </div>
                  <p
                    className="text-[13px] md:text-sm font-[480] capitalize"
                    dangerouslySetInnerHTML={{ __html: option }}
                  ></p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MCQ;
