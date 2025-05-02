import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEye } from "react-icons/tb";
import Data from "../../json_data/EnquriesData.json";
import Pagination from "../../components/Pagination";
import VE_Enquires from "./VE_Enquires";

const Enquires = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [view_editModal, setView_editModal] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const OpenVEModal = () => setView_editModal(true);
  const CloseVEModal = () => setView_editModal(false);

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
    CloseVEModal();
  };

  return (
    <div className="px-3 py-3">
      <Title title="Enquires" showbutton={false} />
      <div className="overflow-x-auto z-0 h-[590px] sm:h-[480px] drop-shadow-lg">
      <table className="w-full min-w-[900px] md:table rounded-lg border border-gray-200">
      <thead className="bg-linear-to-b from-slate-100 to-gray-200 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Name",
                "Phone Number",
                "Email ID",
                "Instition",
                "Subjects",
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
                className="text-sm text-center bg-white text-table-text border-b  last:rounded-b-lg"
              >
                <td className="py-3">
                  <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
                </td>
                <td>
                  <p>{row.name}</p>
                </td>
                <td>
                  <p>{row.phone}</p>
                </td>
                <td>
                  <p>{row.email}</p>
                </td>
                <td>
                  <p>{row.institution}</p>
                </td>
                <td>
                  <p>{row.subject}</p>
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
                  <div className="flex justify-center items-center gap-3">
                    <button
                      className="bg-green-100 text-green-700 rounded-md p-1.5 hover:bg-green-200"
                      onClick={() => {
                        handleSelectData(row.id);
                        OpenVEModal();
                      }}
                    >
                      <TbEye className="text-lg" />
                    </button>
                    <button
                      className="bg-red-100 rounded-md text-red-700 p-1.5 hover:bg-red-200"
                      onClick={() => alert(`Delete ${row.id}`)}
                    >
                      <RiDeleteBin6Line className="text-lg" />
                    </button>
                  </div>
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
      {view_editModal && (
        <VE_Enquires
          title="Enquries"
          onDataSend={selectedData}
          onClose={CloseVEModal}
          onClick={onSubmit}
        />
      )}
    </div>
  );
};

export default Enquires;
