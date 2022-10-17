import { AiFillHome } from "react-icons/ai";
import { IoIosHelpCircle, IoIosSettings, IoMdLogOut } from "react-icons/io";
import { BsFillBarChartFill } from "react-icons/bs";

const SidebarData = [
  {
    title: "首页",
    to: "/admin",
    icon: <AiFillHome />,
  },
  {
    title: "统计",
    to: "/insight",
    icon: <BsFillBarChartFill />,
  },
  {
    title: "设置",
    to: "/settings",
    icon: <IoIosSettings />,
  },
  {
    title: "帮助",
    to: "/help",
    icon: <IoIosHelpCircle />,
  },
  {
    title: "退出",
    to: "/logout",
    icon: <IoMdLogOut />,
  },
];

export default SidebarData;
