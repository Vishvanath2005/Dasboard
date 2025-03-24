import React, { useState } from "react";
import Title from "../../components/Title";
import User_Dashboard from "./tabs/User_Dashboard";
import Resume from "./tabs/Resume";
import Upcoming_Interview from "./Tabs/Upcoming_Interviews"
import Reports from "./Tabs/Reports";
import View_Reports from "./Tabs/View_Reports";

const UsersTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "User Dashboard",
    "Resume Builder Form",
    "Upcoming Interviews",
    "Reports",
    "View_Reports"
  ];

  return (
    <div className="w-auto mx-6">
      <Title title={`Users / ${tabs[activeTab]}`} showbutton={false} />
      <div className="flex gap-10 mx-2 border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`space-x-6 py-2 text-lg text-center mb-2 font-medium ${
              activeTab === index
                ? "border-b-2 border-orange text-orange"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-2 ">
        {activeTab === 0 && <div><User_Dashboard /></div>}
        {activeTab === 1 && <div><Resume /></div>}
        {activeTab === 2 && <div> <Upcoming_Interview /> </div>}
        {activeTab === 3 && <div><Reports /></div>}
        {activeTab === 4 && <div><View_Reports /></div>}
      </div>
    </div>
  );
};

export default UsersTabs;
