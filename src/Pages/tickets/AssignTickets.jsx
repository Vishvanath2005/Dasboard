import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Title from "../../components/Title";
import data from "../tickets/TicketsData.json";
import { IoCameraOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const AssignTickets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticketId } = location.state || {};

  const ticketData = data.find((row) => row.ticketId === ticketId);
  console.log(ticketData);

  const handlenavigate = () => {
    navigate(`/tickets`);
  };
  return (
    <div className="mx-4">
      <Title
        title="Tickets"
        Data={ticketData}
        showassign_dd={true}
        showbutton={false}
      />
      {ticketData && (
        <div className="grid grid-cols-12  gap-2">
          <div className="col-span-7 bg-white p-6 rounded-lg shadow">
            <p className="text-lg font-bold mb-6">Ticket Details</p>
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4 pb-2">
                <p className=" col-span-5">Ticket ID</p>
                <p className="font-semibold  text-gray-400 text-end col-span-7">
                  {ticketData.ticketId}
                </p>
              </div>
              <div className="grid grid-cols-12 gap-4 pb-2">
                <p className=" col-span-5">Name</p>
                <p className="font-semibold text-gray-400 text-end col-span-7">
                  {ticketData.ticketName}
                </p>
              </div>
              <div className="grid grid-cols-12 gap-4 pb-2">
                <p className=" col-span-5">Complaint</p>
                <p className="font-semibold text-gray-400 text-end col-span-7">
                  {ticketData.complaint}
                </p>
              </div>
              <div className="grid grid-cols-12 gap-4 pb-2">
                <p className=" col-span-5">Priority</p>
                <p className="font-semibold text-gray-400 text-end col-span-7">
                  {ticketData.priority}
                </p>
              </div>
              <div className="grid grid-cols-12 gap-4 pb-2">
                <p className="t col-span-5">Date & Time</p>
                <p className="font-semibold text-gray-400 text-end col-span-7">
                  {
                    ticketData.history.sort(
                      (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
                    )[0]?.dateTime
                  }
                </p>
              </div>
              <div className="flex justify-between pb-2">
                <p className=" flex-grow">Status</p>
                <span className="px-3 py-1 rounded-md text-sm font-semibold bg-green-100 text-green-600 flex-shrink-0">
                  {ticketData.status}
                </span>
              </div>
              <div className="grid grid-cols-12 gap-4 pb-2">
                <p className=" mb-2 col-span-5">Note</p>
                <p className="text-gray-400 text-end font-medium col-span-7">
                  {ticketData.note}
                </p>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-4">
                <label className="font-medium col-span-2">Replay</label>
                <div className="flex items-center text-end p-2 border rounded-lg w-full gap-2 col-span-10">
                  <input type="text" className="outline-none w-full" />
                  <p className="hover:bg-orange hover:rounded-full hover:p-1.5">
                    <IoCameraOutline className="text-2xl hover:text-white" />
                  </p>
                  <p className="hover:bg-orange hover:rounded-full hover:p-1.5">
                    <VscSend className="text-xl hover:text-white" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 bg-white rounded-lg shadow">
            <p className="text-lg bg-gray-200  rounded-t-lg p-4 font-bold mb-3">
              Complaint History
            </p>
            <div className="p-3 space-y-2 ">
              {ticketData.history.map((entry, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 pb-2">
                  <p className="text-gray-500 border-r border-black">
                    {entry.dateTime}
                  </p>
                  <p className="text-gray-700 text-end">{entry.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mb-2">
        <button
          className="px-4 py-1.5 rounded-md text-white mt-8  bg-orange"
          onClick={handlenavigate}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AssignTickets;
