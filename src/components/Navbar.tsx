import React from "react";
import Search from "./Search";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-[18px] min-h-[86px] bg-white shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-navy">DocLock</h1>
      </div>
      <div className="flex items-center gap-x-9">
        <Search />
        <div className="flex items-center flex-row gap-x-4">
          <div className="flex items-center flex-row gap-x-1">
            <span className="bg-navy p-[10px] rounded-[10px]">
              <img
                src="/public/settings.svg"
                alt="Settings"
                className="w-6 h-6"
              />
            </span>
            <span>
              <img
                src="/public/bell.svg"
                alt="Notifications"
                className="w-6 h-6"
              />
            </span>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
