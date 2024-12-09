import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel
} from "@tanstack/react-table";


const TableWithPagination = ({ data, columns, classes = '', pageSize, columnFilters = []}) => {
  const [sorting, setSorting] = useState([]);
  
  console.log("pageSize: " + pageSize);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSize,
  });


  // const [columnFilters, setColumnFilters] = React.useState([]);

  let classesNames = "p-4 bg-gray-100 rounded shadow-md " + classes;

  // Opprett tabellinstansen
  const table = useReactTable({
    data,
    columns,
    pageSize,
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    initialState: {

      columnFilters: [
          {
            id: 'name',
            value: 'labor'
          }
      ]
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  /*function setFilter() {
    setColumnFilters([
      {
        id: 'name',
        value: ref.current.value
      }
  ]);
  }*/
 

  console.log('Column filters: ' + table.getState().columnFilters)

  return (
    <div className={classesNames}>

    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} className="bg-gray-200">
            {headerGroup.headers.map(header => (
              
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                style={{ width: header.column.columnDef.size }}
                className="px-4 py-2 text-left text-gray-700 font-medium cursor-pointer"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                
                {{
                  asc: " 🔼",
                  desc: " 🔽",
                }[header.column.getIsSorted()] ?? null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr
            key={row.id}
            className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {row.getVisibleCells().map(cell => (
              <td
                key={cell.id}
                className="px-4 py-2 border-t border-gray-300 text-gray-700"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
               
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination controls */}
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Forrige
      </button>
      <span className="text-gray-700">
        Side {table.getState().pagination.pageIndex + 1} av{" "}
        {table.getPageCount()}
      </span>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Neste
      </button>
    </div>
  </div>
  );
};

export default TableWithPagination;
