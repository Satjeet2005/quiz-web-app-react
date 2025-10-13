interface Props {
  activeStep: number;
}
const ProgressBar = ({ activeStep }: Props) => {
  const totalStep = 2;
  function calculateWidth(){
    
    return (activeStep/totalStep)*100;
  }

  return (
    <div className="w-full flex justify-center mb-6 px-10 mt-10 md:justify-between lg:w-[280px] lg:justify-center lg:px-0 lg:mt-8 lg:items-end">
      <div
      style={{width:`${calculateWidth()}%`}}
        className={[
          " h-[6px] rounded-l-full md:w-full bg-black", calculateWidth() >= 100 && "rounded-r-full"
        ].join(" ")}
      ></div>

      <div
      style={{width:`${100-calculateWidth()}%`}}
        className={[
          "h-[6px] rounded-r-full md:w-full  bg-gray-200",
        ].join(" ")}
      ></div>
    </div>
  );
};

export default ProgressBar;
