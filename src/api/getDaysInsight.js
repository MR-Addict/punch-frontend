import { Config } from "../data";

const getDaysInsight = async (customFunc) => {
  await fetch(Config.backendURL + "/api/v1/status/days", {
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
