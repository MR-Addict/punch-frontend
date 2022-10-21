import { Others } from "../data";

const getDaysInsight = async (customFunc) => {
  await fetch(Others.backendURL + "days", {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      customFunc(data);
    })
    .catch((err) => {
      customFunc({ status: false, message: err });
    });
};

export default getDaysInsight;
