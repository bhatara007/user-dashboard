import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const data = [
  {
    name: "Page A",
    temp: 30,
  },
  {
    name: "Page B",
    temp: 30,
  },
  {
    name: "Page C",
    temp: 31,
  },
  {
    name: "Page D",
    temp: 32,
  },
  {
    name: "Page E",
    temp: 32,
  },
  {
    name: "Page F",
    temp: 34,
  },
  {
    name: "Page G",
    temp: 34,
  },
  
];

const LineChartsusu = ({data}) => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="ts" tick={{fontSize:10}}/>
          <YAxis domain={[20, 40]} tickCount={5} />
          <ReferenceLine y={37} stroke="red" strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#4E96E7"
            dot={false}
            strokeWidth={2}
            // activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
}

export default LineChartsusu
