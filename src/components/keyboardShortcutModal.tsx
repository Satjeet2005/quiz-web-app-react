import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { XIcon } from "@phosphor-icons/react/dist/ssr";

interface Props {
  handleCancel: () => void;
}

const KeyboardShortcutModal = ({ handleCancel }: Props) => {

  return (
    <>
      <div className="w-full h-full absolute bg-black/40 z-20" onMouseDown={handleCancel}></div>
      <div className="min-w-96 flex flex-col font-Inter absolute top-1/2 left-1/2 bg-white z-50 -translate-x-1/2 -translate-y-1/2 py-5 px-6 rounded-xl shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">Keyboard Shortcuts</h3>
          <XIcon
            className="cursor-pointer"
            size={18}
            onClick={() => handleCancel()}
          ></XIcon>
        </div>

        <div className="mt-5">
          <div className="w-full flex justify-between items-center mb-2">
            <p className="font-Inter text-base">Submit your quiz</p>
            {
              <div className="px-3 py-2 border-2 rounded-md text-base">
                Enter
              </div>
            }
          </div>

          <div className="w-full flex justify-between items-center mb-2">
            <p className="font-Inter text-base">Next & Previous</p>
            <div className="flex gap-2">
              <div className="px-2 py-2 border-2 rounded-md text-base">
                <CaretLeftIcon size={18} weight="bold" />
              </div>
              <div className="px-2 py-2 border-2 rounded-md text-base">
                <CaretRightIcon size={18} weight="bold" />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-2">
            <p className="font-Inter text-base">Select Options</p>
            <div className="flex gap-2">
              <div className="px-3 py-1 border-2 rounded-md text-base">1</div>
              <div className="px-3 py-1 border-2 rounded-md text-base">2</div>
              <div className="px-3 py-1 border-2 rounded-md text-base">3</div>
              <div className="px-3 py-1 border-2 rounded-md text-base">4</div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-2">
            <p className="font-Inter text-base">Unselect option</p>
            {<div className="px-3 py-2 border-2 rounded-md text-base">Esc</div>}
          </div>

          <div className="w-full flex justify-between items-center mb-2">
            <p className="font-Inter text-base">Mark & review</p>
            {<div className="px-3 py-2 border-2 rounded-md text-base">M</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyboardShortcutModal;
