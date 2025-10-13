import logo from "../assets/output-onlinepngtools.png";

interface Props{
  handleClick: () => void;
}
const HomepageNavbar = ({handleClick}:Props) => {
  return (
    <>
      <div className="w-full relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        <div className="w-full relative px-7 py-4 bg-white ring-1 ring-gray-900/5 leading-none flex items-center justify-between space-x-6">
              <img
                src={logo}
                alt="logo"
                width={160}
                height={"auto"}
                className="object-contain"
              />

              <button className="px-6 py-3 border-2 text-white text-sm font-Inter font-medium rounded-full bg-gradient-to-r from-indigo-800 via-purple-700 to-violet-500 hover:from-indigo-900 hover:via-purple-800 hover:to-violet-600 transition-all duration-300 linear hover:shadow-[0px_0px_40px_0px_rgba(126,_34,_206,_0.7)]" onClick={handleClick}>
                Quick start
              </button>
            
        </div>
      </div>
    </>
  );
};

export default HomepageNavbar;
