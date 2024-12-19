import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import AddInstitution from "../institution/AddInstitution";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import VE_Institution from "./VE_Institution";
import Data from "../institution/InstitutionData.json";

const Institution = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [addModal, setAddModal] = useState(false);
  const [view_editModal, setView_editModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState([]);
  const OpenVEModal = () => setView_editModal(true);
  const CloseVEModal = () => setView_editModal(false);
  const OpenAddModal = () => setAddModal(true);
  const CloseAddModal = () => setAddModal(false);

  const itemsPerPage = 7;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = Data.slice(startIndex, startIndex + itemsPerPage);
    setData(selectedData);
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectData = (id) => {
    const selected = data.find((row) => row.id === id);
    setSelectedData(selected);
    console.log(selected);
  };

  useEffect(() => {
    if (selectedData) {
      console.log("Selected data refreshed:", selectedData);
    }
  }, [selectedData]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    CloseAddModal();
    CloseVEModal();
  };

  return (
    <div className="px-6 py-3">
      <Title title="Institution" onOpen={OpenAddModal} />
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Institution ID",
                "Institution Name",
                "Email ID",
                "SPOC Name",
                "Credit",
                "Date",
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
                  <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
                </td>
                <td className="text-blue-500">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      handleSelectData(row.id);
                      OpenVEModal();
                    }}
                  >
                    <u>{row.institutionId}</u>
                  </p>
                </td>
                <td>
                  <p>{row.institutionName}</p>
                </td>
                <td>
                  <p>{row.email}</p>
                </td>
                <td>
                  <p>{row.spoc}</p>
                </td>
                <td>
                  <p>{row.credit}</p>
                </td>
                <td>
                  <p>{row.date}</p>
                </td>
                <td>
                  <p
                    className={`rounded-lg p-1 m-2 text-base font-semibold ${
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
        totalItems={Data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {addModal && (
        <AddInstitution onClose={CloseAddModal} onClick={onSubmit} />
      )}
      {view_editModal && (
        <VE_Institution
          title="Institution"
          onDataSend={selectedData}
          onClose={CloseVEModal}
          onClick={onSubmit}
        />
      )}
    </div>
  );
};

export default Institution;
