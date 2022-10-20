import { Others } from "../data";

const login = async (username, password, customFunc) => {
  await fetch(Others.backendURL + "login", {
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

export default login;
