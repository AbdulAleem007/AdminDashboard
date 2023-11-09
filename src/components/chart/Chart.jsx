import React from "react";
import "../chart/chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Revenue: 1200,
    Profit: 500,
  },
  {
    name: "February",
    Revenue: 2100,
    Profit: 900,
  },

  {
    name: "March",
    Revenue: 1500,
    Profit: 300,
  },
  {
    name: "April",
    Revenue: 1800,
    Profit: 800,
  },
  {
    name: "May",
    Revenue: 2400,
    Profit: 1100,
  },
  {
    name: "June",
    Revenue: 1750,
    Profit: 650,
  },
];

function Chart({ aspectRatio, title }) {
  return (
    <div className="chart">
      {" "}
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspectRatio}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="Revenue"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Profit"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          {/* <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
