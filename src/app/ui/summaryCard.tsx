import React from "react";
import ShareIcon from "../Icons/sharedIcon";

type SummaryCardProps = {
  isLoading: boolean;
  title: string;
  labelValues: number[];
  balanceChanges: number[];
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  isLoading,
  title,
  labelValues,
  balanceChanges,
}) => {
  return (
    <div className="space-y-4 w-full border rounded-2xl p-4 shadow-sm bg-[rgba(52,97,111,0.09)]">
      {/* Header: Title and ShareIcon */}
      <div className="flex items-center justify-between">
        {isLoading ? (
          <div className="h-6 w-1/2 rounded skeleton-shimmer" />
        ) : (
          <h2 className="text-[17px] font-semibold text-[#1B2528]">{title}</h2>
        )}

        {isLoading ? (
          <div className="h-6 w-6 rounded skeleton-shimmer" />
        ) : (
          <ShareIcon className="w-4 h-6 text-[#1B2528]" />
        )}
      </div>

      {/* Label Values */}
      <div className="space-y-1">
        {isLoading
          ? Array(1)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="h-5 w-full rounded skeleton-shimmer" />
              ))
          : labelValues.map((label, index) => (
              <p key={index} className="text-3xl font-bold text-[#1B2528]">
                ${label.toLocaleString()}
              </p>
            ))}
      </div>

      {/* Balance Changes */}
      <div className="space-y-1">
        {isLoading
          ? Array(1)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="h-5 w-full rounded skeleton-shimmer" />
              ))
          : balanceChanges.map((change, index) => (
              <p
                key={index}
                className={`text-base ${
                  change >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {change.toLocaleString()}%
              </p>
            ))}
      </div>
    </div>
  );
};

export default SummaryCard;
