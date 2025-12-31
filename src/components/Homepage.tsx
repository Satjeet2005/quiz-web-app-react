import Globe from "../assets/globe.svg";
import HomepageButton from "./HomepageButton";
import HomepageNavbar from "./HomepageNavbar";
import videoLaptop from "../assets/Untitled design.mp4";
import videoMobile from "../assets/2025-10-12, 12_45_13 p.m.-Supademo_Demo.mp4";

interface Props{
  handleClick: () => void;
}
const Homepage = ({handleClick}:Props) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center pb-20 md:pb-24 lg:pb-32"
      style={{
        backgroundImage:
          "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%",
      }}
    >
      <div className="w-full flex flex-col items-center">
        <HomepageNavbar handleClick={handleClick}></HomepageNavbar>
        <div className="w-full flex flex-col items-center mt-14">
          <div className="flex items-center gap-1 mb-2 mt-9">
            <img src={Globe} alt="globe" />
            <h3 className="font-Inter font-semibold  bg-gradient-to-r from-indigo-800 via-purple-700 to-violet-500 text-transparent bg-clip-text">
              Powered by Trivia API, packed with thousands of quizzes
            </h3>
          </div>
          <h1 className="font-Hando sm:text-5xl lg:text-7xl leading-[1.2] font-medium text-center md:max-w-5xl">
            Learn anything faster with topic-based AI quizzes.
          </h1>
          <HomepageButton handleClick={handleClick}></HomepageButton>
        </div>
      </div>

      <div className=" sm:w-auto h-auto mt-10 relative group mx-auto sm:mx-8 md:mx-24 lg:mx-44 max-w-[1000px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-xl blur opacity-60"></div>
        <div className="relative bg-white ring-1 ring-gray-900/5 leading-none flex items-center justify-between space-x-6 rounded-xl overflow-hidden ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={videoMobile}
              media="(max-width: 768px)"
              type="video/mp4"
            />
            <source
              src={videoLaptop}
              media="(min-width: 769px)"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
