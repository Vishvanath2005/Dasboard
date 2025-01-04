import React from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import User_Schema from "./User_Schema";

const AddUser = ({ onClose, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(User_Schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose();
  };

  const options = [
    { value: "reading", label: "Reading" },
    { value: "writing", label: "Writing" },
    { value: "oral", label: "Oral" },
    { value: "Order", label: "Order" },
    { value: "Seral", label: "Seral" },
    { value: "Pencil", label: "Pencil" },
  ];

  return (
    <div>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[910px]">
          <div className=" items-center relative border-b px-4 py-4">
            <p className="text-xl text-center font-Source_Sans_Pro font-medium">
              Add {title}
            </p>
            <div className="z-20 absolute -top-5 left-[96%]">
              <button
                className=" text-3xl p-3 rounded-full shadow-lg hover:bg-red-300 hover:text-white text-red-600 bg-white w-fit items-center"
                onClick={onClose}
              >
                <MdClose />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-evenly   p-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-12 gap-6 w-full px-0"
            >
              <div className="col-span-6 ">
                <div className="col-span-6 my-2 items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal">
                    Name
                  </label>
                  <div className="col-span-2 flex flex-col">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="text-base text-grey outline-none border border-[#D0D5DD] rounded-md w-60 h-11 px-2"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                    Credits
                  </label>
                  <div className="flex flex-col ">
                    {" "}
                    <input
                      type="text"
                      placeholder="Add Credits"
                      className="col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                      {...register("credits")}
                    />
                    {errors.credits && (
                      <p className="text-red-500 w-60 text-sm">
                        {errors.credits.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-6 flex justify-between my-2  items-center ">
                  <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                    Gender
                  </label>
                  <div className="flex flex-col">
                    <select
                      defaultValue="Select Gender"
                      className=" col-span-2 text-base outline-none  border border-[#D0D5DD] text-grey rounded-md w-60 h-11 px-2 "
                      {...register("gender")}
                    >
                      <option defaultValue=""> select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal ">
                    Date of Birth
                  </label>
                  <div className="flex  flex-col">
                    <input
                      type="date"
                      className=" col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
                      {...register("dateOfBirth")}
                    />
                    {errors.dateOfBirth && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.dateOfBirth.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal ">
                    Age
                  </label>
                  <div className="flex flex-col ">
                    {" "}
                    <input
                      type="text"
                      placeholder="Add Credits"
                      className="col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                      {...register("age")}
                    />
                    {errors.age && (
                      <p className="text-red-500 w-60 text-sm">
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-6 flex justify-between my-2  items-center ">
                  <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                    Departement
                  </label>
                  <div className="flex flex-col ">
                    {" "}
                    <select
                      defaultValue="Select Department"
                      className=" col-span-2 text-base   border border-[#D0D5DD] text-grey rounded-md w-60 h-11 px-2 "
                      {...register("department")}
                    >
                      <option defaultValue=""> select Departement</option>
                      <option value="Dept1">Dept 1</option>
                      <option value="Dept2">Dept 2</option>
                      <option value="Dept3">Dept 3</option>
                    </select>
                    {errors.department && (
                      <p className="text-red-500 w-60 text-sm">
                        {errors.department.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className=" col-span-4 text-[#48505E] text-base font-normal">
                    Email Id{" "}
                  </label>
                  <div className="flex flex-col">
                    {" "}
                    <input
                      type="email"
                      placeholder=" Enter your Email"
                      className=" col-span-2 text-base outline-none text-grey border border-[#D0D5DD] w-60 rounded-md  h-11 px-2 "
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal ">
                    Phone Number
                  </label>
                  <div className=" flex flex-col ">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter your number"
                      className=" col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-6 ">
                <div className="col-span-6 items-center flex justify-between">
                  <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                    Apartment
                  </label>
                  <div className="flex flex-col">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter your Apartment"
                      className="col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                      {...register("apartment")}
                    />
                    {errors.apartment && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.apartment.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                    City
                  </label>
                  <div className="flex flex-col">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter your City"
                      className="col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                      {...register("city")}
                    />
                    {errors.city && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                    State
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                      {...register("state")}
                    />
                    {errors.state && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.state.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                    Pin code
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Enter your Pincode"
                      className="col-span-2 text-base outline-none text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                      {...register("pinCode")}
                    />
                    {errors.pinCode && (
                      <span className="text-red-500 w-60 text-sm">
                        {errors.pinCode.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-6 my-2 items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal">
                    Skills
                  </label>
                  <Select
                    isMulti
                    options={options}
                    className="col-span-2 text-base w-60 text-grey rounded-md h-11"
                    {...register("skills")}
                  />
                  {errors.skills && (
                    <span className="text-red-500 w-60 text-sm">
                      {errors.skills.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                    Strong Areas
                  </label>
                  <Select
                    isMulti
                    options={options}
                    className="col-span-2 text-base w-60   text-grey rounded-md h-11"
                    {...register("strongerAreas")}
                  />
                  {errors.strongerAreas && (
                    <span className="text-red-500 w-60 text-sm">
                      {errors.strongerAreas.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className="col-span-4   text-[#48505E] text-base font-normal  ">
                    Need to improve
                  </label>
                  <Select
                    isMulti
                    options={options}
                    className="col-span-2 text-base w-60  text-grey rounded-md h-11"
                    {...register("needToImprove")}
                  />
                  {errors.needToImprove && (
                    <span className="text-red-500 w-60 text-sm">
                      {errors.needToImprove.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6 my-2  items-center flex justify-between">
                  <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                    Emotional Status
                  </label>
                  <Select
                    isMulti
                    options={options}
                    className="col-span-2 text-base w-60 text-grey rounded-md h-11"
                    {...register("emotionalStatus")}
                  />
                  {errors.emotionalStatus && (
                    <span className="text-red-500 w-60 text-sm">
                      {errors.emotionalStatus.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-12 mb-3 flex justify-between items-center gap-4">
                <label htmlFor="description" className="col-span-2">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  className="col-span-10 text-base outline-none w-full border-2 rounded-lg"
                  rows={4}
                  {...register("description")}
                ></textarea>
                 {errors.description && (
                    <span className="text-red-500 w-60 text-sm">
                      {errors.emotionalStatus.message}
                    </span>
                  )}
              </div>
              <div className="col-span-12 flex justify-center -mx-4 pt-4 border-t gap-3 items-center">
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

export default AddUser;
