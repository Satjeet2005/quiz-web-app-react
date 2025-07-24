import type { CategoryQuestionCount } from '../HTTP/use-category-count'
import useService from "../HTTP/use-category-count"


import { useEffect, useState } from 'react'

const useQuestionCount = (id : number) => {
    const [questionCount,setQuestionCount]  = useState<CategoryQuestionCount>();
    
    useEffect(() => {
        const { request } = useService.getCategoryQuestionCount<CategoryQuestionCount>(id);
        request.then((res) => {
            setQuestionCount(res.data);
        })
    },[])

  return {questionCount}; 
    
  
}

export default useQuestionCount