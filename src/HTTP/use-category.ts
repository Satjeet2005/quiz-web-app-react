import create from "./http-request";

interface Category{
            id : number,
        name : string
}

export interface CategoriesProps{
    trivia_categories : Category[]
}


export default create("/api_category.php");