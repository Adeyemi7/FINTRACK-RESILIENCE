import React from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import LogoIcon from "../Icons/LogoIcon";
import SearchIcon from "../Icons/searchIcon";
import GridIcon from "../Icons/GridIcon";
import Image from "next/image";
import professional from "../../../public/Images/professional.png";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between w-full h-full">
      <div className="w-full  justify-between">
        <div className=" flex items-centre justify-between bg-white shadow-md">
          <div className="flex items-center gap-6 left  p-4 w-full">
            <HamburgerMenu />
            <LogoIcon />
          </div>

          <div className="flex items-center justify-end pr-5 gap-6 w-full">
            <SearchIcon />
            <GridIcon />
            <Image
              src={professional}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
