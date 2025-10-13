import { useState } from "react";
import type { Category } from "../../App";
import cross from "../../assets/cross-circle-svgrepo-com (1).svg";
import magnifyingGlass from "../../assets/magnifying-glass (2).svg";
import questionMark from "../../assets/question.svg";
import tick from "../../assets/result_tick2.svg";
import type { QuizData } from "../MCQWorkspace/MCQWorkspace";
import QuizSolution from "../QuizSolution/QuizSolution";
import Chart from "./Chart";

interface Props {
  questions: QuizData[] | undefined;
  category : Category;
  correct: number;
  wrong: number;
  unanswered: number;
  total: number;
  totalTimeTaken: string;
  shouldShowSolution : boolean;
  handleRetake: () => void;
  handleSolution: (s:boolean) => void;
}

  export const COLORS = ["oklch(87.1% 0.15 154.449)","oklch(80.8% 0.114 19.571)","oklch(90.5% 0.182 98.111)"];
  const TIP = ["Correct questions","Incorrect questions","Unanswered questions"];


const Result = ({
  questions,
  correct,
  wrong,
  unanswered,
  category,
  shouldShowSolution,
  handleSolution,
}: Props) => {
  questions = questions ?? [];
  const [questionId,setQuestionId] = useState("");
  const info = [
    {
      label: "Accuracy",
      content: `${correct / (correct + wrong + unanswered)}%`,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      textColor: "text-blue-500",
      icon: magnifyingGlass,
    },
    {
      label: "Correct",
      content: correct,
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      textColor: "text-emerald-500",
      icon: tick,
    },
    {
      label: "Incorrect",
      content: wrong,
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      textColor: "text-red-500",
      icon: cross,
    },
    {
      label: "Unanswered",
      content: unanswered,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-500",
      icon: questionMark,
    },
  ];

  function getColor(difficulty: string) {
    if (difficulty === "easy") {
      return " text-green-500";
    }

    if (difficulty === "medium") {
      return " text-yellow-500";
    }

    if (difficulty === "hard") {
      return " text-red-500";
    }
  }

  function handleClick(id:string){
    setQuestionId(id);
    handleSolution(true);
  }

  

  return (
    !shouldShowSolution ? 
    <div className="w-full max-w-3xl mx-auto p-4 flex flex-col font-Inter box-border">
      <div className="border-b pb-3">
        <h2 className="text-left text-3xl font-medium">{category.name}</h2>
      </div>

      <p className=" mt-2 text-lg font-medium">Overview</p>
      <div className="grid sm:grid-cols-2 gap-3 sm:justify-center mt-2">
        {info.map((i, index) => (
          <div
            className={[
              "flex flex-col justify-center items-center gap-1 border-2 rounded-lg p-2 sm:rounded-xl h-[100px]",
              i.bgColor,
              i.borderColor,
            ].join(" ")}
            key={index}
          >
            <div className="flex gap-0.5">
              <img src={i.icon} className="w-5" />
              <span
                className={[
                  "text-[28px] font-semibold leading-none",
                  i.textColor,
                ].join(" ")}
              >
                {i.content}
              </span>
            </div>
            <p className="text-gray-500 font-normal text-sm">{i.label}</p>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto flex flex-col justify-center items-center p-5 border border-gray-300 mt-8 rounded-lg gap-6">
        <Chart correct={correct} wrong={wrong} unanswered={unanswered}></Chart>
        <div className="grid grid-cols-2 gap-2 justify-items-center md:grid-cols-3">
          {
            TIP.map((tip,idx) =>  
          <div className={["flex justify-center items-center gap-2 text-center",idx === 2 ? "col-span-full md:col-auto" : ""].join(" ")} key={idx}>
            <span style={{backgroundColor:COLORS[idx]}} className="rounded w-2 h-2"></span>
            <span className="font-Inter text-sm">{tip}</span>
          </div>)
          }

        </div>
      </div>

      <div className="w-full mt-6 mx-auto">
        <table className="border-collapse border border-gray-300 w-full font-Inter">
          <thead>
            <tr>
              <th className="border border-gray-300 uppercase text-[13px] p-2 py-3 font-semibold">
                Question
              </th>
              <th className=" uppercase text-[13px] p-2 py-3 font-semibold">
                Difficulty
              </th>
              <th className=" uppercase text-[13px] p-2 py-3 font-semibold">
                avg time
              </th>
              <th className=" uppercase text-[13px] p-2 py-3 font-semibold">
                result
              </th>
            </tr>
          </thead>
          <tbody className="border-collapse text-center">
            {questions.map((q, index) => (
              <tr
                className=" border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors"
                key={index}
                onClick={() => handleClick(`q-${index+1}`)}
                id={`q-${index+1}`}
              >
                <td className="text-gray-500 border-r border-gray-300 py-4">
                  {index + 1}
                </td>
                <td>
                  <span
                    className={[
                      "capitalize rounded font-medium",
                      getColor(q.difficulty),
                    ].join(" ")}
                  >
                    {q.difficulty}
                  </span>
                </td>
                <td className="text-gray-500 py-4">{q.time}</td>
                <td className="py-4">
                  <div className={"flex w-fit mx-auto p-1 rounded-full"}>
                    <img
                      src={
                        q.selectedOption !== null
                          ? q.isCorrect === true
                            ? tick
                            : cross
                          : questionMark
                      }
                      className="w-5"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    :
    <QuizSolution questionId={questionId} questions={questions}></QuizSolution>
          

  );
};

export default Result;
