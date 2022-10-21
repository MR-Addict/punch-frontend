import { Others } from "../data";

const logoutApi = async (customFunc) => {
  await fetch(Others.backendURL + "logout", {
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
