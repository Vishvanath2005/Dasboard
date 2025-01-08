import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Title from "../../components/Title";
import leads from "../../assets/Leads.png";
import data from "../../json_data/LeadsData.json";
import EditLeads from "./EditLeads";
import AddFollowup from "./AddFollowup";

const LeadsDetails = () => {
  const [editLeads, setEditLeads] = useState();
  const [addFU, setAddFU] = useState();
  const location = useLocation();
  const { leadsId } = location.state || {};
  const OpenEditLeads = () => setEditLeads(true);
  const CloseEditLeads = () => setEditLeads(false);  
  const OpenAddFU = () => setAddFU(true);
  const CloseFu = () => setAddFU(false);

  const leadsData = data.find((row) => row.id === leadsId);
  console.log(leadsData);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    CloseEditLeads();
    CloseFu()
  };
  return (
    <div>
      <div className="mx-4">
        <Title title="Leads Details" showbutton={false} showfollowup={true} onOpen={OpenAddFU} />
        <div className="grid  gap-6  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 my-4 ">
          <div className=" bg-[#7ABDFF33] rounded-xl drop-shadow-lg  ">
            <div className=" flex justify-between h-36  ">
              <p className="text-[#2337C6] px-5 py-5 font-semibold text-lg font-Source_Sans_Pro">
                Welcome Back!!!
              </p>
            </div>
            <div className=" bg-white flex justify-between items-center rounded-b-lg   ">
              <div className="mx-6">
                <span className="drop-shadow-md shadow-lg grid -mt-10  text-white font-semibold text-4xl bg-[#2337C6] rounded-full  w-20 h-20 items-center justify-center ">
                  {leadsData.name.slice(0, 1).toUpperCase()}
                </span>
                <p className=" my-3 px-3 text-grey font-semibold text-base">
                  {leadsData.name}
                </p>
                <p className="my-3  text-[#D1D1D1] text-base font-normal">
                  {leadsData.phone}
                </p>
              </div>
              <div className="grid -mt-44 mx-6">
                <img src={leads} alt="Image" className="my-6 w-[128px]" />
                <button className=" text-white font-medium text-sm bg-orange rounded-md  py-3" onClick={OpenEditLeads}>
                  Edit Leads
                </button>
              </div>
            </div>
          </div>
          <div className="text-[#2C3E50] font-Source_Sans_Pro flex  flex-col gap-5 bg-white py-5  px-5 rounded-xl  drop-shadow-lg   ">
            <h1 className="font-semibold text-base">Lead Follow Ups</h1>
            <p className="font-normal text-sm">
              {" "}
              Next Follow up on 30/09/2024
              <br />
              <span className="text-[#D1D1D1] text-xs ">
                Zoom meeting link:
              </span>
            </p>
            <p className="font-normal text-sm ">
              Ravikumar | 27/09/2024 | 10:00am
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[#2C3E50] font-Source_Sans_Pro bg-white rounded-xl drop-shadow-lg px-8 py-8">
            <p className="col-span-2 text-xl my-2 font-medium ">Basic Information</p>
            {[
              { header: "Complaint Raised From", value: leadsData.complaint_raised_from },
              { header: "Created Date", value: leadsData.created_at },
              { header: "Email", value: leadsData.email },
              { header: "Address", value: leadsData.address },
              { header: "City", value: leadsData.city },
              { header: "State", value: leadsData.state },
              { header: "Note", value: leadsData.note },
            ].map(({ header, value }) => (
              <React.Fragment key={header}>
                <label className="text-sm font-semibold">{header}:</label>
                <span className="text-sm text-gray-400">{value}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {editLeads && <EditLeads title="Leads" onSendData={leadsData} onClose={CloseEditLeads} onClick={onSubmit}/>}
{addFU && <AddFollowup title="Follow-Up"  onClose={CloseFu} onClick={onSubmit}/>}
    </div>
  );
};

export default LeadsDetails;
