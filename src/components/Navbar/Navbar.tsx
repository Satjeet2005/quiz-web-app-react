import type { Type } from "../../App";
import cross from "../../assets/x (1).svg"
import sidebar from "../../assets/sidebar-simple.svg"
import back from "../../assets/arrow-left.svg"
import { QuestionMarkIcon } from "@phosphor-icons/react";

interface Props {
  selectedType: Type | null;
  totalCount : number;
  currentCount : number;
  isResult : boolean;
  isSolution: boolean;
  handleReturnFromSolution: () => void;
  setSidebarVisibility: () => void;
  handleReturnFromType: () => void;
  handleKeyboardShortcut: () => void;
}

const Navbar = ({isSolution,isResult, totalCount,currentCount,selectedType,handleReturnFromType,handleReturnFromSolution,setSidebarVisibility,handleKeyboardShortcut }: Props) => {

    function progressWidth(){
        return (currentCount/totalCount)*100;
    }
  return (
    <div className="flex flex-col border-b-2">
      <div className="w-full px-4 py-2 flex justify-center items-center font-Inter">
        {!isResult && <img src={cross} className="w-5 mr-auto cursor-pointer" onClick={handleReturnFromType}></img>}
        {isResult && <img src={back} className="w-5 mr-auto cursor-pointer" onClick={() => {if(!isSolution) handleReturnFromType(); else handleReturnFromSolution()}}/>}
        {selectedType && <p className="text-lg font-medium text-center w-full">{selectedType.fullName}</p>}
        {!isResult && <QuestionMarkIcon size={18} weight="bold" className="mr-3 cursor-pointer" onClick={handleKeyboardShortcut}/>}
        {!isResult && <img src={sidebar} className="w-5 mr-auto cursor-pointer" onClick={() => setSidebarVisibility()}></img>}

      </div>
      {!isResult && <div className="w-full flex flex-row">
        <div style={{width:`${progressWidth()}%`}} className={"h-1 bg-blue-400 bg-gradient-to-r from-indigo-800 via-purple-700 to-violet-500 hover:from-indigo-900 hover:via-purple-800 hover:to-violet-600 transition-all ease-in-out"}></div>
        <div style={{width: `${100 - progressWidth()}%`}} className="h-1 bg-gray-200 transition-all ease-in-out"></div>
      </div>}
    </div>
  );
};

export default Navbar;
