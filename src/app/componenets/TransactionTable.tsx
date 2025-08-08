"use client";

import React, { useEffect, useState } from "react";
import { transactions } from "../lib/transaction";
import { Transaction } from "../types";
import SkeletonRow from "../ui/SkeletonRow";
import ArrowUp from "../Icons/ArrowUp";

type SortKey = keyof Transaction;
type SortDirection = "asc" | "desc";

const TransactionTable: React.FC = () => {
  const [data, setData] = useState<Transaction[] | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(transactions);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSort = (key: SortKey) => {
    if (!data) return;

    const direction =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";

    const sorted = [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "string" && typeof valB === "string") {
        return direction === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      if (typeof valA === "number" && typeof valB === "number") {
        return direction === "asc" ? valA - valB : valB - valA;
      }

      return 0;
    });

    setSortKey(key);
    setSortDirection(direction);
    setData(sorted);
  };

  const renderArrow = (key: SortKey) => {
    const isActive = sortKey === key;
    const isDesc = isActive && sortDirection === "desc";

    return (
      <ArrowUp
        className={`transition-transform duration-300 ${
          isDesc ? "rotate-180" : ""
        }`}
      />
    );
  };

  return (
    <div className="w-full overflow-x-auto mt-6">
      <table className="w-full min-w-[800px] border rounded-lg shadow-sm">
        <thead className="text-[rgba(26,32,36,0.6)] bg-[rgba(52,97,111,0.09)]">
          <tr className="text-left">
            {[
              { label: "Date", key: "date" },
              { label: "Remark", key: "remark" },
              { label: "Amount", key: "amount" },
              { label: "Currency", key: "currency" },
              { label: "Type", key: "type" },
            ].map((column) => (
              <th key={column.key} className="px-4 py-2 whitespace-nowrap">
                <button
                  onClick={() => handleSort(column.key as SortKey)}
                  className="flex items-center gap-2"
                >
                  {column.label} {renderArrow(column.key as SortKey)}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((transaction) => (
                <tr key={transaction.id} className="border-t">
                  <td className="px-4 py-2 text-[#1B2528] whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="px-4 py-2 text-[#1B2528] whitespace-nowrap">
                    {transaction.remark}
                  </td>
                  <td className="px-4 py-2 text-[#1B2528] whitespace-nowrap">
                    {transaction.amount < 0 ? "-" : ""}$
                    {Math.abs(transaction.amount)}
                  </td>
                  <td className="px-4 py-2 text-[#1B2528] whitespace-nowrap">
                    {transaction.currency}
                  </td>
                  <td className="px-4 py-2 text-[#1B2528] whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-medium ${
                        transaction.type === "Credit"
                          ? "text-green-700 bg-green-100"
                          : "text-red-700 bg-red-100"
                      }`}
                    >
                      ● {transaction.type}
                    </span>
                  </td>
                </tr>
              ))
            : [...Array(5)].map((_, i) => <SkeletonRow key={i} />)}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
