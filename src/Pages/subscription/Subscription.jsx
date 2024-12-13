import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../components/Pagination";

const Subscription = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const itemsPerPage = 5;
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    setDatas(selectedData);
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const data = [
    {
      id: 124,
      subscriptionID: "12345",
      name: "Arjun",
      category: "Category",
      date_Time: "19 June 24, 11.45 AM",
      payment_Mode: "PhonePay",
      transaction_Details: "Online",
      status: "Active",
    },
    {
      id: 125,
      subscriptionID: "12345",
      name: "Anu",
      category: "Category",
      date_Time: "19 June 24, 11.45 AM",
      payment_Mode: "GPay",
      transaction_Details: "Online",
      status: "Inactive",
    },
  ];

  return (
    <div className="px-6 py-3">
      <Title title="Subscription" />
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Subscription ID",
                "Name",
                "Category",
                "Date & Time",
                "Payment Mode",
                "Transaction Details",
                "Status",
                "Action",
              ].map((header) => (
                <th key={header} className="p-4 font-semibold text-center">
                  <p className="flex justify-center gap-1 items-center">
                    {header} <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="rounded-lg">
            {data.map((row, index) => (
              <tr
                key={row.id}
                className="text-sm text-center bg-white text-table-text border-b-2 last:rounded-b-lg"
              >
                <td className="py-3">
                  <p>{index + 1}</p>
                </td>
                <td className="text-blue-500">
                  <p className="cursor-pointer">
                    <u>{row.subscriptionID}</u>
                  </p>
                </td>
                <td>
                  <p>{row.name}</p>
                </td>
                <td>
                  <p>{row.category}</p>
                </td>
                <td>
                  <p>{row.date_Time}</p>
                </td>
                <td>
                  <p>{row.payment_Mode}</p>
                </td>
                <td>
                  <p>{row.transaction_Details}</p>
                </td>
                <td>
                  <p
                    className={`rounded-lg p-1 text-base font-semibold ${
                      row.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {row.status}
                  </p>
                </td>
                <td>
                  <button
                    className="bg-red-100 rounded-md text-red-700 p-1.5 hover:bg-red-200"
                    onClick={() => alert(`Delete ${row.id}`)}
                  >
                    <RiDeleteBin6Line className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Subscription;
