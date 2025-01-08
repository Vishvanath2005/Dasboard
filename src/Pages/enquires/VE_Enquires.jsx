import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Enquries_Schema } from "../../Schema/Enquries_Schema";

const VE_Enquires = ({ title, onClose, onDataSend }) => {
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
    resolver: yupResolver(Enquries_Schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("Data:", data);
    console.log("Form Data:", JSON.stringify(data));
    onClose();
  };

  return (
    <div>
      {isFirstModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className=" items-center relative border-b px-4 py-8">
              <p className="text-2xl text-center font-Source_Sans_Pro font-medium">
                View {title}
              </p>
              <div className="z-20 absolute -top-6 left-[94%]">
                <button
                  className=" text-3xl p-3 rounded-full shadow-lg hover:bg-red-300 hover:text-white text-red-600 bg-white w-fit items-center"
                  onClick={onClose}
                >
                  <MdClose />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-6 items-center p-3">
              {onDataSend &&
                [
                  { header: "Name", value: onDataSend.name },
                  { header: "Phone Number", value: onDataSend.phone },
                  { header: "Email ID", value: onDataSend.email },
                  { header: "Institution", value: onDataSend.institution },
                  { header: "Subject", value: onDataSend.subject },
                  { header: "Status", value: onDataSend.status },
                  { header: "Date", value: onDataSend.date },
                  { header: "Note", value: onDataSend.note },
                ].map(({ header, value }) => (
                  <React.Fragment key={header}>
                    <label className="p-3 col-span-3  font text-start">
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
            <div className="flex justify-center gap-5 py-5 border-t ">
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
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md ">
            <div className=" items-center relative border-b px-4 py-6">
              <p className="text-xl text-center font-Source_Sans_Pro font-medium">
                Edit {title}
              </p>
              <div className="z-20 absolute -top-6 left-[94%]">
                <button
                  className=" text-3xl p-3 rounded-full shadow-lg hover:bg-red-300 hover:text-white text-red-600 bg-white w-fit items-center"
                  onClick={onClose}
                >
                  <MdClose />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center py-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 w-full px-6 "
              >
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label
                    htmlFor="name"
                    className="col-span-1 text-start text-gray-700"
                  >
                    Name
                  </label>
                  <div className="col-span-2">
                    <input
                      id="name"
                      type="text"
                      placeholder={onDataSend.name}
                      {...register("institution_name")}
                      className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="phone" className="col-span-1 text-gray-700">
                    Phone Number
                  </label>
                  <div className="col-span-2">
                    <input
                      id="phone"
                      type="text"
                      placeholder={onDataSend.phone}
                      {...register("phone")}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="email" className="col-span-1 text-gray-700">
                    Email
                  </label>
                  <div className="col-span-2">
                    <input
                      id="email"
                      type="email"
                      placeholder={onDataSend.email}
                      {...register("email")}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label
                    htmlFor="institution"
                    className="col-span-1 text-gray-700"
                  >
                    Institution
                  </label>
                  <div className="col-span-2">
                    <input
                      id="institution"
                      type="text"
                      placeholder={onDataSend.institution}
                      {...register("institution")}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.address
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.institution && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.institution.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="subject" className="col-span-1 text-gray-700">
                    Subject
                  </label>
                  <div className="col-span-2">
                    <input
                      id="subject"
                      type="text"
                      placeholder={onDataSend.subject}
                      {...register("subject")}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="status" className="col-span-1 text-gray-700">
                    Status
                  </label>
                  <div className="col-span-2">
                    <select
                      id="status"
                      {...register("status")}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.status
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    >
                      <option value="" disabled selected>
                        {onDataSend.status || "Select a status"}
                      </option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                    {errors.status && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.status.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="date" className="col-span-1 text-gray-700">
                    Date
                  </label>
                  <div className="col-span-2">
                    <input
                      id="date"
                      type="date"
                      placeholder={onDataSend.date}
                      {...register("date")}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.date
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.date && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="note" className="col-span-1 text-gray-700">
                    Note
                  </label>
                  <div className="col-span-2">
                    <textarea
                      id="note"
                      placeholder={onDataSend.note}
                      {...register("note")}
                      rows="4"
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.note
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.note && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.note.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center gap-4 pt-4 -mx-6 border-t">
                  <button
                    type="button"
                    onClick={Back}
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={`px-6 py-2 bg-orange text-white rounded-lg transition duration-200 ${
                      !isValid ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!isValid}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VE_Enquires;
