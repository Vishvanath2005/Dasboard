import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEye } from "react-icons/tb";
import data from "../../json_data/InterviewData.json";
import Pagination from "../../components/Pagination";
import VE_Interview from "./VE_Interview";

const Interview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [view_editModal, setView_editModal] = useState(false);
   const [selectedData, setSelectedData] = useState(null);
  const OpenVEModal = () => setView_editModal(true);
  const CloseVEModal = () => setView_editModal(false);
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

  const handleSelectData = (id) => {
    const selected = data.find((interview) => interview.id === id);
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
    <div className="px-6 py-3">
      <Title title="Interview" showbutton={false} />
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Interview ID",
                "Room No",
                "User ID",
                "User Name",
                "Date",
                "Slot time",
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
            {data.map((interview, index) => (
              <tr
                key={interview.id}
                className="text-sm text-center bg-white text-table-text border-b-2 last:rounded-b-lg"
              >
                <td className="py-3">
                  <p>{index + 1}</p>
                </td>
                <td>
                  <p>{interview.interviewId}</p>
                </td>
                <td>
                  <p>{interview.roomNo}</p>
                </td>
                <td>
                  <p>{interview.userId}</p>
                </td>
                <td>
                  <p>{interview.userName}</p>
                </td>
                <td>
                  <p>{interview.date}</p>
                </td>
                <td>
                  <p>{interview.slot_Time}</p>
                </td>
                <td>
                  <p
                    className={`rounded-lg p-1 text-base font-semibold ${
                      interview.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {interview.status}
                  </p>
                </td>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <button className="bg-green-100 text-green-700 rounded-md p-1.5 hover:bg-green-200"
                    onClick={()=>{OpenVEModal();
                      handleSelectData(interview.id);
                    }}>
                      <TbEye className="text-lg" />
                    </button>
                    <button
                      className="bg-red-100 rounded-md text-red-700 p-1.5 hover:bg-red-200"
                      onClick={() => alert(`Delete ${interview.id}`)}
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
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {view_editModal && (
        <VE_Interview
          title="Interview"
          onDataSend={selectedData}
          onClose={CloseVEModal}
          onClick={onSubmit}
        />
      )}
    </div>
  );
};

export default Interview;
