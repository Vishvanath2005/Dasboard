import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Title from "../../components/Title";

const UsersTabs = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <div className="w-full mx-5">
    {/* Page Title */}
    <Title title="Users" />

    {/* Tabs */}
    <Tabs
      selectedIndex={selectedTabIndex}
      onSelect={(index) => setSelectedTabIndex(index)}
      className="w-full"
    >
      {/* Tab Navigation */}
      <TabList className="flex gap-10 border-b border-gray-300">
        <Tab
          className={` ml-10 text-center py-2 outline-none border border-gray-900  text-gray-500 font-medium cursor-pointer ${
            selectedTabIndex === 0
              ? "border-b-2 border-gray-800 text-gray-900"
              : "hover:text-gray-700"
          }`}
        >
          Users Dashboard
        </Tab>
        <Tab
          className={` text-center py-2 text-gray-500 outline-none font-medium cursor-pointer ${
            selectedTabIndex === 1
              ? "border-b-2 border-gray-800 text-gray-900"
              : "hover:text-gray-700"
          }`}
        >
          Resume
        </Tab>
        <Tab
          className={` text-center py-2 text-gray-500 outline-none font-medium cursor-pointer ${
            selectedTabIndex === 2
              ? "border-b-2 border-gray-800 text-gray-900"
              : "hover:text-gray-700"
          }`}
        >
          Upcoming Interviews
        </Tab>
        <Tab
          className={` text-center py-2 text-gray-500 outline-none font-medium cursor-pointer ${
            selectedTabIndex === 3
              ? "border-b-2 border-gray-800 text-gray-900"
              : "hover:text-gray-700"
          }`}
        >
          Reports
        </Tab>
      </TabList>

      {/* Tab Panels */}
      <TabPanel>
        <div className="p-4">Content for Users Dashboard</div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">Content for Resume</div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">Content for Upcoming Interviews</div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">Content for Reports</div>
      </TabPanel>
    </Tabs>
  </div>
  );
};

export default UsersTabs;
