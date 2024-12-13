import React from "react";
import Title from "../../components/Title";
import { MdOutlineEdit } from "react-icons/md";

const Packages = () => {
  const data = [
    {
      id: 124,
      packageName: "Starter",
      pricing: "Free",
      credit: 200,
      description: "Beginners",
      lastUpdate: "19 June 24, 10.15 AM",
      status: "Active",
    },
    {
      id: 125,
      packageName: "Premium",
      pricing: "$49",
      credit: 500,
      description: "Businesses",
      lastUpdate: "18 June 24, 02.23 PM",
      status: "Inactive",
    },
  ];
  return (
    <div className="px-6 py-3">
      <Title title="Packages" />
      <div className="grid grid-cols-12 gap-4">
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
    </div>
  );
};

export default Packages;
