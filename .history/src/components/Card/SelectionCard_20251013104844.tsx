import SelectionQuestions from "../Selection/SelectionQuestions";
import Selection from "../Selection/SelectionDifficulty";
import style from "./SelectionCard.module.css";
// import settings from "../../assets/noun-setting-2060937.svg";
// import QuizStartButton from "../buttons/QuizStartButton";
import { useForm, FormProvider } from "react-hook-form";
import type { Category, Type } from "../../App";

interface Props {
  selectedCategory: Category | null;
  selectedType: Type | null;
  selectedDifficulty: string | null;
  selectedCount: number;
  handleDifficultyChange: (label: string) => void;
  handleTypeChange: (type: Type) => void;
  handleQuestionCountChange: (count: number) => void;
  formValidation: (valid: boolean) => void;
}

const SelectionCard = ({
  selectedType,
  selectedCategory,
  selectedDifficulty,
  selectedCount,
  handleDifficultyChange,
  formValidation,
  handleQuestionCountChange,
}: Props) => {
  const methods = useForm();

  return (
    <>
      <div className={style.card}>
        <>
          <div className={style.formContainer}>
            <Selection
              selectedDifficulty={selectedDifficulty}
              handleDifficultyChange={(label) => handleDifficultyChange(label)}
            ></Selection>
            <FormProvider {...methods}>
              <SelectionQuestions
                selectedCount={selectedCount}
                selectedCategory={selectedCategory}
                selectedDifficulty={selectedDifficulty}
                selectedType={selectedType}
                formValidation={formValidation}
                handleQuestionCountChange={(count) =>
                  handleQuestionCountChange(count)
                }
              ></SelectionQuestions>
            </FormProvider>
          </div>
        </>
      </div>
    </>
  );
};

export default SelectionCard;
