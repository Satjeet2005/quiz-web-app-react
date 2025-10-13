import useCategory from "../../hooks/useCategory";
// import Card from "../card/Card";
import { BookOpen } from "@phosphor-icons/react/dist/icons/BookOpen";
import {
  Asclepius,
  Atom,
  CarProfile,
  CastleTurret,
  ChatsTeardrop,
  Desktop,
  DribbbleLogo,
  FilmSlate,
  GameController,
  Gavel,
  GlobeHemisphereEast,
  HourglassHigh,
  MagicWand,
  MaskHappy,
  MathOperations,
  Mountains,
  PaintBrush,
  PawPrint,
  Sparkle,
  Television,
  Waveform,
} from "@phosphor-icons/react/dist/ssr";
import { LightbulbFilament } from "@phosphor-icons/react/dist/ssr/LightbulbFilament";
import { useState } from "react";
import type { Category } from "../../App";
import search from "../../assets/magnifying-glass (1).svg";
import tick from "../../assets/tick-svgrepo-com.svg";
import useCategoryDescription from "../../hooks/useCategoryDescription";
import type { CategoriesProps } from "../../HTTP/use-category";
interface Props {
  selectedCategory: Category | null;
  activeStep: number;
  handleClick: (category: Category) => void;
}

const stripColor = [
  "#5A4AE3", // Bright Lavender
  "#E76F51", // Burnt Sienna
  "#009B77", // Emerald
  "#D90429", // Vibrant Red
  "#0077B6", // Strong Cerulean
  "#F7B801", // Rich Gold
  "#C71585", // Medium Violet Red
  "#4C9A2A", // Medium Leaf Green
  "#003566", // Deep Ocean Blue
  "#FF4500", // OrangeRed
  "#8B008B", // Dark Magenta
  "#2A9D8F", // Persian Green
  "#E63946", // Fiery Rose
  "#4169E1", // Deep Cornflower Blue
  "#FF9100", // Bright Amber
  "#6A0DAD", // Regal Purple
  "#16A085", // Modern Teal
  "#B22222", // Firebrick
  "#1E90FF", // Dodger Blue
  "#8A2BE2", // Blue Violet
  "#228B22", // Forest Green
  "#E85D04", // Deep Saffron
  "#FF1493", // Deep Pink
  "#00A7AD", // Vibrant Cyan
  "#4B0082", // Indigo
  "#008080", // Classic Teal
  "#D62AD0", // Bright Magenta
  "#C1121F", // Ruby Red
  "#00509D", // Royal Blue
  "#7209B7", // Vivid Violet
];

const icons = [
  <LightbulbFilament size={32} color="#ffffff" />,
  <BookOpen size={32} color="#ffffff" />,
  <FilmSlate size={32} color="#ffffff" />,
  <Waveform size={32} color="#ffffff" />,
  <MaskHappy size={32} color="#ffffff" />,
  <Television size={32} color="#ffffff" />,
  <GameController size={32} color="#ffffff" />,
  <CastleTurret size={32} color="#ffffff" />,
  <Mountains size={32} color="#ffffff" />,
  <Desktop size={32} color="#ffffff" />,
  <MathOperations size={32} color="#ffffff" />,
  <Asclepius size={32} color="#ffffff" />,
  <DribbbleLogo size={32} color="#ffffff" />,
  <GlobeHemisphereEast size={32} color="#ffffff" />,
  <HourglassHigh size={32} color="#ffffff" />,
  <Gavel size={32} color="#ffffff" />,
  <PaintBrush size={32} color="#ffffff" />,
  <Television size={32} color="#ffffff" />,
  <PawPrint size={32} color="#ffffff" />,
  <CarProfile size={32} color="#ffffff" />,
  <Atom size={32} color="#ffffff" />,
  <Sparkle size={32} color="#ffffff" />,
  <ChatsTeardrop size={32} color="#ffffff" />,
  <MagicWand size={32} color="#ffffff" />,
];

const Categories = ({ selectedCategory, handleClick }: Props) => {
  const { categories } = useCategory();
  const { categoryDescription } = useCategoryDescription();
  const [searchedItem, setSearchedItem] = useState<
    CategoriesProps["trivia_categories"] | undefined
  >();

  function handleSubmit(val: string) {
    if (val === "" || val === " ") {
      setSearchedItem(undefined);
    } else {
      interface TriviaCategory {
        id: number;
        name: string;
      }

      setSearchedItem(
        categories?.filter(
          (category: TriviaCategory): boolean =>
            category.name.toLowerCase().includes(val.toLowerCase())
        )
      );
    }
  }

  function renderCategories(list: CategoriesProps["trivia_categories"] | undefined) {
    return list?.map((category, index) => (
      <div
        className="flex items-center gap-4 mt-3 pb-3 pr-3 border-b-2"
        key={index}
      >
        <div
          style={{
            backgroundColor: stripColor[index % stripColor.length],
          }}
          className="w-12 h-12 flex items-center justify-center p-2 rounded-full"
        >
          {icons[index]}
        </div>
        <div className="h-full flex flex-col justify-between">
          <p className="text-md font-Inter text-sm">{category.name}</p>
          <p className="text-md font-Inter text-gray-600 font-normal text-sm mt-auto">
            {categoryDescription[index].description}
          </p>
        </div>

        {selectedCategory?.id === category.id ? (
          <button className="flex flex-row items-center gap-1 text-sm text-white bg-black border-black border-2 px-[10px] py-[6px] rounded-md ml-auto">
            <img src={tick} alt="tick" className="w-6 leading-none" />
            <p className="mt-px">Selected</p>
          </button>
        ) : (
          <button
            className="text-sm border-2 border-gray-200 px-4 py-[6px] rounded-md ml-auto hover:bg-gray-50 transition-[background-color] ease-linear"
            onClick={() =>
              handleClick({ id: category.id, name: category.name })
            }
          >
            Select
          </button>
        )}
      </div>
    ));
  }

  return (

    <>
      <div className="w-full flex flex-col box-border lg:pt-10 ">
        <div className="border-b-2 pb-6 px-5 pt-2 md:px-10 lg:pr-11 lg:pl-8">
          <p className="text-3xl font-Hando font-medium text-center md:text-left">
            Which Category Will You Choose Today?
          </p>
          <p className="text-md text-gray-600 font-normal font-Inter mt-3  text-center md:text-left">
            Your Perfect Match Awaits: Pick One Adventure!
          </p>
          <div className="flex items-center gap-2 border-2 border-gray-200 rounded-md px-2 mt-4">
            <img src={search} alt="search" className="w-5" />
            <form className="w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-[5px] mt-0.5 text-black placeholder:font-medium focus:border-0 outline-none"
                onChange={(e) => handleSubmit(e.target.value)}
              ></input>
            </form>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl flex-grow w-full">
          <div className="flex flex-col px-7 mt-5 pb-16  md:h-[435px] md:overflow-y-scroll md:px-10 md:mt-0 lg:pl-10 lg:pr-4 lg:h-full lg:w-full">
            {searchedItem === undefined
              ? renderCategories(categories)
              : renderCategories(searchedItem)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
