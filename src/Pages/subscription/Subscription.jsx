import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import data from "./SubscriptionData.json";
import Pagination from "../../components/Pagination";
import AddSubscription from "./AddSubscription";
import VE_Subscription from "./VE_Subscription"

const Subscription = () => {
  const [addModal, setAddModal] = useState(false);
  const [view_editModal, setView_editModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [datas, setDatas] = useState([]);

  const OpenAddModal = () => setAddModal(true);
  const CloseAddModal = () => setAddModal(false);
  const OpenVEModal = () => setView_editModal(true);
  const CloseVEModal = () => setView_editModal(false);

  const itemsPerPage = 5;
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    setDatas(selectedData);
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (id) => {
    const selected = data.find((subscription) => subscription.subscriptionID === id);
    setSelectedData(selected);
    setSelectedId(id);
    console.log(selected);
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    alert(`Delete lead with ID: ${id}`);
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
      <Title title="Subscription" onOpen={OpenAddModal} />
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
            {data.map((subscription, index) => (
              <tr
                key={subscription.id}
                className={`text-sm text-center bg-white text-table-text border-b-2 
               ${
                 selectedId === subscription.ticketId
                   ? "bg-gray-200"
                   : "hover:bg-gray-100"
               } cursor-pointer`}
                onClick={() => {
                  handleRowClick(subscription.subscriptionID);
                  OpenVEModal();
                }}
              >
                <td className="py-3">
                  <p>{index + 1}</p>
                </td>
                <td className="text-blue-500">
                  <p className="cursor-pointer">
                    <u>{subscription.subscriptionID}</u>
                  </p>
                </td>
                <td>
                  <p>{subscription.name}</p>
                </td>
                <td>
                  <p>{subscription.category}</p>
                </td>
                <td>
                  <p>{subscription.date_Time}</p>
                </td>
                <td>
                  <p>{subscription.payment_Mode}</p>
                </td>
                <td>
                  <p>{subscription.transaction_Details}</p>
                </td>
                <td>
                  <p
                    className={`rounded-lg p-1 text-base font-semibold ${
                      subscription.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {subscription.status}
                  </p>
                </td>
                <td>
                  <button
                    className="bg-red-100 rounded-md text-red-700 p-1.5 hover:bg-red-200"
                    onClick={(e) => handleDelete(subscription.id, e)}
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
      {addModal && (
        <AddSubscription
          onClose={CloseAddModal}
          onClick={onSubmit}
          title="Subscription"
        />
      )}
      {view_editModal && (
        <VE_Subscription
          title="Subscription"
          onDataSend={selectedData}
          onClose={CloseVEModal}
          onClick={onSubmit}
        />
      )}
    </div>
  );
};

export default Subscription;
