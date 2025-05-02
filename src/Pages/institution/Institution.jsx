import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import AddInstitution from "../institution/AddInstitution";
import Pagination from "../../components/Pagination";
import VE_Institution from "./VE_Institution";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Data from "../../json_data/InstitutionData.json";

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

  const itemsPerPage = 10;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = Data.slice(startIndex, startIndex + itemsPerPage);
    setData(selectedData);
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectData = (id) => {
    const selected = data.find((institution) => institution.id === id);
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
    <div className="px-3 py-3">
      <Title title="Institution" onOpen={OpenAddModal} />
      <div className="overflow-x-auto z-0 h-[590px] sm:h-[480px] drop-shadow-lg">
        <table className="w-full min-w-[900px] md:table rounded-lg border border-gray-200">
          <thead className="bg-linear-to-b  from-slate-100 to-gray-200 rounded-t-lg">
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
                <th
                  key={header}
                  className="p-4 font-semibold text-center whitespace-nowrap"
                >
                  <p className="flex justify-center gap-1 items-center">
                    {header} <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="rounded-lg">
            {data.map((institution, index) => (
              <tr
                key={institution.id}
                className="text-sm text-center bg-white text-table-text border-b last:rounded-b-lg"
              >
                <td className="py-3 whitespace-nowrap">
                  <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
                </td>
                <td className="text-blue-500 whitespace-nowrap">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      handleSelectData(institution.id);
                      OpenVEModal();
                    }}
                  >
                    <u>{institution.institutionId}</u>
                  </p>
                </td>
                <td className="whitespace-nowrap">
                  <p>{institution.institutionName}</p>
                </td>
                <td className="whitespace-nowrap">
                  <p>{institution.email}</p>
                </td>
                <td className="whitespace-nowrap">
                  <p>{institution.spoc}</p>
                </td>
                <td className="whitespace-nowrap">
                  <p>{institution.credit}</p>
                </td>
                <td className="whitespace-nowrap">
                  <p>{institution.date}</p>
                </td>
                <td className="whitespace-nowrap">
                  <p
                    className={`rounded-lg p-1 m-2 text-base font-semibold ${
                      institution.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {institution.status}
                  </p>
                </td>
                <td className="whitespace-nowrap">
                  <button
                    className="bg-red-100 rounded-md text-red-700 p-1.5 hover:bg-red-200"
                    onClick={() => alert(`Delete ${institution.id}`)}
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
