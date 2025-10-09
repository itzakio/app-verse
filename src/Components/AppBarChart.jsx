import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const AppBarChart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) {
    return <p className="text-center">No data available</p>;
  }

  return (
    <div className="w-full h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />           
          <YAxis type="category" dataKey="name" reversed/> 
          <Tooltip />
          <Legend />
          <Bar barSize={30} dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppBarChart;
