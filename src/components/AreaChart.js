import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
      display: false,
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const AreaChart = ({ title, data }) => {
  LineOptions.plugins.title.text = title;
  return <Line options={LineOptions} data={data} />;
};

export default AreaChart;
