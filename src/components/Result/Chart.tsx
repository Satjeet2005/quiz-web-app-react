import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { COLORS } from "./Result";

interface Props {
  correct: number;
  wrong: number;
  unanswered:number;
}

export default function Chart({ unanswered, correct, wrong }: Props) {
  const [radius, setRadius] = useState({ innerRadius: 60, outerRadius: 90 });

  // const percentage = (correct / (correct+wrong)) * 100;

  useEffect(() => {
    const mediumScreen = window.matchMedia("(max-width: 768px)");

    if (mediumScreen.matches) {
      setRadius({ innerRadius: 60, outerRadius: 80 });
    } else {
      setRadius({ innerRadius: 80, outerRadius: 100 });
    }
  }, []);


  const data = [{name:"Correct", value: correct},{name:"Wrong",value:wrong},{name:"Unanswered",value:unanswered}];

  return (
      <ResponsiveContainer width={200} height={200}>
        <PieChart width={20} height={20}>
          <Pie
            data={data}
            startAngle={90}
            endAngle={-270}
            cx="50%"
            cy="50%"
            innerRadius={radius.innerRadius}
            outerRadius={radius.outerRadius}
            dataKey="value"
            stroke="none"
            isAnimationActive={false}
          >
            {COLORS.map((color,idx) => <Cell fill={color} key={idx} /> )}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

  );
}
