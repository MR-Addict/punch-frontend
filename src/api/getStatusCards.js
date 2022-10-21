import { Others } from "../data";

const getStatusCards = async (customFunc) => {
  await fetch(Others.backendURL + "cards", {
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

export default getStatusCards;
