import { useEffect, useState } from "react"
import useService from "../HTTP/use-questions"
import type { Questions } from "../HTTP/use-questions"
import { CanceledError } from "axios"

const useQuestions = (count : number,category : number,difficulty : string) => {
    const [questions,setQuestions] = useState<Questions["results"]>()
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const { request,cancel } = useService.getQuestions<Questions>(count,category,difficulty);
        
        request
        .then((res) => {setQuestions(res.data.results); setIsLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setIsLoading(false)
            setError(err.message)
        })

        return () => cancel();
    },[])
    
    return { questions,error,isLoading }
  
}

export default useQuestions


