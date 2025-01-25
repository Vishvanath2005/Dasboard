import React, { useState } from "react";
import { useEffect } from "react";
import data from "../../../json_data/Upcoming_InterviewData.json";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../../components/Pagination";

const Upcoming_Interviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedId, setSelectedId] = useState([]);
  const [data, setData] = useState([]);
  const itemsPerPage = 7;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    setData(selectedData);
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (id) => {
    const selected = data.find(
      (Upcoming_Interviews) => subscription.subscriptionID === id
    );
    setSelectedData(selected);
    setSelectedId(id);
    console.log(selected);
  };

  const handleDelete = (id) => {
    console.log(`Delete row with id: ${id}`);
  };

  return (
    <div>
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Interview ID",
                "Room No",
                "User Name",
                "Date",
                "Slot Time",
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
            <tr
              className={`text-sm text-center bg-white text-table-text border-b-2 
                 "bg-gray-200" : "hover:bg-gray-100 cursor-pointer`}
            >
              <td className="py-3">
                <p>1</p>
              </td>
              <td className="text-blue-500">
                <p className="cursor-pointer">
                  <u>123</u>
                </p>
              </td>
              <td>
                <p>#123</p>
              </td>
              <td>
                <p>Martin</p>
              </td>
              <td>
                <p>20 th ofJan</p>
              </td>
              <td>
                <p>01:22 pm</p>
              </td>
              <td>
                <p
                  className={`rounded-lg p-1 text-base font-semibold 
                      "bg-green-100 text-green-700"
                  `}
                >
                  Active
                </p>
              </td>
              <td>
                <button
                  className="bg-red-100 rounded-md text-red-700 p-1.5 hover:bg-red-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                  }}
                >
                  <RiDeleteBin6Line className="text-lg" />
                </button>
              </td>
            </tr>
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

export default Upcoming_Interviews;
