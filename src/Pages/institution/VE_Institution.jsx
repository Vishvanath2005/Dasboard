import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";

const VE_Institution = ({ title, onClose, onDataSend }) => {
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

  const Back =()=>{
    handleCloseSecondModal();
     handleOpenFirstModal();
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose()
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
            <div className="grid grid-cols-6 gap-3 p-3">
                {onDataSend && (
                  [
                    { header: "Institution ID", value: onDataSend.id },
                    {
                      header: "Institution Name",
                      value: onDataSend.institutionName,
                    },
                    { header: "Email ID", value: onDataSend.email },
                    { header: "SPOC Name", value: onDataSend.spoc },
                    { header: "Credit", value: onDataSend.credit },
                    { header: "Date", value: onDataSend.date },
                    { header: "Status", value: onDataSend.status },
                  ].map(({ header, value }) => (
                    <React.Fragment key={header}>
                      <label className="p-4 flex justify-between col-span-3  font-semibold text-start">
                        <span>{header}</span> <span>:</span>
                      </label>
                      <p className="p-4 col-span-3 flex">{value}</p>
                    </React.Fragment>
                  ))
                ) }
              </div>
              <div className="flex justify-center gap-5 py-5 border-t ">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
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
            <div className="flex items-center justify-center p-4">
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="name" className="col-span-1 font-semibold text-gray-700">
                    Institution Name
                  </label>
                  <div className="col-span-2">
                    <input
                      id="name"
                      type="text"
                      {...register("institution_name")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.institution_name
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.institution_name && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.institution_name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label htmlFor="email" className="col-span-1 font-semibold text-gray-700">
                    Email
                  </label>
                  <div className="col-span-2">
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
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
                <div className="grid grid-cols-3 gap-4 font-semibold items-center">
                  <label htmlFor="address" className="col-span-1 text-gray-700">
                    Address
                  </label>
                  <div className="col-span-2">
                    <input
                      id="address"
                      type="text"
                      {...register("address")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
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
                <div className="grid grid-cols-3 gap-4 font-semibold items-center">
                  <label
                    htmlFor="district"
                    className="col-span-1 text-gray-700"
                  >
                    District
                  </label>
                  <div className="col-span-2">
                    <input
                      id="district"
                      type="text"
                      {...register("district")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.district
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.district && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.district.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 font-semibold items-center">
                  <label htmlFor="state" className="col-span-1 text-gray-700">
                    State
                  </label>
                  <div className="col-span-2">
                    <input
                      id="state"
                      type="text"
                      {...register("state")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
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
                <div className="grid grid-cols-3 gap-4 font-semibold items-center">
                  <label
                    htmlFor="SPOC_name"
                    className="col-span-1 text-gray-700"
                  >
                    SPOC Name
                  </label>
                  <div className="col-span-2">
                    <input
                      id="SPOC_name"
                      type="text"
                      {...register("SPOC_name")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.SPOC_name
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.SPOC_name && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.SPOC_name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 font-semibold items-center">
                  <label
                    htmlFor="SPOC_phone"
                    className="col-span-1 text-gray-700"
                  >
                    SPOC Phone Number
                  </label>
                  <div className="col-span-2">
                    <input
                      id="SPOC_phone"
                      type="text"
                      {...register("SPOC_phone")}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.SPOC_phone
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-300"
                      }`}
                    />
                    {errors.SPOC_phone && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.SPOC_phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center gap-3 items-center">
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
                      !isValid && `opacity-50 cursor-not-allowed`
                    }`}
                    disabled={!isValid}
                  >
                    Submit
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

export default VE_Institution;
