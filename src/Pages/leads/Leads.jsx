import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import data from "../../json_data/LeadsData.json";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import AddLeads from "./AddLeads";

const Leads = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const OpenAddModal = () => setAddModal(true);
  const CloseAddModal = () => setAddModal(false);

  const itemsPerPage = 5;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    setPaginatedData(selectedData);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (leadsId) => {
    setSelectedId(leadsId);
    navigate(`/leads/leads_details`, { state: { leadsId } });
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    alert(`Delete lead with ID: ${id}`);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    CloseAddModal();
  };

  return (
    <div className="px-6 py-3">
      <Title title="Leads" onOpen={OpenAddModal}/>
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Date & Time",
                "Name",
                "Phone Number",
                "Follow-up",
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
            {paginatedData.map((row, index) => (
              <tr
                key={row.id}
                className={`text-sm text-center bg-white text-table-text border-b-2 
                  ${
                    selectedId === row.id ? "bg-gray-200" : "hover:bg-gray-100"
                  } 
                  cursor-pointer`}
                onClick={() => handleRowClick(row.id)}
              >
                <td className="py-3">
                  <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
                </td>
                <td>
                  <p>{row.date_time}</p>
                </td>
                <td>
                  <p>{row.name}</p>
                </td>
                <td>
                  <p>{row.phone}</p>
                </td>
                <td>
                  <p>{row.follow_up}</p>
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
                    onClick={(e) => handleDelete(row.id, e)}
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
      {addModal && (<AddLeads onClose={CloseAddModal} onClick={onSubmit}/>)}
    </div>
  );
};

export default Leads;
