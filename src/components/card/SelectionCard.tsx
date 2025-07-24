import SelectionQuestions from "../selection/SelectionQuestions";
import Selection from "../selection/SelectionDifficulty";
import style from "./SelectionCard.module.css";
import settings from "../../assets/noun-setting-2060937.svg";
import FormPreState from "../formPreState/FormPreState";
import QuizStartButton from "../buttons/QuizStartButton";
import { useForm,FormProvider } from "react-hook-form";

interface Props {
  selectedCategory: number | null;
  selectedDifficulty: number;
  selectedType: number | null;
  handleDifficultyChange: (id: number) => void;
  handleTypeChange: (id: number) => void;
  formValidation: () => void;
}

const SelectionCard = ({selectedCategory,selectedType,selectedDifficulty,handleDifficultyChange,formValidation,handleTypeChange}: Props) => {

  const methods = useForm();

  return (
    <>
      <div className={style.card}>
        <div className={style.headingContainer}>
          <img src={settings} alt="" className={style.icon} />
          <p className={style.heading}>Customize Your Experience</p>
        </div>
        <p className={style.subheading}>
          Tailor the quiz to match your learning goals
        </p>
        {selectedType ? (
          <>
          <div className={style.formContainer}>
            <Selection
              selectedDifficulty={selectedDifficulty}
              handleDifficultyChange={(id) => handleDifficultyChange(id)}
            ></Selection>
            <FormProvider {...methods}>

            <SelectionQuestions
              selectedCategoryId={selectedCategory as number}
              selectedDifficulty={selectedDifficulty}
              selectedType={selectedType}
              ></SelectionQuestions>
              <QuizStartButton selectedType={selectedType} formValidation={formValidation}></QuizStartButton>
              </FormProvider>
          </div>
          </>

        ) : (
          <FormPreState handleTypeChange={id => handleTypeChange(id)}></FormPreState>
        )}
      </div>
    </>
  );
};

export default SelectionCard;
