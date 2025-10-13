import trophy from "../../assets/trophy-svgrepo-com.svg"
const CompletedBadge = () => {
  return (
    <span className="flex items-center bg-white px-[10px] py-[6px] w-fit rounded-full shadow-md gap-1 mx-auto mt-10">
        <img src={trophy} alt="trophy" className="w-5"/>
        <span className="text-[13px] text-gray-700">Quiz Completed</span>
    </span>
  )
}

export default CompletedBadge