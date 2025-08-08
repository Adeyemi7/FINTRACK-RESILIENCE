import React from "react";
import ActiveIcon from "../Icons/ActiveIcon";
import ArrowUp from "../Icons/ArrowUp";
import Image from "next/image";
import short from "../../../public/Images/short.png";
import shirt from "../../../public/Images/shirt.png";
import individual from "../../../public/Images/individual.png";
import wearing from "../../../public/Images/wearing.png";
import SharedIcon from "../Icons/sharedIcon";

const images = [short, individual, wearing, shirt];

const Ledger = () => {
  return (
    <div className=" pb-4">
      <div className="py-4 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
          {/* Left Block - Wallet Ledger, Arrow & Active */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full">
            <div className="flex items-center gap-2">
              <p className="text-[#1B2528] text-3xl font-semibold">
                Wallet Ledger
              </p>
              <ArrowUp />
            </div>
            <div className="flex items-center gap-2 bg-[rgba(52,97,111,0.09)] px-2 py-1 rounded-full hover:bg-[rgba(52,97,111,0.09)] cursor-pointer">
              <p className="flex items-center gap-2 text-[#1B2528] px-3">
                <span>
                  <ActiveIcon className="animate-ping" />
                </span>
                <span className="text-base font-medium text-[#1B2528]">
                  Active
                </span>
              </p>
            </div>
          </div>

          {/* Right Block - Share & Icon */}
          <div className="flex items-center gap-4 md:justify-end w-full md:w-auto">
            <button className="bg-[#4B8B9F] text-[#1B2528] rounded-full text-base py-1 px-6 font-medium hover:bg-[#3A6C7B] transition-colors w-full md:w-auto">
              Share
            </button>
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full p-2 bg-white hover:bg-[rgba(52,97,111,0.09)] hover:cursor-copy
 border-[1px] border-[#1B2528] transition-colors"
            >
              <SharedIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-4 ">
        <div className="flex items-center gap- w-full">
          <p className="flex items-center justify-center ">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Partners"
                className="w-10 h-10 rounded-full border-2 -ml-4  hover:scale-105 transition-transform duration-300 "
              />
            ))}
          </p>
          <p className=" text-[rgba(21,39,45,62)] text-base font-normal">
            Ava, Liam, Noah + 12 others
          </p>
        </div>
      </div>

      <div className="w-full border-b-2 border-[#E5E7EB]">
        <div className="flex items-center gap-5 ml-5 w-full text-[#1B2528] text-base font-normal">
          <div className="relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#1B2528] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left cursor-pointer">
            <p>Overview</p>
          </div>
          <div className="relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#1B2528] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left cursor-pointer">
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ledger;
