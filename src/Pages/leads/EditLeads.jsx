import React from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import Leads_Schema from "../../Schema/Leads_Schema";

const EditLeads = ({title,  onSendData, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(Leads_Schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose();
  };

  return (
    <div>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className=" items-center relative border-b px-4 py-6">
            <p className="text-xl text-center font-Source_Sans_Pro font-medium">
              Edit {title}
            </p>
            <div className="z-20 absolute -top-5 left-[95%]">
              <button
                className=" text-3xl p-3 rounded-full shadow-lg hover:bg-red-300 hover:text-white text-red-600 bg-white w-fit items-center"
                onClick={onClose}
              >
                <MdClose />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              <div className="grid grid-cols-3 gap-2 items-center">
                <label
                  htmlFor="complaint_raised_from"
                  className="col-span-1 text-gray-700"
                >
                  Complaint Raised from
                </label>
                <div className="col-span-2">
                  <input
                    id="complaint_raised_from"
                    type="text"
                    placeholder={onSendData.complaint_raised_from}
                    {...register("complaint_raised_from")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.complaint_raised_from
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.complaint_raised_from && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.complaint_raised_from.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="email"
                  className="col-span-1 text-  text-gray-700"
                >
                  Email
                </label>
                <div className="col-span-2">
                  <input
                    id="email"
                    type="text"
                    placeholder={onSendData.email}
                    {...register("email")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
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
                  htmlFor="address"
                  className="col-span-1 text-  text-gray-700"
                >
                  Address
                </label>
                <div className="col-span-2">
                  <input
                    id="address"
                    type="text"
                    placeholder={onSendData.address}
                    {...register("address")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.address
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="city"
                  className="col-span-1 text-  text-gray-700"
                >
                  City
                </label>
                <div className="col-span-2">
                  <input
                    id="city"
                    type="text"
                    placeholder={onSendData.city}
                    {...register("city")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.city
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="state"
                  className="col-span-1 text-  text-gray-700"
                >
                  State
                </label>
                <div className="col-span-2">
                  <input
                    id="state"
                    type="text"
                    placeholder={onSendData.state}
                    {...register("state")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.state
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.state && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.state.message}
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
                    placeholder={onSendData.note}
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
              <div className="flex justify-center -mx-4 pt-4 border-t gap-3 items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>

                <button
                  type="submit"
                  className={`w-fit bg-orange text-white py-2 px-4 rounded-lg transition duration-200 ${
                    !isValid && `opacity-50 cursor-not-allowed`
                  }`}
                  disabled={!isValid}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLeads;
