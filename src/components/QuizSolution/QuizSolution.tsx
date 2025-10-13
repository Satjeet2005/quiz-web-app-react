import { useEffect } from "react";
import type { QuizData } from "../MCQWorkspace/MCQWorkspace";
import up from "../../assets/arrow-up.svg"
interface Props {
  questionId : string;
  questions: QuizData[] | undefined;
}

const QuizSolution = ({questionId, questions }: Props) => {
  questions = questions ?? [];

  useEffect(() => {
    scroll(questionId);
  },[])

  function getOptionColor(selectedOption:string | null,option:string,correctOption:string){

    if(selectedOption === option){
      if(selectedOption === correctOption){
        return "border-green-400";
      }
      else{
        return "border-red-400";
      }
    }

    else{
      if(option === correctOption){
        return "border-green-400";
      }
      else if(selectedOption === option){
        return "border-red-400";
      }
    }
  }

  function scroll(id:string){
        document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 flex flex-col font-Inter box-border relative">
      <div className="w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full shadow-lg bg-blue-50 cursor-pointer fixed right-5 bottom-5 md:right-10 md:bottom-10" onClick={() => scroll('q-1')}>
        <img src={up} className="w-5"/>
      </div>
      <div className="border-b pb-3">
        <h2 className="text-left text-3xl font-medium">Solutions</h2>
      </div>
      <div className="">
        {questions.map((q, index) => (
          <div className="mt-8" key={index} id={`q-${index+1}`}>
            <div className="pb-1 border-b">Question {index+1}</div>
            <p className="mt-4 font-medium" dangerouslySetInnerHTML={{__html:q.question}}></p>
            <div>
            {q.options.map((option,index) => (
                <button
                  className={[
                    "flex bg-white border mt-3 rounded-[5px] items-center gap-3 w-full h-full px-3 py-2 hover:bg-gray-50 transition-all ease-linear",getOptionColor(q.selectedOption,option,q.correct_answer)
                  ].join(" ")}
                  key={index}
                >
                  <div
                    className={
                      "hidden md:flex justify-center items-center w-[30px] h-[30px] bg-gray-100 rounded-md text-xs font-medium text-gray-500"
                    }
                  >
                    {index + 1}
                  </div>
                  <p
                    className="text-[13px] md:text-sm font-[480] capitalize"
                    dangerouslySetInnerHTML={{ __html: option }}
                  ></p>
                </button>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSolution;
