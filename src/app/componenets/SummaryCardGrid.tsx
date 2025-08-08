
"use client";
import React, { useEffect, useState } from "react";
import { cardTitles } from "../lib/cardTitle";
import { dashboard } from "../lib/dashboard";
import SummaryCard from "../ui/summaryCard";

const SummaryCardGrid: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate loading for 2 seconds

    return () => clearTimeout(timeout); // cleanup on unmount
  }, []);

  const cards = cardTitles.cardTitle.map((title, index) => ({
    title,
    labelValues: [dashboard.total[index].labelValue],
    balanceChanges: [dashboard.balance[index].change],
  }));

  return (
    <div className="bg-white">
      <p className="text-2xl font-semibold mb-4 text-[#1B2528] pl-2">Summary</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {cards.map((card, index) => (
          <SummaryCard
            key={index}
            isLoading={isLoading}
            title={card.title}
            labelValues={card.labelValues}
            balanceChanges={card.balanceChanges}
          />
        ))}
      </div>
    </div>
  );
};

export default SummaryCardGrid;
