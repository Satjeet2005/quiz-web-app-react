
interface Props{
  handleClick: () => void;
}
const HomepageButton = ({handleClick}:Props) => {
  return (
    <button className="mt-6 px-14 py-3.5 border-2 text-white text-lg font-Inter font-medium rounded-full bg-gradient-to-r from-indigo-800 via-purple-700 to-violet-500 hover:from-indigo-900 hover:via-purple-800 hover:to-violet-600 transition-all duration-300 linear hover:shadow-[0_10px_50px_rgba(126,_34,_206,_0.7)]" onClick={handleClick}>
        Start Studying Faster
    </button>                                                            //126 34 206
  )
}

export default HomepageButton