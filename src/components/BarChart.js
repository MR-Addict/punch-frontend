import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

let LineOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "",
      font: {
        size: 21,
      },
    },
  },
};

const BarChart = ({ title, data }) => {
  LineOptions.plugins.title.text = title;
  return <Chart options={LineOptions} data={data} />;
};

export default BarChart;
