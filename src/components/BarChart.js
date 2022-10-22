import React from "react";
import { Chart as MultiCharts } from "react-chartjs-2";
import { useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, registerables } from "chart.js";

import { getWeeksInsight } from "../api";
import { useStateContext } from "../context/ContextProvider";

Chart.register(...registerables);

const BarChart = () => {
  const { isDarkMode } = useStateContext();
  const [insightKeys, setInsightKeys] = useState([]);
  const [insightValues, setInsightValues] = useState({});

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
        text: "每周提交",
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

  let BarData = {
    labels: insightKeys,
    datasets: [
      {
        type: "bar",
        label: "航模组",
        data: insightValues["航模组"],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
      {
        type: "bar",
        label: "编程组",
        data: insightValues["编程组"],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
      {
        type: "bar",
        label: "电子组",
        data: insightValues["电子组"],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        type: "bar",
        label: "静模组",
        data: insightValues["静模组"],
        backgroundColor: "rgba(255, 205, 86, 0.7)",
      },
      {
        type: "line",
        label: "周次",
        data: insightValues["周次"],
        borderColor: "rgb(75, 192, 192, 0.7)",
        backgroundColor: "rgb(75, 192, 192, 0.7)",
      },
    ],
  };

  useEffect(() => {
    getWeeksInsight((data) => {
      let tmpInsightValues = {};
      const JSONData = JSON.parse(data.message);
      const tmpInsightKeys = JSONData[0].map((item) => "第" + item["周次"] + "周");
      tmpInsightValues["航模组"] = JSONData[0].map((item) => item["航模组"]);
      tmpInsightValues["编程组"] = JSONData[1].map((item) => item["编程组"]);
      tmpInsightValues["电子组"] = JSONData[2].map((item) => item["电子组"]);
      tmpInsightValues["静模组"] = JSONData[3].map((item) => item["静模组"]);
      tmpInsightValues["周次"] = JSONData[4].map((item) => item["周次"]);
      setInsightKeys(tmpInsightKeys);
      setInsightValues(tmpInsightValues);
    });
    // eslint-disable-next-line
  }, []);
  return <MultiCharts options={LineOptions} plugins={[ChartDataLabels]} data={BarData} />;
};

export default BarChart;
