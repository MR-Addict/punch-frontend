import React from "react";
import { useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { getDaysInsight } from "../api";
import { useStateContext } from "../context/ContextProvider";

Chart.register(...registerables);

const getDaysInsightKeys = (days) => {
  return days.map((item) => {
    const temp_date = new Date(item["时间"]).toISOString().slice(5, 10);
    return Number(temp_date.split("-")[0]) + "." + Number(temp_date.split("-")[1]);
  });
};

const getDaysInsightValues = (days) => {
  return days.map((item) => Number(item["次数"]));
};

const AreaChart = () => {
  const { isDarkMode, setIsLogin } = useStateContext();
  const [insightKeys, setInsightKeys] = useState([]);
  const [insightValues, setInsightValues] = useState([]);

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
        text: "每日提交",
        font: {
          size: 21,
        },
      },
      datalabels: {
        anchor: "top",
        align: "top",
        color: isDarkMode ? "#f5f5f5" : "#505050",
        formatter: (value, context) => {
          const dataPoints = context.dataset.data;
          const sum = parseInt(dataPoints.reduce((prop, a) => prop + a, 0));
          return sum ? `${value}` : "error";
        },
        labels: {
          title: {
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    getDaysInsight((data) => {
      if (data.status) {
        setInsightKeys(getDaysInsightKeys(JSON.parse(data.message)));
        setInsightValues(getDaysInsightValues(JSON.parse(data.message)));
      } else {
        setIsLogin(false);
        console.log(data.message);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Line
      options={LineOptions}
      plugins={[ChartDataLabels]}
      data={{
        labels: insightKeys,
        datasets: [
          {
            fill: true,
            label: "LineChart",
            data: insightValues,
            borderColor: "rgba(53, 162, 235, 0.7)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            tension: 0.4,
          },
        ],
      }}
    />
  );
};

export default AreaChart;
