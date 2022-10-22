import React from "react";
import { useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { getDaysInsight } from "../api";
import { useStateContext } from "../context/ContextProvider";

Chart.register(...registerables);

const getDaysInsightKeys = (day_begin, day_end) => {
  const array = [];
  const dt = new Date(day_begin);
  for (
    dt.setDate(dt.getDate() + 1);
    dt <= new Date(day_end).setDate(new Date(day_end).getDate() + 1);
    dt.setDate(dt.getDate() + 1)
  ) {
    const temp_date = dt.toISOString().slice(5, 10);
    array.push(Number(temp_date.split("-")[0]) + "-" + Number(temp_date.split("-")[1]));
  }
  return array;
};

const getDaysInsightValues = (days, tmpInsightKeys) => {
  const array = [];
  tmpInsightKeys.forEach((prop) => {
    array.push(0);
    days.forEach((day) => {
      if (new Date(day["时间"].slice(5)).getTime() === new Date(prop).getTime()) {
        array.pop();
        array.push(Number(day["次数"]));
      }
    });
  });
  return array;
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
          if (sum) return `${value}`;
          else return "error";
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
        const tmpInsightKeys = getDaysInsightKeys(
          JSON.parse(data.message)[0]["时间"],
          JSON.parse(data.message).slice(-1)[0]["时间"]
        );
        setInsightKeys(tmpInsightKeys);
        setInsightValues(getDaysInsightValues(JSON.parse(data.message), tmpInsightKeys));
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
