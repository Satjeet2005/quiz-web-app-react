import create from "./http-request";

interface Question{
    type : "boolean" | "multiple",
    difficulty : "hard" | "medium" | "easy",
    category : string,
    question : string,
    correct_answer : string,
    incorrect_answers : string[]
}

export interface Questions{
    response_code : number,
    results : Question[]
}

export default create("/api.php?")