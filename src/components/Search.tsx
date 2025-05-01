import React from "react";

const Search = () => {
  return (
    <div className="flex items-center py-3 px-5 rounded-full border bg-gray-light border-gray-300 min-w-[276px]">
      <img
        src="/public/search.svg"
        alt="Search Icon"
        className=" text-gray-400 h-6 w-6"
      />
      <input
        type="text"
        placeholder="Search anything here"
        className="rounded-full bg-transparent text-sm focus:outline-none"
      />
    </div>
  );
};

export default Search;
