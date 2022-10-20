import React, { useRef, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import * as XLSX from "xlsx";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useStateContext } from "../context/ContextProvider";
import { gettable } from "../api";
import { logout } from "../api";

const downloadExcel = (data) => {
  let worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  worksheet["!cols"] = [{ wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 100 }];
  XLSX.utils.book_append_sheet(workbook, worksheet, "值班笔记");
  XLSX.writeFile(workbook, "值班笔记.xlsx");
};

const Table = () => {
  const [rows, setRows] = useState([]);
  const { themeColor, isDarkMode, setIsLogin } = useStateContext();
  const defaultColDef = { sortable: true, resizable: true, flex: 1 };
  const gridRef = useRef();
  const columns = [
    { headerName: "ID", field: "id", maxWidth: 80 },
    { headerName: "组别", field: "group", maxWidth: 100 },
    { headerName: "姓名", field: "name", maxWidth: 100 },
    { headerName: "日期", field: "date", maxWidth: 110 },
    { headerName: "笔记", field: "notes", minWidth: 930, autoHeight: true, wrapText: true },
  ];

  const updateTable = () => {
    gettable((data) => {
      if (data.status) {
        const tableData = JSON.parse(data.message);
        setRows(tableData);
      } else {
        logout((data) => data);
        setIsLogin(false);
        console.log(data.message);
      }
    });
  };

  useEffect(() => {
    updateTable();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='flex flex-col items-center justify-start h-[90vh]'>
      <div className='h-full w-full md:w-[90%] bg-white dark:bg-secondary-dark-bg rounded-xl p-4 flex flex-col'>
        <div className='flex flex-row items-center justify-end gap-2'>
          <button
            className='p-2 mb-2 rounded-xl text-sm font-semibold text-white'
            style={{ background: themeColor }}
            onClick={() => downloadExcel(rows)}
          >
            导出Excel
          </button>
        </div>
        <div className={isDarkMode ? "ag-theme-alpine-dark w-full h-full" : "ag-theme-alpine w-full h-full"}>
          <AgGridReact
            ref={gridRef}
            rowData={rows}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={50}
            alwaysShowHorizontalScroll={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
