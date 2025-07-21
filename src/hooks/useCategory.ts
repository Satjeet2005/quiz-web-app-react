import { useEffect, useState } from "react"
import type { Categories } from "../HTTP/use-category";
import useService from "../HTTP/use-category"

 const useCategory = () => {
    const [categories,setCategories] = useState<Categories["trivia_categories"]>();

    useEffect(() => {
        const { request } = useService.getCategory<Categories>();

        request
        .then((res) => {
          
            setCategories(res.data.trivia_categories);
        })
    },[])
    
  return { categories };
    
  
}

export default useCategory;
