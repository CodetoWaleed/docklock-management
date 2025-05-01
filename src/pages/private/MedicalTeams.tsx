import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ImportExportModel from "../../components/models/ImportExportModel";
import Paginations from "../../components/Paginations";

const AllTeams = () => {
  const [isImportExportPopupOpen, setIsImportExportPopupOpen] = useState(false);

  const teams = [
    {
      leader: "Dr. Mary Joseph",
      totalMembers: 2,
      assignedPatients: 35,
      members: "Dr. Maria, Dr. Sara",
    },
    {
      leader: "Dr. Amala Jones",
      totalMembers: 3,
      assignedPatients: 12,
      members: "Dr. Maria, Dr. Sara",
    },
    {
      leader: "Dr. Tina Adekeye",
      totalMembers: 8,
      assignedPatients: 16,
      members: "Dr. Maria, Dr. Sara",
    },
    {
      leader: "Dr. Mark Bossman",
      totalMembers: 7,
      assignedPatients: 8,
      members: "Dr. Maria, Dr. Sara",
    },
    {
      leader: "Dr. Damiloa Oyin",
      totalMembers: 2,
      assignedPatients: 15,
      members: "Dr. Maria, Dr. Sara",
    },
    {
      leader: "Dr. Damiloa Oyin",
      totalMembers: 3,
      assignedPatients: 15,
      members: "Dr. Maria, Dr. Sara",
    },
  ];

  const handleOpenImportExportPopup = () => {
    setIsImportExportPopupOpen(true);
  };

  const handleCloseImportExportPopup = () => {
    setIsImportExportPopupOpen(false);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 pl-64 h-full">
        {/* Navbar */}
        <Navbar />

        {/* All Teams Content */}
        <div className="px-3 pb-[46px] pl-[40px] pr-[92px]">
          <div className="pt-[46px] flex flex-row justify-between items-center">
            <div>
              <h2 className="text-[32px] font-bold">
                All Teams <span className="text-base font-normal">(15)</span>
              </h2>
              <p className="text-base font-normal text-gray-500 mb-6">
                Edit medical teams detail
              </p>
            </div>
            <div className="flex gap-x-4">
              <button
                onClick={handleOpenImportExportPopup}
                className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md"
              >
                <span>Import/Export Data</span>
                <img
                  src="/public/arrow-right-white-icon.svg"
                  className="h-2 w-1"
                  alt=""
                />
              </button>
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

          {/* Teams Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full text-sm ">
              <thead>
                <tr className="border-b text-white bg-yellow">
                  <th className="py-4 px-6 font-semibold text-xs text-left">
                    Team Leader
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Total Team Member
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Assigned Patients
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Team Member
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 font-semibold text-xl">
                      {team.leader}
                    </td>
                    <td className="py-4 px-6 font-medium text-base text-center text-gray-600">
                      {team.totalMembers}
                    </td>
                    <td className="py-4 px-6 font-medium text-base text-center text-gray-600">
                      {team.assignedPatients}
                    </td>
                    <td className="py-4 px-6 font-normal text-xs text-center">
                      {team.members}
                    </td>
                    <td className="py-4 px-6 flex gap-x-1 text-center flex-row items-center justify-center">
                      <button className="p-2 rounded-lg bg-red-transparent hover:bg-red-light transition">
                        <img
                          src="/public/delete-red.svg"
                          alt="Delete"
                          className="w-4 h-4"
                        />
                      </button>
                      <button className="p-2 rounded-lg transition">
                        <img
                          src="/public/edit-yellow.svg"
                          alt="Edit"
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

      {/* Popup for Import/Export Data */}
      <ImportExportModel
        isOpen={isImportExportPopupOpen}
        onClose={handleCloseImportExportPopup}
      />
    </div>
  );
};

export default AllTeams;

// import React from "react";
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";

// const MedicalTeams = () => {
//   const teams = [
//     {
//       leader: "Dr. Mary Joseph",
//       totalMembers: 2,
//       assignedPatients: 35,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Amala Jones",
//       totalMembers: 3,
//       assignedPatients: 12,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Selim Jubril",
//       totalMembers: 8,
//       assignedPatients: 21,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Paul Christian",
//       totalMembers: 2,
//       assignedPatients: 21,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Rosabel Briggs",
//       totalMembers: 4,
//       assignedPatients: 23,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Tina Adekeye",
//       totalMembers: 8,
//       assignedPatients: 16,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Mark Bossman",
//       totalMembers: 7,
//       assignedPatients: 8,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Damilola Oyin",
//       totalMembers: 2,
//       assignedPatients: 15,
//       member: "Dr. Maria Dr. Sara",
//     },
//     {
//       leader: "Dr. Damilola Oyin",
//       totalMembers: 2,
//       assignedPatients: 15,
//       member: "Dr. Maria Dr. Sara",
//     },
//   ];

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-gray-100 pl-64 h-full">
//         {/* Navbar */}
//         <Navbar />

//         {/* Medical Teams Content */}
//         <div className="px-3 pb-[46px] pl-[40px] pr-[92px]">
//           <div className="pt-[46px] flex flex-row justify-between items-center">
//             <div>
//               <h2 className="text-[32px] font-bold">
//                 All Teams <span className="text-base font-normal">(15)</span>
//               </h2>
//               <p className="text-base font-normal text-gray-500 mb-6">
//                 Edit medical teams detail
//               </p>
//             </div>
//             <div className="flex gap-x-4">
//               <button className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md">
//                 <span>Create Document</span>
//                 <img
//                   src="/public/arrow-right-white-icon.svg"
//                   className="h-2 w-1"
//                   alt=""
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Teams Table */}
//           <div className="bg-white rounded-lg shadow-sm">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="border-b text-white bg-yellow">
//                   <th className="py-4 px-6 font-semibold text-xs text-left">
//                     Team Leader
//                   </th>
//                   <th className="py-4 px-6 font-semibold text-xs text-center">
//                     Total team member
//                   </th>
//                   <th className="py-4 px-6 font-semibold text-xs text-center">
//                     Assigned Patients
//                   </th>
//                   <th className="py-4 px-6 font-semibold text-xs text-center">
//                     Team Member
//                   </th>
//                   <th className="py-4 px-6 font-semibold text-xs text-center">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {teams.map((team, index) => (
//                   <tr key={index} className="border-b">
//                     <td className="py-4 px-6 font-semibold text-xl">
//                       {team.leader}
//                     </td>
//                     <td className="py-4 px-6 font-semibold text-sm text-center text-gray-700">
//                       {team.totalMembers}
//                     </td>
//                     <td className="py-4 px-6 font-semibold text-sm text-center text-gray-700">
//                       {team.assignedPatients}
//                     </td>
//                     <td className="py-4 px-6 font-normal text-xs text-center">
//                       {team.member}
//                     </td>
//                     <td className="py-4 px-6 flex gap-x-1 text-center flex-row items-center justify-center">
//                       <button className="p-2 rounded-lg bg-red-transparent hover:bg-red-light transition">
//                         <img
//                           src="/public/delete-red.svg"
//                           alt="Delete"
//                           className="w-4 h-4"
//                         />
//                       </button>
//                       <button className="p-2 rounded-lg transition">
//                         <img
//                           src="/public/edit-yellow.svg"
//                           alt="Edit"
//                           className="w-4 h-4"
//                         />
//                       </button>
//                       <button className="p-2 rounded-lg transition">
//                         <img
//                           src="/public/download-icon.svg"
//                           alt="Download"
//                           className="w-4 h-4"
//                         />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="flex justify-center mt-4 pb-4">
//               <div className="flex items-center gap-x-2">
//                 <button className="p-2">
//                   <img
//                     src="/public/arrow-left.svg"
//                     alt="Previous"
//                     className="w-4 h-4"
//                   />
//                 </button>
//                 <button className="px-4 py-2 border border-navy text-navy rounded-lg">
//                   1
//                 </button>
//                 <button className="px-4 py-2 ">2</button>
//                 <button className="px-4 py-2 ">3</button>
//                 <span className="px-4 py-2 ">...</span>
//                 <button className="px-4 py-2 ">41</button>
//                 <button className="p-2">
//                   <img
//                     src="/public/arrow-right.svg"
//                     alt="Next"
//                     className="w-4 h-4"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalTeams;
