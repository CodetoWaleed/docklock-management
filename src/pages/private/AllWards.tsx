import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Paginations from "../../components/Paginations";

const AllWards = () => {
  const wards = [
    {
      name: "Surgical Male",
      totalBeds: 40,
      admissions: 35,
      location: "Surgical Female, B23",
    },
    {
      name: "Surgical Female",
      totalBeds: 40,
      admissions: 12,
      location: "Surgical Female, B23",
    },
    {
      name: "ENT Male",
      totalBeds: 40,
      admissions: 21,
      location: "Surgical Female, B23",
    },
    {
      name: "ENT Female",
      totalBeds: 40,
      admissions: 21,
      location: "Surgical Female, B23",
    },
    {
      name: "Ortho Male",
      totalBeds: 40,
      admissions: 23,
      location: "Surgical Female, B23",
    },
    {
      name: "Ortho Female",
      totalBeds: 40,
      admissions: 16,
      location: "Surgical Female, B23",
    },
    {
      name: "Gyne",
      totalBeds: 40,
      admissions: 8,
      location: "Surgical Female, B23",
    },
    {
      name: "Emergency",
      totalBeds: 40,
      admissions: 15,
      location: "Surgical Female, B23",
    },
    {
      name: "ICT",
      totalBeds: 40,
      admissions: 15,
      location: "Surgical Female, B23",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 pl-64 h-full">
        {/* Navbar */}
        <Navbar />

        {/* All Wards Content */}
        <div className="px-3 pb-[46px] pl-[40px] pr-[92px]">
          <div className="pt-[46px] flex flex-row justify-between items-center">
            <div>
              <h2 className="text-[32px] font-bold">
                All Wards <span className="text-base font-normal">(15)</span>
              </h2>
              <p className="text-base font-normal text-gray-500 mb-6">
                Edit wards details
              </p>
            </div>
            <div className="flex gap-x-4">
              <button className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md">
                <span>Create Document</span>
                <img
                  src="/public/arrow-right-white-icon.svg"
                  className="h-2 w-1"
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Wards Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full text-sm ">
              <thead>
                <tr className="border-b text-white bg-yellow">
                  <th className="py-4 px-6 font-semibold text-xs text-left">
                    Ward Name
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Total Beds
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Admissions
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Location
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {wards.map((ward, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 font-semibold text-xl">
                      {ward.name}
                    </td>
                    <td className="py-4 px-6 font-semibold text-sm text-center text-gray-700">
                      {ward.totalBeds}
                    </td>
                    <td className="py-4 px-6 font-semibold text-sm text-center text-gray-700">
                      {ward.admissions}
                    </td>
                    <td className="py-4 px-6 font-normal text-xs text-center">
                      {ward.location}
                    </td>
                    <td className="py-4 px-6 flex gap-x-1 text-center flex-row items-center justify-center">
                      <button className="p-2 rounded-lg bg-red-transparent hover:bg-red-light transition">
                        <img
                          src="/public/delete-red.svg"
                          alt="Delete"
                          className="w-4 h-4"
                        />
                      </button>
                      <button
                        // onClick={() => handleEditClick(patient)}
                        className="p-2 rounded-lg transition"
                      >
                        <img
                          src="/public/edit-yellow.svg"
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                      <button className="p-2 rounded-lg transition">
                        <img
                          src="/public/download-icon.svg"
                          alt="Download"
                          className="w-4 h-4"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Paginations />
      </div>
    </div>
  );
};

export default AllWards;
