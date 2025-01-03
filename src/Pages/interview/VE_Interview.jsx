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

  const defaultValues = {
    interviewId: onDataSend?.interviewId || "",
    roomNo: onDataSend?.roomNo || "",
    userId: onDataSend?.userId || "",
    userName: onDataSend?.userName || "",
    date: onDataSend?.date || "",
    slot_Time: onDataSend?.slot_Time || "",
    status: onDataSend?.status || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(Interview_Schema),
    mode: "onChange",
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [onDataSend, reset]);

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
                Object.entries(onDataSend).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <label className="p-3 col-span-3 text-start capitalize">
                      {key.replace(/_/g, " ")}
                    </label>
                    <p className="p-3 col-span-3 text-sm text-gray-500 text-end">
                      {value}
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
              {Object.keys(defaultValues).map((key) => (
                <div key={key} className="grid grid-cols-3 gap-4 items-center">
                  <label
                    htmlFor={key}
                    className="col-span-1 text-gray-700 capitalize"
                  >
                    {key.replace(/_/g, " ")}
                  </label>
                  <div className="col-span-2">
                    {key === "slot_Time" || key === "status" ? (
                      <select
                        id={key}
                        {...register(key)}
                        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                          errors[key]
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-300 focus:ring-blue-300"
                        }`}
                      >
                        <option value="">Select {key.replace(/_/g, " ")}</option>
                        {key === "slot_Time" && (
                          <>
                            <option value="60">60 minutes</option>
                            <option value="120">120 minutes</option>
                            <option value="180">180 minutes</option>
                          </>
                        )}
                        {key === "status" && (
                          <>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                          </>
                        )}
                      </select>
                    ) : (
                      <input
                        id={key}
                        type={key === "date" ? "date" : "text"}
                        placeholder={`Enter ${key.replace(/_/g, " ")}`}
                        {...register(key)}
                        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                          errors[key]
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-300 focus:ring-blue-300"
                        }`}
                      />
                    )}
                    {errors[key] && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors[key]?.message}
                      </p>
                    )}
                  </div>
                </div>
              ))}
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
