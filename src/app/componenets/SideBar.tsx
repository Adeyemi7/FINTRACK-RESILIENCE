"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "../lib/side";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 h-screen bg-white border-r px-4 py-6 ">
      <nav className="space-y-2 items-start mx-auto flex-col">
        {sidebarMenuItems.map((item) => {
          const path = `/${item.title.toLowerCase()}`;
          const isActive = pathname === path;

          return (
            <Link
              key={item.id}
              href={path}
              className={`block px-4 py-2 rounded-full font-medium transition-colors  ${
                isActive
                  ? "bg-[rgba(52,97,111,0.09)] w-full text-[#3A6C7B]"
                  : "text-[#1B2528] hover:bg-[rgba(52,97,111,0.09)] hover:text-[#3A6C7B]"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
