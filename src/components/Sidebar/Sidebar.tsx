import cross from "../../assets/x (1).svg";
import type { SideBarData } from "../MCQWorkspace/MCQWorkspace";

interface Props {
  count: number;
  questions: SideBarData[];
  setSideVisibility: () => void;
  handleCancel: () => void;
  getQuestion: (questionNumber: number) => void;
}

const Sidebar = ({
  questions,
  getQuestion,
  setSideVisibility,
  handleCancel,
}: Props) => {
  const info = [
    {
      content: "Answered",
      color: "bg-green-200",
    },
    {
      content: "Not answered",
      color: "bg-red-200",
    },
    {
      content: "Not visited",
      color: "bg-gray-200",
    },
    {
      content: "Review",
      color: "bg-amber-200",
    },
  ];

  function getBlockColor(q: Props["questions"][number]) {
    if (!q.isVisited) {
      return "bg-gray-200";
    }

    if (q.review) {
      return "bg-amber-200";
    }
    if (q.selectedOption) {
      return "bg-green-200";
    } else {
      return "bg-red-200";
    }
  }

  return (
    <>
      <div
        className="w-full h-full absolute bg-black/60 z-10 transition-all"
        onMouseDown={handleCancel}
      ></div>
      <div className="w-[300px] h-full flex flex-col items-center bg-white absolute z-20 right-0 px-2 pt-3 overflow-y-scroll">
        <img
          src={cross}
          className="w-5 mr-auto ml-2 cursor-pointer"
          onClick={() => setSideVisibility()}
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-2 pb-4 mt-6 border-b border-gray-200">
          {info.map((i, idx) => (
            <div
              className="flex items-center gap-3 font-Inter font-medium"
              key={idx}
            >
              <div
                className={[
                  "w-8 h-8 flex justify-center items-center text-sm rounded-md",
                  i.color,
                ].join(" ")}
              >
                0
              </div>
              <span className="text-xs">{i.content}</span>
            </div>
          ))}
        </div>
        <div className=" h-fit mt-8 grid grid-cols-4 gap-4">
          {questions.map((q, idx) => (
            <div
              className={[
                "w-12 h-12 flex justify-center font-Inter rounded-md items-center cursor-pointer",
                getBlockColor(q),
              ].join(" ")}
              key={idx}
              onClick={() => getQuestion(idx)}
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
