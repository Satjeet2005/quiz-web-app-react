import useQuestionCount from "../../hooks/useQuestionCount";
import errorIcon from "../../assets/noun-error-7633210.svg";
import style from "./SelectionQuestion.module.css";
import { useForm, useFormContext } from "react-hook-form";

interface Props {
  selectedCategoryId: number;
  selectedDifficulty: number;
  selectedType: number | null;
}

interface FormData {
  questions: string;
}

type DifficultyKey =
  | "total_question_count"
  | "total_easy_question_count"
  | "total_medium_question_count"
  | "total_hard_question_count";

const difficultyQuestionCount: { [key: number]: string } = {
  1: "total_question_count",
  2: "total_easy_question_count",
  3: "total_medium_question_count",
  4: "total_hard_question_count",
};

const SelectionQuestions = ({
  selectedCategoryId,
  selectedType,
  selectedDifficulty,
}: Props) => {
  const {register,handleSubmit,trigger,formState: { errors },} = useFormContext<FormData>();
  const { questionCount } = useQuestionCount(selectedCategoryId);
  const maxQuetions = questionCount?.category_question_count[difficultyQuestionCount[selectedDifficulty] as DifficultyKey];

  const onSubmit = () => {};
  return (
    <div className={style.questionInputContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.headingContainer}>
          <label htmlFor="questions" className={style.heading}>
            Enter Number of {selectedType === 1 ? "Cards" : "Questions"}
          </label>
          <p className={style.subheading}>{"Maximum allowed: " + maxQuetions}</p>
        </div>
        <input
          type="number"
          id="questions"
          className={style.questionInput}
          {...register("questions", {
            max: maxQuetions,
            min: 1,
            required: "Please enter the number of questions",
          })}
        />
        {errors.questions && (
          <div className={style.errorContent}>
            <img src={errorIcon} alt="error" />
            <p className={style.errorText}>
              Please enter a valid number of questions.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SelectionQuestions;
