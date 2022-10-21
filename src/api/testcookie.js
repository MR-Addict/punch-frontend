import { Others } from "../data";

const testcookie = async (customFunc) => {
  await fetch(Others.backendURL + "testcookie", {
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

export default testcookie;