import MCQ from "../MCQ/MCQ";
import { useEffect, useRef, useState } from "react";
import useQuestions from "../../hooks/useQuestions";
import type { Questions } from "../../HTTP/use-questions";
import Spinner from "../Spinner/Spinner";
import Result from "../Result/Result";
import type { Category, Type } from "../../App";
import MCQNextButton from "../MCQNextButton/MCQNextButton";
import Timer from "../Timer/Timer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ConfirmationModal from "../ConfirmationModal";
import KeyboardShortcutModal from "../keyboardShortcutModal";
interface Props {
  selectedType: Type;
  count: number;
  category: Category;
  difficulty: string;
  handleRetake: () => void;
  handleReturnFromType: () => void;
}

export type QuizData = Questions["results"][number] & {
  selectedOption: string | null;
  review: boolean;
  time: number;
  isVisited: boolean;
  isCorrect: boolean;
  options: string[];
};

export interface SideBarData {
  selectedOption: string | null;
  review: boolean;
  isVisited: boolean;
}

const MCQWorkspace = ({
  selectedType,
  count,
  category,
  difficulty,
  handleRetake,
  handleReturnFromType,
}: Props) => {
  const timePerQuestion = 20;
  // const questions = FakeData;
  const { questions } = useQuestions(count, category.id, difficulty);
  const [index, setIndex] = useState(0);
  // const [noOfCorrect, setNoOfCorrect] = useState(0);
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  // const safeQuestions: Questions["results"] = questions ?? [];
  const [sidePanelData, setSidePanelData] = useState<SideBarData[]>([]);
  const [shouldShowSideBar, setShouldShowSideBar] = useState(false);
  const [timer/* , setTimer */] = useState(count * timePerQuestion);
  const [shouldShowResult, setShouldShowResult] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showKeyboardShortcut, setShowKeyboardShortcut] = useState(true);
  const [confirmIntent, setConfirmIntent] = useState<"quit" | "submit" | null>(
    null
  );
  const [result, setResult] = useState({
    unanswered: 0,
    correct: 0,
    wrong: 0,
    totalTimeTaken: 0,
  });
  const [shouldShowSolution, setShouldShowSolution] = useState(false);

  useEffect(() => {
    if (questions && questions.length > 0) {
      const updatedQuestions = questions?.map((q) => ({
        ...q,
        selectedOption: null,
        review: false,
        time: 0,
        isVisited: false,
        isCorrect: false,
        options: [...randomize(q.correct_answer, q.incorrect_answers)],
      }));

      setQuizData(updatedQuestions);
    }
  }, [questions]);

  useEffect(() => {
    setSidePanelData(
      quizData.map(({ selectedOption, review, isVisited }) => ({
        selectedOption,
        review,
        isVisited,
      }))
    );
  }, [quizData, index]);

  useEffect(() => {
    startTimeRef.current = Date.now();

    return () => {
      if (startTimeRef.current !== null) {
        const diff = Math.floor((Date.now() - startTimeRef.current) / 1000);

        setTimeSpent(diff);
      }
    };
  }, [index]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {

      if (
        ["button", "input", "textarea"].includes(
          (e.target as HTMLElement).tagName.toLowerCase()
        )
      ) {
        return;
      }

      switch (e.code) {
        case "ArrowRight":
          handleNext();
          e.preventDefault();

          break;

        case "Escape":
          setSelectionOption(null);
          e.preventDefault();

          break;

        case "ArrowLeft":
          handlePrevious();
          e.preventDefault();

          break;

        case "Enter":
          computeResult();
          e.preventDefault();

          break;

        case "KeyM":
          setReview(true);
          e.preventDefault();

          break;

        case "KeyS":
          setShouldShowSideBar((prev) => !prev);
          e.preventDefault();

          break;

        case "Digit1":
          setSelectionOption(quizData[index].options[0]);
          e.preventDefault();

          break;

        case "Digit2":
          setSelectionOption(quizData[index].options[1]);
          e.preventDefault();

          break;

        case "Digit3":
          setSelectionOption(quizData[index].options[2]);
          e.preventDefault();

          break;

        case "Digit4":
          setSelectionOption(quizData[index].options[3]);
          e.preventDefault();

          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [setSelectionOption, handleNext, handlePrevious]);

  function handleNext() {
    if (index < quizData.length - 1) {
      setIndex((prev) => prev + 1);
    }

    if (index >= quizData.length - 1) {
      setConfirmIntent("submit");
      setShowConfirm(true);
    }
  }

  function handlePrevious() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  }

  function setSelectionOption(option: string | null) {
    setQuizData((prev) =>
      prev.map((q, idx) =>
        idx === index
          ? {
              ...q,
              selectedOption: option,
              isCorrect: option === q.correct_answer ? true : false,
            }
          : q
      )
    );

    requestAnimationFrame(() =>
      (document.activeElement as HTMLElement)?.blur()
    );
  }

  function setReview(r: boolean) {
    setQuizData((prev) =>
      prev.map((q, idx) => (idx === index ? { ...q, review: r } : q))
    );
    handleNext();
  }

  function setTimeSpent(t: number) {
    setQuizData((prev) =>
      prev.map((q, idx) => (idx === index ? { ...q, time: q.time + t } : q))
    );
  }

  function setIsVisited() {
    setQuizData((prev) =>
      prev.map((q, idx) => (idx === index ? { ...q, isVisited: true } : q))
    );
  }

  function getQuestion(questionNumber: number) {
    if (questionNumber >= 0 && questionNumber < count) {
      setIndex(questionNumber);
    }
  }

  const randomize = (correct: string, incorrect: string[]) => {
    const options = [correct, ...incorrect];
    return options
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((obj) => obj.value);
  };

  // function setOptions(randomOptions: string[]) {
  //   setQuizData((prev) =>
  //     prev.map((q, idx) =>
  //       idx === index ? { ...q, options: randomOptions } : q
  //     )
  //   );
  // }

  function computeResult() {
    // flush in-progress time for current question
    if (startTimeRef.current !== null) {
      const diff = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setTimeSpent(diff);
      startTimeRef.current = Date.now();
    }
    setShouldShowResult(true);
    let unanswered = 0;
    let correct = 0;
    let wrong = 0;
    let totalTimeTaken = 0;
    quizData.forEach((q) => {
      if (!q.selectedOption) {
        unanswered += 1;
      } else {
        if (q.selectedOption === q.correct_answer) {
          correct += 1;
        } else {
          wrong += 1;
        }
      }
    });

    quizData.forEach((q) => {
      console.log(q.time);
      totalTimeTaken = totalTimeTaken + q.time;
    });

    setResult((prev) => ({
      ...prev,
      unanswered: unanswered,
      correct: correct,
      wrong: wrong,
      totalTimeTaken: totalTimeTaken,
    }));
    // console.log(totalTimeTaken);
  }

  function timeConversion(totalTime: number) {
    let sec = totalTime % 60;
    let hr = Math.floor(totalTime / 3600);
    let min = Math.floor(totalTime / 60) - hr * 60;

    return `${min}m ${sec}s`;
  }

  function handleReturnFromSolution() {
    setShouldShowResult(true);
    setShouldShowSolution(false);
  }

  function handleQuizSubmit() {
    computeResult();
    setShowConfirm(false);
  }

  function handleQuizQuit() {
    setShowConfirm(false);
    handleReturnFromType();
  }

  if (!quizData || quizData.length === 0) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-full h-full flex flex-col bg-white box-border relative overflow-y-scroll">
      {showKeyboardShortcut && (
        <KeyboardShortcutModal
          handleCancel={() => setShowKeyboardShortcut(false)}
        ></KeyboardShortcutModal>
      )}
      {shouldShowSideBar && (
        <Sidebar
          setSideVisibility={() => setShouldShowSideBar(false)}
          getQuestion={(questionNumber) => getQuestion(questionNumber)}
          questions={sidePanelData}
          handleCancel={() => setShouldShowSideBar(false)}
        ></Sidebar>
      )}
      {showConfirm ? (
        <ConfirmationModal
          handleSubmit={
            confirmIntent === "submit" ? handleQuizSubmit : handleQuizQuit
          }
          handleCancel={() => setShowConfirm(false)}
          buttonText={confirmIntent === "submit" ? "Submit" : "Exit"}
          text={
            confirmIntent === "submit"
              ? "Once submitted, you cannot change your answers."
              : "Once exited, you cannot return back."
          }
        ></ConfirmationModal>
      ) : (
        <></>
      )}
      <Navbar
        handleReturnFromSolution={handleReturnFromSolution}
        isSolution={shouldShowSolution}
        isResult={shouldShowResult}
        setSidebarVisibility={() => setShouldShowSideBar(true)}
        selectedType={selectedType}
        totalCount={count}
        currentCount={index + 1}
        handleReturnFromType={() => {
          setShowConfirm(true);
          setConfirmIntent("quit");
        }}
        handleKeyboardShortcut={() => {
          setShowKeyboardShortcut(true);
        }}
      ></Navbar>
      {!shouldShowResult && (
        <>
          <div className="w-full max-w-3xl box-border mx-auto bg-white flex flex-col relative pt-5">
            <div className="flex justify-between items-end border-b pb-3 mx-4">
              <p className="font-Inter text-3xl font-medium">{category.name}</p>
              <Timer
                timeInSeconds={timer}
                handleQuizCompleted={() => {
                  computeResult();
                  setShouldShowResult(true);
                }}
              ></Timer>
            </div>
            <MCQ
              isVisited={quizData[index].isVisited}
              setIsVisited={setIsVisited}
              setTimeSpent={(time) => setTimeSpent(time)}
              timeSpent={quizData[index].time}
              selectedOption={quizData[index].selectedOption}
              questionNumber={index}
              question={quizData[index].question}
              correct={quizData[index].correct_answer}
              questionDifficult={quizData[index].difficulty}
              options={quizData[index].options}
              // noOfCorrect={noOfCorrect}
              // setNoOfCorrect={(value) => setNoOfCorrect(value)}
              setOptionSelected={(questionNumber) =>
                setSelectionOption(questionNumber)
              }
            />
          </div>
          <MCQNextButton
            handleNext={handleNext}
            handleOptionSelection={(option) => setSelectionOption(option)}
            handlePrevious={handlePrevious}
            handleReview={(review) => setReview(review)}
            handleSubmit={() => {
              setShowConfirm(true);
              setConfirmIntent("submit");
            }}
          ></MCQNextButton>
        </>
      )}
      {shouldShowResult && (
        <>
          <Result
            shouldShowSolution={shouldShowSolution}
            handleSolution={(s) => setShouldShowSolution(s)}
            category={category}
            questions={quizData}
            correct={result.correct}
            handleRetake={handleRetake}
            wrong={result.wrong}
            unanswered={result.unanswered}
            totalTimeTaken={timeConversion(result.totalTimeTaken)}
            total={result.correct + result.wrong + result.unanswered}
          ></Result>
        </>
      )}
    </div>
  );
};

export default MCQWorkspace;
