import {
  BsFillCalendarDayFill,
  BsFillCalendarDateFill,
  BsFillCalendarMonthFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";

const HomeCards = [
  {
    title: "今日提交",
    icon: <BsFillCalendarDateFill />,
    value: 56,
    color: "#FF6D28",
  },
  {
    title: "本周提交",
    icon: <BsFillCalendarDayFill />,
    value: 120,
    color: "#FA2FB5",
  },
  {
    title: "本月提交",
    icon: <BsFillCalendarMonthFill />,
    value: 700,
    color: "#8758FF",
  },
  {
    title: "所有提交",
    icon: <BsFillCalendarWeekFill />,
    value: "1,300",
    color: "#42855B",
  },
];

export default HomeCards;
