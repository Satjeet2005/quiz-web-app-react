import useCategory from "../../hooks/useCategory";
import Card from "../card/Card";
import useCategoryDescription from "../../hooks/useCategoryDescription";
import style from "./Categories.module.css"

interface Props{
  handleClick : (id : number) => void;
}
const stripColor = [
  "#FF6B6B", // vibrant coral red
  "#4ECDC4", // soft teal
  "#FFD93D", // bright sunflower yellow
  "#5F0F40", // rich wine purple
  "#7400B8", // vivid violet
  "#3A86FF", // royal blue
  "#8338EC", // electric purple
  "#06D6A0", // mint green
  "#FF9F1C", // orange zest
  "#F15BB5", // bubblegum pink
  "#118AB2", // fresh blue
  "#CDB4DB", // pastel lavender
  "#8AC926", // apple green
  "#E36414", // amber
  "#1A759F"  // dark cyan blue
];


const Categories = ({handleClick} : Props) => {
  const { categories } = useCategory();
  const  {categoryDescription }  = useCategoryDescription()
  return (
    <>
        <h2 className={style.heading}>Explore <span className={style.highlight}>Categories</span></h2>
        <p className={style.subheading}>Pick a topic you love — test your knowledge or learn something new!</p>
        <div className={style.cardContainer}>
          {categories?.map((category, index) => (
              <Card
                  styled={{ backgroundColor: stripColor[index % stripColor.length] }}
                  name={category.name}
                  description={categoryDescription.find((description) => description.id === category.id)?.description || ""}
                  handleClick={() => handleClick(category.id)}
                  key={category.id}
              ></Card>
          ))}
      </div>
      </>
  );
};

export default Categories;
