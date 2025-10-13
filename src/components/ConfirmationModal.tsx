import { CheckIcon } from "@phosphor-icons/react";
import { WarningIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

interface Props {
  handleSubmit: () => void;
  handleCancel: () => void;
  text: string;
  buttonText: string
}

const ConfirmationModal = ({ text,buttonText,handleSubmit,handleCancel }: Props) => {

  return  (
    <>
      <div className="w-full h-full absolute bg-black/40 z-20" onMouseDown={handleCancel}></div>
      <div className="min-w-72 flex flex-col items-center font-Inter absolute top-1/2 left-1/2 bg-white z-50 -translate-x-1/2 -translate-y-1/2 py-5 px-6 rounded-xl shadow-xl">
        <XIcon
          className="absolute right-4 top-4 cursor-pointer"
          size={20}
          onClick={() => handleCancel()}
        ></XIcon>
        <div className="bg-red-100 p-2 rounded box-border">
          <WarningIcon size={28} color="#dc2626"></WarningIcon>
        </div>
        <div className="text-center mt-4 ">
          <h3 className="text-2xl font-medium">Are you Sure?</h3>
          <p className="text-gray-500">
            {text}
          </p>
        </div>
        <div className="w-full grid grid-rows-2 gap-3 mt-6 md:grid-cols-2 md:grid-rows-none">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md border-2 border-gray-200 transition-[background-color] ease-linear hover:bg-gray-100" onClick={handleCancel}>
            <XIcon size={20}></XIcon>
            <p className="text-sm">Cancel</p>
          </button>
          <button className="w-full flex flex-row justify-center items-center ml-auto gap-2 box-border text-sm text-white px-3 py-[10px] rounded-md  transition-all ease-linear disabled:opacity-30 disabled:cursor-not-allowed bg-black hover:opacity-80" onClick={handleSubmit}>
            <CheckIcon size={20}></CheckIcon>
            <p>{buttonText}</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
