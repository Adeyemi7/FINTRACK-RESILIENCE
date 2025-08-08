import React from "react";
import DashboardHeader from "./componenets/DashboardHeader";
import Sidebar from "./componenets/SideBar";
import Dashboard from "./Dasboard/Dashboard";

const page = () => {
  return (
    <>
      {/* Fixed Header */}
      <div className="w-full h-16 p-4 fixed top-0 z-10 bg-white shadow">
        <DashboardHeader />
      </div>

      {/* Main content below fixed header */}
      <main className="flex bg-white w-full min-h-screen pt-24">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="p-4 bg-white w-full">
          <Dashboard />
        </div>
      </main>
    </>
  );
};

export default page;
