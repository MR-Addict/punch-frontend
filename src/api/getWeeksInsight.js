import { Others } from "../data";

const getWeeksInsight = async (customFunc) => {
  await fetch(Others.backendURL + "weeks", {
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

export default getWeeksInsight;
