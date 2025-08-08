import React from "react";
import SummaryCardGrid from "../componenets/SummaryCardGrid";
import Ledger from "../componenets/Ledger";
import TransactionTable from "../componenets/TransactionTable";

// Dashboard component that renders the wallet ledger and summary card grid

const Dashboard = () => {
  return (
    <div>
      <Ledger />
      <SummaryCardGrid />
      <TransactionTable />
    </div>
  );
};

export default Dashboard;
