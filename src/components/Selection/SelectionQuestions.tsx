import useQuestionCount from "../../hooks/useQuestionCount";
import errorIcon from "../../assets/noun-error-7633210.svg";
import style from "./SelectionQuestion.module.css";
import { useFormContext } from "react-hook-form";
import type { Category, Type } from "../../App";
import { useEffect } from "react";

interface Props {
  selectedCategory: Category | null;
  selectedDifficulty: string | null;
  selectedType: Type | null;
  selectedCount: number;
  formValidation: (valid: boolean) => void;
  handleQuestionCountChange: (count: number) => void;
}

interface FormData {
  questions: string;
}

type DifficultyKey =
  | "total_question_count"
  | "total_easy_question_count"
  | "total_medium_question_count"
  | "total_hard_question_count";

const difficultyQuestionCount: { [key: string]: string } = {
  any: "total_question_count",
  easy: "total_easy_question_count",
  medium: "total_medium_question_count",
  hard: "total_hard_question_count",
};

const SelectionQuestions = ({
  selectedCategory,
  selectedType,
  selectedDifficulty,
  selectedCount,
  formValidation,
  handleQuestionCountChange,
}: Props) => {
  const {
    register,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    setValue,
  } = useFormContext<FormData>();
  const { questionCount } = useQuestionCount(selectedCategory?.id as number);
  const maxQuetions =
    questionCount?.category_question_count[
      difficultyQuestionCount[selectedDifficulty as string] as DifficultyKey
    ];

  const count = Number.parseInt(watch("questions"));

  useEffect(() => {
    const isValidNumber = Number.isFinite(count);
    if (!isValidNumber) return;

    if (maxQuetions && count >= 1 && count <= maxQuetions) {
      formValidation(true);
      handleQuestionCountChange(count);
      clearErrors("questions");
    } else {
      formValidation(false);
      setError("questions", {
        type: "manual",
        message:
          maxQuetions && count > maxQuetions
            ? `Please enter at most ${maxQuetions}.`
            : "Please enter at least 1.",
      });
    }
  }, [count, maxQuetions]);

  return (
    <div className={[style.questionInputContainer, "font-Inter"].join(" ")}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={style.headingContainer}>
          <label htmlFor="questions" className={style.heading}>
            Enter Number of {selectedType?.id === 1 ? "Cards" : "Questions"}
          </label>
          <p className={style.subheading}>{"Maximum: " + maxQuetions}</p>
        </div>
        <input
          type="number"
          id="questions"
          className={style.questionInput}
          inputMode="numeric"
          min={1}
          step={1}
          onWheel={(e) => (e.currentTarget as HTMLInputElement).blur()}
          onKeyDown={(e) => {
            // block minus and scientific notation keys
            if (["-", "+", "e", "E"].includes(e.key)) {
              e.preventDefault();
            }
          }}
          onPaste={(e) => {
            const text = e.clipboardData.getData("text");
            const digits = text.replace(/[^0-9]/g, "");
            if (digits !== text) {
              e.preventDefault();
              setValue("questions", digits || "", {
                shouldValidate: true,
                shouldDirty: true,
              });
            }
          }}
          {...register("questions", {
            // keep HTML validation hints but also validate in effect
            min: { value: 1, message: "Please enter at least 1." },
            max: maxQuetions,
            value: String(Math.max(1, selectedCount)),
            onBlur: (e) => {
              const v = Number.parseInt(e.target.value);
              if (!Number.isFinite(v) || v < 1) {
                setValue("questions", "1", {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }
            },
            onChange: (e) => {
              // prevent leading minus
              if (e.target.value.startsWith("-")) {
                const sanitized = e.target.value.replace(/^-+/, "");
                setValue("questions", sanitized || "", {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }
            },
          })}
        />
        {errors.questions && (
          <div className={style.errorContent}>
            <img src={errorIcon} alt="error" />
            <p className={style.errorText}>{errors.questions.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SelectionQuestions;
