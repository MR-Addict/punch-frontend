import { Config } from "../data";

const loginApi = async (username, password, customFunc) => {
  await fetch(Config.backendURL + "/api/v1/login", {
    credentials: "include",
    method: "POST",
    body: new URLSearchParams({ username, password }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((res) => res.json())
    .then((data) => {
      customFunc(data);
    })
    .catch((err) => {
      customFunc({ status: false, message: err });
    });
};

export default loginApi;
