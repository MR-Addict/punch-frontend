import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useStateContext } from "../context/ContextProvider";

const Table = () => {
  const TableData = [
    {
      name: "Dan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello worldfjdlsajfd dlafjdlsjafl dljfaljdlsf jljdlfja ldjlldsajfld asfljl lfdjalf dsljljdfla dlfjadlfj",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Can",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Han",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
    {
      name: "Lan",
      age: 25,
      sex: "male",
      text: "Hello world",
    },
  ];
  const { themeColor, isDarkMode } = useStateContext();
  const TableColumns = [
    { headerName: "Name", field: "name" },
    { headerName: "age", field: "age" },
    { headerName: "sex", field: "sex" },
    { headerName: "text", field: "text" },
  ];
  const defaultColDef = { sortable: true, resizable: true, flex: 1 };
  const gridRef = useRef();

  return (
    <div className='flex flex-col items-center justify-start h-[90vh]'>
      <div className='h-full w-full md:w-[90%] bg-white dark:bg-secondary-dark-bg rounded-xl p-4 flex flex-col'>
        <div className='flex flex-row items-center justify-end'>
          <button className='p-2 mb-2 rounded-xl font-semibold text-white' style={{ background: themeColor }}>
            导出Excel
          </button>
        </div>
        <div className={isDarkMode ? "ag-theme-alpine-dark w-full h-full" : "ag-theme-alpine w-full h-full"}>
          <AgGridReact
            ref={gridRef}
            rowData={TableData}
            columnDefs={TableColumns}
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
