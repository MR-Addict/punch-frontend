import { AiFillHome } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { BsFillBarChartFill } from "react-icons/bs";

const SidebarData = [
  {
    title: "首页",
    to: "/",
    icon: <AiFillHome />,
  },
  {
    title: "表格",
    to: "/table",
    icon: <BsFillBarChartFill />,
  },
  {
    title: "设置",
    to: "/settings",
    icon: <IoIosSettings />,
  },
];

export default SidebarData;
