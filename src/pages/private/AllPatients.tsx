import { useState } from "react";
import UpdatePatientModel from "../../components/models/UpdatePatientModel";
import ViewPatientModel from "../../components/models/ViewPatientModel"; // Import the new model
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Paginations from "../../components/Paginations";
import { useNavigate } from "react-router-dom";

const AllPatients = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false); // State for view popup
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = useNavigate();

  const patients = [
    {
      id: "wq123",
      name: "Mary Joseph",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Discharged",
    },
    {
      id: "ds123",
      name: "Amala Jones",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Awaiting surgery",
    },
    {
      id: "wq135",
      name: "Selim Jubril",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "On treatment",
    },
    {
      id: "wq123",
      name: "Paul Christian",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Awaiting surgery",
    },
    {
      id: "wq123",
      name: "Rosabel Biggs",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "On treatment",
    },
    {
      id: "wq123",
      name: "Tina Adekeye",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Discharged",
    },
    {
      id: "wq123",
      name: "Mark Bossman",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Discharged",
    },
    {
      id: "wq123",
      name: "Damiloa Oyin",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Discharged",
    },
    {
      id: "wq123",
      name: "Damiloa Oyin",
      date: "21/12/2022",
      time: "10:40 PM",
      ward: "Surgical Female B23",
      status: "Awaiting surgery",
    },
  ];

  const handleEditClick = (patient: any) => {
    setSelectedPatient(patient);
    setIsPopupOpen(true);
  };

  const handleViewClick = (patient: any) => {
    setSelectedPatient(patient);
    setIsViewPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPatient(null);
  };

  const handleCloseViewPopup = () => {
    setIsViewPopupOpen(false);
    setSelectedPatient(null);
  };

  const handleSave = () => {
    handleClosePopup();
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 pl-64 h-full">
        {/* Navbar */}
        <Navbar />

        {/* All Patients Content */}
        <div className="px-3 pb-[46px] pl-[40px] pr-[92px]">
          <div className="pt-[46px] flex flex-row justify-between items-center">
            <div>
              <h2 className="text-[32px] font-bold">
                All Patients{" "}
                <span className="text-base font-normal">(289)</span>{" "}
              </h2>
              <p className="text-base font-normal text-gray-500 mb-6">
                Edit patient details
              </p>
            </div>
            <div className="flex gap-x-4">
              <button className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md">
                <span>View Critical Patient</span>
                <img
                  src="/public/arrow-right-white-icon.svg"
                  className="h-2 w-1"
                  alt=""
                />
              </button>
              <button
                //   handle create a patient
                onClick={() => {
                  navigate("/add-patient");
                }}
                className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md"
              >
                <span>Create Document</span>
                <img
                  src="/public/arrow-right-white-icon.svg"
                  className="h-2 w-1"
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Patients Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b text-white bg-yellow">
                  <th className=" py-4 px-6 font-semibold text-xs text-center">
                    Patient ID
                  </th>
                  <th className=" py-4 px-6 font-semibold text-xs text-center">
                    Patient Name
                  </th>
                  <th className=" py-4 px-6 font-semibold text-xs text-center">
                    Date/time added
                  </th>
                  <th className=" py-4 px-6 font-semibold text-xs text-center">
                    Ward
                  </th>
                  <th className=" py-4 px-6 font-semibold text-xs text-center">
                    Status
                  </th>
                  <th className=" py-4 px-6 font-semibold text-xs text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 font-medium text-base text-center">
                      {patient.id}
                    </td>
                    <td className="py-4 px-6 font-semibold text-xl text-center">
                      {patient.name}
                    </td>
                    <td className="py-4 px-6 font-semibold text-sm text-center">
                      <div className="flex flex-col ">
                        <span>{patient.date}</span>
                        <span className="text-gray-400">{patient.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-normal text-xs text-center">
                      {patient.ward}
                    </td>
                    <td
                      className="py-4 px-6 font-semibold text-xl text-center"
                      onClick={() => handleViewClick(patient)}
                    >
                      <span
                        className={`px-5 py-1 rounded-full text-xs font-semibold ${
                          patient.status === "Discharged"
                            ? "bg-tertiary-green bg-opacity-20 text-tertiary-green"
                            : patient.status === "Awaiting surgery"
                            ? "bg-blue-500 bg-opacity-20 text-blue-500"
                            : "bg-red-transparent text-tertiary-red"
                        }`}
                      >
                        {patient.status}
                      </span>
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
                        onClick={() => handleEditClick(patient)}
                        className="p-2 rounded-lg transition"
                      >
                        <img
                          src="/public/edit-yellow.svg"
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                      {/* <button
                        onClick={() => handleViewClick(patient)}
                        className="p-2 rounded-lg transition"
                      >
                        <img
                          src="/public/eye-icon.svg"
                          alt="View"
                          className="w-4 h-4"
                        />
                      </button> */}
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

      {/* Popup for Updating Patient Record */}
      <UpdatePatientModel
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        patient={selectedPatient}
        onSave={handleSave}
      />

      {/* Popup for Viewing Patient Record */}
      <ViewPatientModel
        isOpen={isViewPopupOpen}
        onClose={handleCloseViewPopup}
        patient={selectedPatient}
      />
    </div>
  );
};

export default AllPatients;
