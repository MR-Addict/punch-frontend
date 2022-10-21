import { Others } from "../data";

const downloadExcel = async () => {
  await fetch(Others.backendURL + "export", {
    credentials: "include",
    method: "GET",
  }).then((res) => {
    res.blob().then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a_tag = document.createElement("a");
      a_tag.href = url;
      a_tag.download = "值班笔记.xlsx";
      a_tag.click();
    });
  });
};

export default downloadExcel;
