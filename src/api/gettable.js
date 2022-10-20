import { Others } from "../data";

const logout = async (customFunc) => {
  await fetch(Others.backendURL + "table", {
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

export default logout;
