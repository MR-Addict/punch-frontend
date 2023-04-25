import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState, useEffect } from "react";

import { useStateContext } from "../context/ContextProvider";
import { getTable, downloadExcel } from "../api";

const Table = () => {
  const [rows, setRows] = useState([]);
  const { themeColor, isDarkMode, setIsLogin } = useStateContext();
  const defaultColDef = { sortable: true, resizable: true, flex: 1, filter: true };
  const gridRef = useRef();
  const columns = [
    { headerName: "序号", field: "id", minWidth: 80 },
    { headerName: "日期", field: "date", minWidth: 110 },
    { headerName: "组别", field: "group", minWidth: 100 },
    { headerName: "姓名", field: "name", minWidth: 100 },
    { headerName: "笔记", field: "notes", minWidth: 930, autoHeight: true, wrapText: true },
  ];

  const updateTable = () => {
    getTable((data) => {
      if (data.status) {
        const tableData = JSON.parse(data.message);
        setRows(tableData);
      } else {
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
            className='p-2 mb-2 rounded-md text-sm font-semibold text-white'
            style={{ background: themeColor }}
            onClick={() => downloadExcel()}
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
            paginationPageSize={100}
            alwaysShowHorizontalScroll={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
