const ChartData = {
  AreaData: {
    labels: [
      "Jan",
      "Febr",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Jan",
      "Febr",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Jan",
      "Febr",
      "Mar",
    ],
    datasets: [
      {
        fill: true,
        label: "LineChart",
        data: [45, 56, 32, 65, 45, 32, 42, 45, 56, 32, 65, 45, 32, 42, 45, 56, 32],
        borderColor: "rgba(53, 162, 235, 0.7)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  },
  BarData: {
    labels: ["第一周", "第二周", "第三周", "第四周"],
    datasets: [
      {
        type: "bar",
        label: "电子组",
        data: [45, 56, 32, 65],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        type: "bar",
        label: "航模组",
        data: [40, 52, 40, 62],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
      {
        type: "bar",
        label: "编程组",
        data: [50, 56, 48, 52],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
      {
        type: "bar",
        label: "静模组",
        data: [35, 20, 60, 48],
        backgroundColor: "rgba(255, 205, 86, 0.7)",
      },
      {
        type: "line",
        label: "周次",
        data: [102, 120, 132, 110],
        borderColor: "rgb(75, 192, 192, 0.7)",
        backgroundColor: "rgb(75, 192, 192, 0.7)",
      },
    ],
  },
};

export default ChartData;
