import { Others } from "../data";

const getTable = async (customFunc) => {
  await fetch(Others.backendURL + "/api/v1/table", {
    credentials: "include",
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      customFunc(data);
    })
    .catch((err) => {
      customFunc({ status: false, message: err });
    });
};

export default getTable;
