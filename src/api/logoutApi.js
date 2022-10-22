import { Others } from "../data";

const logoutApi = async (customFunc) => {
  await fetch(Others.backendURL + "/api/v1/logout", {
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

export default logoutApi;
