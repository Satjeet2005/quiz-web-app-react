import { useEffect, useState } from "react"

interface Props{
    timeInSeconds : number
    handleQuizCompleted: () => void;
}

const Timer = ({timeInSeconds,handleQuizCompleted}:Props) => {
    const [timer,setTimer] = useState({
        hours:0,
        min:0,
        sec:0,
        totalTime: timeInSeconds
    });

    useEffect(() => {
        let id = setInterval(() => {
            if(timer.totalTime < 0){
                handleQuizCompleted();
                clearInterval(id)
                return;
            } 

            
            let sec = timer.totalTime%60;
            let hr = Math.floor(timer.totalTime/3600);
            let min = Math.floor(timer.totalTime/60) - hr*60;
            
            setTimer({
                hours:hr,
                min:min,
                sec:sec,
                totalTime: timer.totalTime-1
            });

        }, 1000);

        return () => clearInterval(id);
    },[timer.totalTime])

  return (
    <div className={["font-Inter font-semibold text-lg md:text-xl px-2 py-1 rounded-md",timer.totalTime < timeInSeconds/3 ? "bg-red-100" : timer.totalTime < timeInSeconds/2 ? "bg-yellow-100" : "bg-green-100"].join(" ")}>{timer.hours.toString().padStart(2,"0")}:{timer.min.toString().padStart(2,"0")}:{timer.sec.toString().padStart(2,"0")}</div>
  )
}

export default Timer