import React from "react";
import { FaClock, FaPlus, FaGlobe, FaChartBar } from "react-icons/fa";

const View_Reports = () => {
  const scores = Array(6).fill({
    previous: 100,
    current: 100,
    needToImprove: "Skill",
    result: "Skill",
  });

  return (
    <div className=" bg-gray-100 min-h-screen">
      {/* Top Statistics */}
      <div className="grid grid-cols-12 gap-2 pb-3">
        {[
          ["Core Q & A Correctness", 12, <FaClock size={24} />],
          ["Non Core Q & A Correctness", 12, <FaPlus size={24} />],
          ["Communication Level", "12%", <FaGlobe size={24} />],
          ["Confident Level", "12%", <FaChartBar size={24} />],
        ].map(([title, value, icon], index) => (
          <div
            key={index}
            className="bg-white flex p-4 rounded-lg shadow-sm text-center col-span-3 gap-3 items-center"
          >
            <div className="text-blue-500 p-2 bg-gray-200 rounded-full m-2">
              {icon}
            </div>
            <span>
              <p className="text-gray-500">{title}</p>
              <p className="text-2xl text-start font-semibold">{value}</p>
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 space-y-1 p-2 rounded-md shadow-md bg-white">
          <p className="font-semibold text-xl font-Source_Sans_Pro ">
            Detailed Reports
          </p>
          <div className=" text-gray-600 space-y-1 ">
            {[
              ["Interview ID", "#6347839"],
              ["Room", "6489368"],
              ["Date", "29.09.2024"],
              ["Slot", "Slot"],
              ["Interviewer Category", "Category"],
              ["Interview Level", "Level"],
              ["Expertise Level", "Level"],
              ["Interview Duration", "00:30"],
              ["Emotional Status", "Status"],
              ["Score Result", "Results"],
            ].map(([label, value], index) => (
              <div
                className="grid grid-cols-2 border-b border-stone-200"
                key={index}
              >
                <p className="font-medium text-bse col-span-1">{label}:</p>
                <p className="col-span-1 text-end text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-8 ">
          <table className="w-full items-center  md:table rounded-lg border border-gray-200 overflow-hidden">
            <thead className="bg-linear-to-b from-slate-100 to-gray-200 rounded-t-lg">
              <tr>
                {[
                  "S.No",
                  "Previous Score",
                  "Current Score",
                  "Need to  Inprove",
                  "Results",
                ].map((header) => (
                  <th key={header} className="p-4 font-semibold text-center">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="rounded-lg">
              <tr
                className={`text-sm text-center bg-white text-table-text border-b
                             "bg-gray-200" : "hover:bg-gray-100 cursor-pointer`}
              >
                <td className="py-3">
                <p>1</p>
                </td>
                <td className="text-blue-500">
                  <p className="">
                    <span className="bg-green-200 text-green-600 px-1.5 py-0.5 rounded-md">
                      100{" "}
                    </span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className="bg-green-200 text-green-600 px-1.5 py-0.5 rounded-md">
                      100
                    </span>
                  </p>
                </td>
                <td>
                  <p>Skill</p>
                </td>
                <td>
                  <p>Skill </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View_Reports;
