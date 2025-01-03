import React from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import Subscription_Schema from "./Subscription_Schema";

const AddSubscription = ({ onClose, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(Subscription_Schema),
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
              Add {title}
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
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="name"
                  className="col-span-1 text-  text-gray-700"
                >
                  Name
                </label>
                <div className="col-span-2">
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
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
                <label htmlFor="category" className="col-span-1 text-gray-700">
                  Category
                </label>
                <div className="col-span-2">
                  <select
                    id="category"
                    {...register("category")}
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.category
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  >
                    <option value="">--Select Category--</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                  {errors.category && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.category.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="paymentMode"
                  className="col-span-1 text-gray-700"
                >
                  Payment Mode
                </label>
                <div className="col-span-2">
                  <select
                    id="paymentMode"
                    {...register("paymentMode")}
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.paymentMode
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  >
                    <option value="">--Select Payment Mode--</option>
                    <option value="PhonePay">PhonePay</option>
                    <option value="GPay">GPay</option>
                    <option value="Card">Card</option>
                    <option value="Cash">Cash</option>
                  </select>
                  {errors.paymentMode && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.paymentMode.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="transactionDetails"
                  className="col-span-1  text-gray-700"
                >
                  transaction Details
                </label>
                <div className="col-span-2">
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter your Transaction Details"
                    {...register("transactionDetails")}
                    className={`w-full px-4  py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.transactionDetails
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.transactionDetails && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.transactionDetails.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <label
                  htmlFor="paymentStatus"
                  className="col-span-1 text-gray-700"
                >
                  Payment Status
                </label>
                <div className="col-span-2">
                  <select
                    id="paymentStatus"
                    {...register("paymentStatus")}
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.paymentStatus
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  >
                    <option value="">--Select Category--</option>
                    <option value="online">Online</option>
                    <option value="website">Website</option>
                  </select>
                  {errors.paymentStatus && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.paymentStatus.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4  items-center">
                <label htmlFor="package" className="col-span-1 text-gray-700">
                  Package
                </label>
                <div className="col-span-2">
                  <input
                    id="package"
                    type="text"
                    placeholder="Enter the package "
                    {...register("package")}
                    className={`w-full px-4  py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.package
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  {errors.package && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.package.message}
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
                    placeholder="Enter the Credits"
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
              <div className="flex justify-center -mx-7 pt-4 border-t gap-3 items-center">
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

export default AddSubscription;
