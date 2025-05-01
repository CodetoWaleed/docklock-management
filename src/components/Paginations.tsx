import React from "react";

const Paginations = () => {
  return (
    <div className="flex justify-end px-3 pb-[46px] pl-[40px] pr-[92px]">
      <div className="flex items-center gap-x-2">
        <button className="px-4 py-2 rounded-lg flex flex-row gap-x-2 items-center text-gray-600 hover:text-navy transition">
          <img
            src="/public/arrow-left.svg"
            alt="Previous"
            className="w-2 h-2"
          />
          <span className="text-gray-600">Prev</span>
        </button>

        <button className="px-2 py-2 ">1</button>
        <button className="px-2 py-2 ">2</button>
        <button className="px-2 py-2 ">3</button>
        <span className="px-2 py-2 ">...</span>
        <button className="px-2 py-2 ">41</button>
        <button className="px-2 py-2 rounded-lg flex flex-row gap-x-2 items-center ">
          <span className="">Next</span>
          <img
            src="/public/arrow-right-black.svg"
            alt="Previous"
            className="w-2 h-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Paginations;
