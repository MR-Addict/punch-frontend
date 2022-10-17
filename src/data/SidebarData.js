import { AiFillHome } from "react-icons/ai";
import { IoIosHelpCircle, IoIosSettings } from "react-icons/io";
import { BsFillBarChartFill } from "react-icons/bs";

const SidebarData = [
  {
    title: "Home",
    to: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <IoIosHelpCircle />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <IoIosSettings />,
  },
  {
    title: "Insight",
    to: "/insight",
    icon: <BsFillBarChartFill />,
  },
];

export default SidebarData;
