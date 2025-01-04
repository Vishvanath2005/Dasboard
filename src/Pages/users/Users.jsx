import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEye } from "react-icons/tb";
import data from "./UsersData.json";
import Pagination from "../../components/Pagination";
import AddUser from "./AddUser";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const itemsPerPage = 5;

  const OpenAddModal = () => setAddModal(true);
  const CloseAddModal = () => setAddModal(false);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    setDatas(selectedData);
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

const handleUT =()=>{
 navigate(`/users/users_tab`)
}

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    CloseAddModal();
  };

  return (
    <div className="px-6 py-3">
      <Title title="Users" onOpen={OpenAddModal}/>
      <div className="overflow-x-auto no-scrollbar drop-shadow-lg">
        <table className="w-full items-center hidden md:table rounded-lg border border-gray-200 overflow-hidden">
          <thead className="bg-gradient-to-b from-slate-100 to-gray-200 border-2 rounded-t-lg">
            <tr>
              {[
                "S.No",
                "Admin ID",
                "Name",
                "Phone Number",
                "Email ID",
                "Institution",
                "Credit",
                "Status",
                "Interview Attempt",
                "Action",
              ].map((header) => (
                <th key={header} className="p-4 font-semibold text-center">
                  <p className="text-sm flex justify-center gap-1 items-center">
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
                    <u>{row.adminID}</u>
                  </p>
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
                  <p>{row.credit}</p>
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
                  <p>{row.interview_attempt}</p>
                </td>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <button className="bg-green-100 text-green-700 rounded-md p-1.5 hover:bg-green-200"
                    onClick={handleUT}>
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
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
       {addModal && (<AddUser title="Users" onClose={CloseAddModal} onClick={onSubmit}/>)}
    </div>
  );
};

export default Users;
