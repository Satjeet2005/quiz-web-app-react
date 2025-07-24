import { useState } from "react";
import "./App.css";
import Categories from "./components/categories/Categories";
import Category from "./components/individualCategory/Category";
import Flashcard from "./components/flashcard/Flashcard";
interface Category{
  id : number,
  name : string
}

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  // const [selectedCategoryDescription,setSelectedCategoryDescription] = useState< string | null >(null);
  const [selectedType,setSelectedType] = useState<number | null>(null)
  const [selectedDifficulty,setSelectedDifficulty] = useState<number>(1);
  const [isValid,setIsValid] = useState(false);

  function handleCategoryChange(id: number) {
    setSelectedCategory(id);
  }

  function handleTypeChange(id : number){
    setSelectedType(id);
  }

  function handleDifficultyChange(id : number){
    setSelectedDifficulty(id);
  }

  function formValidation(){
    setIsValid(true)
    console.log(isValid);
  }
  return (
    <>
      {!selectedCategory && (<Categories handleClick={(id) => handleCategoryChange(id)}></Categories>)}
      {(selectedCategory && !isValid) && <Category selectedCategory={selectedCategory} handleTypeChange={(type) => handleTypeChange(type)} selectedType={selectedType} selectedDifficulty={selectedDifficulty} handleDifficultyChange={handleDifficultyChange} formValidation={formValidation}></Category>}
      {isValid && <Flashcard></Flashcard>}
    </>
  );
};

export default App;
