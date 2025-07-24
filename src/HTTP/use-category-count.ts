import create from "./http-request";

export interface CategoryQuestionCount {
  category_id: number;
  category_question_count: {
    total_question_count: number;
    total_easy_question_count: number;
    total_medium_question_count: number;
    total_hard_question_count: number;
  };
}

export default create('/api_count.php?category=')


