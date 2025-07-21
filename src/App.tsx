import { useState } from "react";
import "./App.css";
import Categories from "./components/categories/Categories";
import Category from "./components/individualCategory/Category";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();
  const [selectedCategoryDescription,setSelectedCategoryDescription] = useState< string | null >(null);

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
  }

  return (
    <>
      {!selectedCategory ? (<Categories handleClick={(category) => handleCategoryChange(category)}></Categories>) : <Category selectedCategory={selectedCategory}></Category>}
    </>
  );
};

export default App;
