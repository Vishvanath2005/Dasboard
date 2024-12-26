import React from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { Packages_Schema } from "./Packages_Schema";

const AddPackages = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(Packages_Schema),
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
              Add Packages
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
          <div className="flex items-center justify-center py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="name"
                  className="col-span-1 text-start  text-gray-700"
                >
                  Package Name
                </label>
                <div className="col-span-2">
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your Package name"
                    {...register("packages_name")}
                    className={`w-full px-4 py-2.5 border text-sm rounded-lg focus:outline-none focus:ring-2 ${
                      errors.packages_name
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.packages_name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.packages_name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4  items-center">
                <label htmlFor="pricing" className="col-span-1 text-gray-700">
                  Pricing
                </label>
                <div className="col-span-2">
                  <input
                    id="pricing"
                    type="text"
                    placeholder="Enter Pricing"
                    {...register("pricing")}
                    className={`w-full px-4  py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.pricing
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.pricing && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.pricing.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4  items-center">
                <label htmlFor="credit" className="col-span-1 text-gray-700">
                  Credit
                </label>
                <div className="col-span-2">
                  <input
                    id="credit"
                    type="text"
                    placeholder="Enter your Credit value"
                    {...register("credit")}
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.credit
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.credit && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.credit.message}
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
                      placeholder="Description"
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
              <div className="flex justify-center -mx-12 pt-4 border-t gap-3 items-center">
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

export default AddPackages;
