import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Interview_Schema } from "./Interview_Schema";

const VE_Interview = ({ title, onClose, onDataSend }) => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpenFirstModal = () => setIsFirstModalOpen(true);
  const handleCloseFirstModal = () => setIsFirstModalOpen(false);

  const handleOpenSecondModal = () => setIsSecondModalOpen(true);
  const handleCloseSecondModal = () => setIsSecondModalOpen(false);

  const Edit = () => {
    handleCloseFirstModal();
    handleOpenSecondModal();
  };

  const Back = () => {
    handleCloseSecondModal();
    handleOpenFirstModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(Interview_Schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose();
  };

  return (
    <div>
      {isFirstModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="items-center relative border-b px-4 py-8">
              <p className="text-2xl text-center font-Source_Sans_Pro font-medium">
                View {title}
              </p>
              <div className="z-20 absolute -top-6 left-[94%]">
                <button
                  className="text-3xl p-3 rounded-full shadow-lg hover:bg-red-300 hover:text-white text-red-600 bg-white"
                  onClick={onClose}
                >
                  <MdClose />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 items-center p-3">
              {onDataSend &&
                [
                  { header: "Interviewitution ID", value: onDataSend.interviewId },
                  { header: "Room No", value: onDataSend.roomNo },
                  { header: "User ID", value: onDataSend.userId },
                  { header: "User Name", value: onDataSend.userName },
                  { header: "Date", value: onDataSend.date },
                  { header: "Slot Time", value: onDataSend.slot_Time },
                  { header: "Status", value: onDataSend.status },
                ].map(({ header, value }) => (
                  <React.Fragment key={header}>
                    <label className="p-3 col-span-3 font text-start">
                      {header}
                    </label>
                    <p className={`p-3 col-span-3 text-end text-sm `}>
                      <span
                        className={`${
                          header === "Status"
                            ? `text-end p-2 rounded-md font-medium ${
                                value === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`
                            : "text-gray-500 text-end"
                        }`}
                      >
                        {value}
                      </span>
                    </p>
                  </React.Fragment>
                ))}
            </div>
            <div className="flex justify-center gap-5 py-5 border-t">
              <button
                onClick={onClose}
                className="px-4 py-2 border-orange border text-orange rounded-md"
              >
                Close
              </button>
              <button
                onClick={Edit}
                className="px-4 py-2 bg-orange rounded-md text-white"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {isSecondModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="items-center relative border-b px-4 py-6">
              <p className="text-xl text-center font-Source_Sans_Pro font-medium">
                Edit {title}
              </p>
              <div className="z-20 absolute -top-6 left-[94%]">
                <button
                  className="text-3xl p-3 rounded-full shadow-lg hover:bg-red-300 hover:text-white text-red-600 bg-white"
                  onClick={onClose}
                >
                  <MdClose />
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-6 mx-5 mt-6"
            >
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="interviewId"
                  className="col-span-1 text-start text-gray-700"
                >
                  Interview ID
                </label>
                <div className="col-span-2">
                <div className="col-span-2">
                  <input
                    id="interviewId"
                    type="text"
                    {...register("interviewId")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg  bg-gray-100 text-gray-700 border-gray-300 ${
                      errors.interviewId 
                        ? "border-red-500 "
                        : "border-gray-300 "
                    }`}
                  />
                  {errors.interviewId  && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.interviewId .message}
                    </p>
                  )}
                </div>
                </div>
                <label
                  htmlFor="roomNo"
                  className="col-span-1 text-start text-gray-700"
                >
                  Room No
                </label>
                <div className="col-span-2">
                  <input
                    id="roomNo"
                    type="text"
                    placeholder="Number"
                    {...register("roomNo")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg  bg-gray-100 text-gray-700 border-gray-300 ${
                      errors.roomNo
                        ? "border-red-500 "
                        : "border-gray-300 "
                    }`}
                  />
                  {errors.roomNo && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.roomNo.message}
                    </p>
                  )}
                </div>
                <label
                  htmlFor="userId"
                  className="col-span-1 text-start text-gray-700"
                >
                  User ID
                </label>
                <div className="col-span-2">
                  <input
                    id="userId"
                    type="text"
                    {...register("userId")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg  bg-gray-100 text-gray-700 border-gray-300 ${
                      errors.userId
                        ? "border-red-500 "
                        : "border-gray-300"
                    }`}
                  />
                  {errors.userId && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.userId.message}
                    </p>
                  )}
                </div>
                <label
                  htmlFor="userName"
                  className="col-span-1 text-start text-gray-700"
                >
                  User Name
                </label>
                <div className="col-span-2">
                  <input
                    id="userName"
                    type="text"
                    placeholder="Name"
                    {...register("userName")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg  bg-gray-100 text-gray-700 border-gray-300 ${
                      errors.userName
                        ? "border-red-500"
                        : "border-gray-300 "
                    }`}
                  />
                  {errors.userName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.userName.message}
                    </p>
                  )}
                </div>
                <label
                  htmlFor="slot_Time"
                  className="col-span-1 text-start text-gray-700"
                >
                  Slot Time
                </label>
                <div className="col-span-2">
                  <select
                    id="slot_Time"
                    {...register("slot_Time")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.slot_Time
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  >
                    <option value="">--Select Time--</option>
                    <option value="60">9 AM - 10 AM</option>
                    <option value="120">10 AM - 11 AM</option>
                    <option value="180">11 AM - 12 PM</option>
                  </select>
                  {errors.slot_Time && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.slot_Time.message}
                    </p>
                  )}
                </div>
                <label
                  htmlFor="status"
                  className="col-span-1 text-start text-gray-700"
                >
                  Status
                </label>
                <div className="col-span-2">
                  <select
                    id="status"
                    {...register("status")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.status
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  >
                    <option value="">--Select Status--</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {errors.status && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.status.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center -mx-5 py-4 border-t gap-3 items-center">
                <button
                  type="button"
                  onClick={Back}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className={`w-fit bg-orange text-white py-2 px-4 rounded-lg transition duration-200 ${
                    !isValid && "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!isValid}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VE_Interview;
