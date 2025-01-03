import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from '../../components/Pagination';
import data from '../tickets/TicketsData.json';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const itemsPerPage = 5;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    setDatas(selectedData);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (ticketId) => {
    setSelectedId(ticketId);
    navigate(`/tickets/assign_tickets`, { state: { ticketId } });
  };

  const deleteRow = (id) => {
    alert(`Delete ticket with ID: ${id}`);
  };

  return (
    <div className="px-6 py-3">
      <Title title="Tickets" showbutton={false} />
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Ticket ID",
                "Name",
                "Complaint",
                "Priority",
                "Date & Time",
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
            {datas.map((row, index) => (
              <tr
                key={row.id}
                className={`text-sm text-center bg-white text-table-text border-b-2 
                  ${selectedId === row.ticketId ? "bg-gray-200" : "hover:bg-gray-100"} cursor-pointer`}
                onClick={() => handleRowClick(row.ticketId)}
              >
                <td className="py-3">
                  <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
                </td>
                <td>
                  <p>
                    <u>{row.ticketId}</u>
                  </p>
                </td>
                <td>
                  <p>{row.ticketName}</p>
                </td>
                <td>
                  <p>{row.complaint}</p>
                </td>
                <td>
                  <p>{row.priority}</p>
                </td>
                <td>
                  <p>{row.date_time}</p>
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
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent row click from triggering
                      deleteRow(row.ticketId);
                    }}
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

export default Tickets;
