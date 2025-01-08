import React, { useState } from "react";
import Title from "../../components/Title";

const UsersTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "User Dashboard",
    "Resume Builder Form",
    "Upcoming Interviews",
    "Reports",
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
        {activeTab === 0 && <div>Content for User Dashboard</div>}
        {activeTab === 1 && <div>Content for Resume Builder Form</div>}
        {activeTab === 2 && <div>Content for Upcoming Interviews</div>}
        {activeTab === 3 && <div>Content for Reports</div>}
      </div>
    </div>
  );
};

export default UsersTabs;
