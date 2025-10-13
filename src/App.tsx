import { useState } from "react";
import "./App.css";
// import Category from "./components/individualCategory/Category";
import MCQWorkspace from "./components/MCQWorkspace/MCQWorkspace";
import Card from "./components/Card/Card";
import Homepage from "./components/Homepage";
export interface Category {
  id: number;
  name: string;
}

export interface Type {
  id: number;
  name: string;
  fullName: string;
}

const App = () => {
  const [activeStep, setActiveStep] = useState(1); //1
  const [isAppStarted,setIsAppStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  ); //null {id:9,name:"General knowledge"}
  const [selectedType, setSelectedType] = useState<Type | null>(null); //null  {id:1,name:"MCQ",fullName:"Multiple Choice Questions"}
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    "any"
  );
  const [count, setCount] = useState(10);
  const [isValid, setIsValid] = useState(false); //false
  const [shouldShowQuestion, setShouldShowQuestion] = useState(false); //false

  function handleCategoryChange(category: Category | null) {
    setSelectedCategory(category);
    setActiveStep(1);
  }

  function handleTypeChange(type: Type | null) {
    setSelectedType(type);
  }

  function handleDifficultyChange(label: string | null) {
    setSelectedDifficulty(label);
  }

  function formValidation(valid: boolean) {
    setIsValid(valid);
  }

  function handleQuestionCountChange(count: number) {
    setCount(count);
  }

  function handleReturnFromType() {
    setShouldShowQuestion(false);
    setSelectedType(null);
    setCount(0);
    setIsValid(false);
    setActiveStep(1);
  }

  function handleActiveStep(step: number, op: string) {
    if (op === "up" && activeStep === 1) {
      selectedCategory && setActiveStep(step);
    }
    if (op === "up" && activeStep === 2) {
      selectedDifficulty && selectedType && isValid && setActiveStep(step);
      setShouldShowQuestion(true);
    }
    if (op === "down" && activeStep === 2) {
      setActiveStep(1);
    }
  }

  function handleAppStart() {
    setIsAppStarted(true);
  }

  return (
    <>
      {!isAppStarted && <Homepage handleClick={handleAppStart}></Homepage>}
      {isAppStarted && !shouldShowQuestion && (
        <Card
          questionsCount={count}
          isValid={isValid}
          activeStep={activeStep}
          handleActiveStep={handleActiveStep}
          selectedCategory={selectedCategory}
          handleTypeChange={handleTypeChange}
          selectedType={selectedType}
          handleClick={handleCategoryChange}
          selectedDifficulty={selectedDifficulty}
          handleDifficultyChange={handleDifficultyChange}
          formValidation={formValidation}
          handleQuestionCountChange={handleQuestionCountChange}
        ></Card>
      )}
      {shouldShowQuestion && (
        <MCQWorkspace
          selectedType={selectedType as Type}
          category={selectedCategory as Category}
          count={count}
          difficulty={selectedDifficulty as string}
          handleRetake={() => console.log("RETAKE")}
          handleReturnFromType={handleReturnFromType}
        ></MCQWorkspace>
      )}
    </>
  );
};

export default App;
