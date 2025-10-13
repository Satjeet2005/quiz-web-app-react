import { useEffect, useState } from "react"
import type { CategoriesProps } from "../HTTP/use-category";
import useService from "../HTTP/use-category"

 const useCategory = () => {
    const [categories,setCategories] = useState<CategoriesProps["trivia_categories"]>();

    useEffect(() => {
        const { request } = useService.getCategory<CategoriesProps>();

        request
        .then((res) => {
          
            setCategories(res.data.trivia_categories);
        })
    },[])
    
  return { categories };
    
  
}

export default useCategory;
