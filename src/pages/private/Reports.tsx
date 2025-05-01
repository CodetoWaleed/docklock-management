import React, { useState } from "react";
import BookNewTestModel from "../../components/models/BookNewTestModel";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Paginations from "../../components/Paginations";

const Reports = () => {
  const [isBookTestPopupOpen, setIsBookTestPopupOpen] = useState(false);

  const reports = [
    {
      patientName: "Mary Joseph",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Blood CP",
      status: "Delivered",
    },
    {
      patientName: "Amala Jones",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Urine R/E",
      status: "Under Process",
    },
    {
      patientName: "Selim Jubril",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Blood CP",
      status: "Awaiting Sample",
    },
    {
      patientName: "Paul Christian",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "ACR BCR",
      status: "Under Process",
    },
    {
      patientName: "Rosabel Briggs",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Cancer",
      status: "Awaiting Sample",
    },
    {
      patientName: "Tina Adekeye",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Typoid",
      status: "Delivered",
    },
    {
      patientName: "Mark Bossman",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Blood CP",
      status: "Delivered",
    },
    {
      patientName: "Damilola Oyin",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Dyreas",
      status: "Delivered",
    },
    {
      patientName: "Damilola Oyin",
      date: "21/12/2022",
      time: "10:40 PM",
      testName: "Blood CP",
      status: "Under Process",
    },
  ];

  const handleBookTestClick = () => {
    setIsBookTestPopupOpen(true);
  };

  const handleCloseBookTestPopup = () => {
    setIsBookTestPopupOpen(false);
  };

  const handleBookTestSave = () => {
    handleCloseBookTestPopup();
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 pl-64 h-full">
        {/* Navbar */}
        <Navbar />

        {/* Reports Content */}
        <div className="px-3 pb-[46px] pl-[40px] pr-[92px]">
          <div className="pt-[46px] flex flex-row justify-between items-center">
            <div>
              <h2 className="text-[32px] font-bold">
                All Reports <span className="text-base font-normal">(15)</span>
              </h2>
              <p className="text-base font-normal text-gray-500 mb-6">
                Edit medical teams detail
              </p>
            </div>
            <div className="flex gap-x-4">
              <button
                onClick={handleBookTestClick}
                className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md"
              >
                <span>Book New Test</span>
                <img
                  src="/public/arrow-right-white-icon.svg"
                  className="h-2 w-1"
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Reports Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-white bg-yellow">
                  <th className="py-4 px-6 font-semibold text-xs text-left">
                    Patient Name
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Reporting Date/time
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Test Name
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Status
                  </th>
                  <th className="py-4 px-6 font-semibold text-xs text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 font-semibold text-xl">
                      {report.patientName}
                    </td>
                    <td className="py-4 px-6 font-semibold text-sm text-center text-gray-700">
                      <div className="flex flex-col">
                        <span>{report.date}</span>
                        <span className="text-gray-400">{report.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-normal text-xs text-center">
                      {report.testName}
                    </td>
                    <td className="py-4 px-6 font-semibold text-xl text-center">
                      <span
                        className={`px-5 py-1 rounded-full text-xs font-semibold ${
                          report.status === "Delivered"
                            ? "bg-tertiary-green bg-opacity-20 text-tertiary-green"
                            : report.status === "Under Process"
                            ? "bg-blue-500 bg-opacity-20 text-blue-500"
                            : "bg-red-transparent text-tertiary-red"
                        }`}
                      >
                        {report.status}
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
        {/* Popup for Booking New Test */}
        <BookNewTestModel
          isOpen={isBookTestPopupOpen}
          onClose={handleCloseBookTestPopup}
          onSave={handleBookTestSave}
        />
      </div>
    </div>
  );
};

export default Reports;
