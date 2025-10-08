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
    <div style={{ width: "100%", height: 450 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          layout="vertical" // makes bars horizontal
          margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />           {/* Value axis (left→right) */}
          <YAxis type="category" dataKey="name" /> {/* Category axis */}
          <Tooltip />
          <Legend />
          <Bar barSize={30} dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppBarChart;
