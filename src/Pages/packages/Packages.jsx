import React, { useState } from "react";
import Title from "../../components/Title";
import { MdOutlineEdit } from "react-icons/md";
import data from './PackagesData.json'
import AddPackages from "./AddPackages";
import EditPackages from "./EditPackages";

const Packages = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
      const [selectedData, setSelectedData] = useState(null);
    
  
    const OpenAddModal = () => setAddModal(true);
    const CloseAddModal = () => setAddModal(false);

    const OpenEditModal = () => setEditModal(true);
    const CloseEditModal = () => setEditModal(false);

    const onSubmit = (data) => {
      console.log("Form Data:", data);
      CloseAddModal();
      CloseEditModal();
    };

    const handleSelectData = (id) => {
      const selected = data.find((packages) => packages.id === id);
      setSelectedData(selected);
      console.log(selected);
    };

  return (
    <div className="px-6 py-3">
      <Title title="Packages"
      onOpen={OpenAddModal}  />
      <div className="grid grid-cols-12  gap-4">
        {data.map((row) => (
          <div
            key={row.id}
            className="md:col-span-3 col-span-12 sm:col-span-6 p-4 py-6 rounded-lg border-2 shadow-lg bg-white grid grid-rows-[auto_auto_auto] gap-4"
          >
            <div className="flex justify-between items-center">
              <p
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                  row.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {row.status}
              </p>
              <button
                className="bg-green-100 hover:bg-green-200 p-1 rounded-md"
                aria-label="Edit"
                onClick={()=>{OpenEditModal()
handleSelectData(row.id)
                }}
              >
                <MdOutlineEdit className="text-green-800 text-xl" />
              </button>
            </div>
            <div className="grid grid-cols-12 gap-y-3.5 text-sm text-gray-700">
              <p className="col-span-6 font-medium text-base ">Package ID:</p>
              <p className="col-span-6 text-sm">{row.id}</p>

              <p className="col-span-6 font-medium text-base ">Package Name:</p>
              <p className="col-span-6 text-sm">{row.packageName}</p>

              <p className="col-span-6 font-medium text-base ">Pricing:</p>
              <p className="col-span-6 text-sm">{row.pricing}</p>

              <p className="col-span-6 font-medium text-base ">Credit:</p>
              <p className="col-span-6 text-sm">{row.credit}</p>

              <p className="col-span-6 font-medium text-base ">Description:</p>
              <p className="col-span-6 text-sm">{row.description}</p>

              <p className="col-span-6 font-medium text-base ">Last Updated:</p>
              <p className="col-span-6 text-sm">{row.lastUpdate}</p>
            </div>
          </div>
        ))}
      </div>
      {addModal && (
        <AddPackages onClose={CloseAddModal} onClick={onSubmit} />
      )}
      {editModal && (<EditPackages onClose={CloseEditModal} onClick={onSubmit} onSendData={selectedData}/> )}
    </div>
  );
};

export default Packages;
