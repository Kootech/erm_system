import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Product = {
  productName: string;
  price: number;
  inventory: number;
  category: string;
};

const defaultData: Product[] = [
  {
    productName: "pencil",
    price: 50,
    inventory: 77,
    category: "stationery",
  },
  {
    productName: "computer",
    price: 50550,
    inventory: 8,
    category: "electronics",
  },
  {
    productName: "coke",
    price: 70,
    inventory: 150,
    category: "drinks",
  },
];

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("productName", {
    cell: (info) => (
      <Link
        to={`/dashboard/inventory/products/edit/${info.getValue()}`}
        className={`text-blue-600`}
      >
        {info.getValue()}
      </Link>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.category, {
    id: "category",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("price", {
    header: () => "price",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("inventory", {
    header: () => "Inventory",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];

const InventoryTable = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
};

export default InventoryTable;
