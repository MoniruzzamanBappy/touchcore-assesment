import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: 20,
    employer: 25,
    employee: 25,
    interest: 25,
  },
  {
    employer: 30,
    employee: 30,
    interest: 30,
  },
  {
    name: 25,
    employer: 33,
    employee: 33,
    interest: 33,
  },
  {
    employer: 35,
    employee: 35,
    interest: 35,
  },
  {
    name: 30,
    employer: 40,
    employee: 40,
    interest: 40,
  },
  {
    employer: 45,
    employee: 45,
    interest: 45,
  },
  {
    name: 35,
    employer: 50,
    employee: 50,
    interest: 50,
  },
  {
    employer: 55,
    employee: 55,
    interest: 55,
  },
  {
    name: 40,
    employer: 67,
    employee: 67,
    interest: 67,
  },
  {
    employer: 72,
    employee: 72,
    interest: 72,
  },
  {
    name: 60,
    employer: 79,
    employee: 79,
    interest: 79,
  },
  {
    employer: 85,
    employee: 85,
    interest: 85,
  },
  {
    name: 65,
    employer: 101,
    employee: 101,
    interest: 101,
  },
];

const DataChart = () => {
  return (
    <ResponsiveContainer width={420} height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="employer" stackId="a" fill="#001D6E" />
        <Bar dataKey="employee" stackId="a" fill="#242F9B" />
        <Bar dataKey="interest" stackId="a" fill="#3A5BA0" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DataChart;
