import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 pl-64 h-full ">
        {/* Navbar */}
        <Navbar />

        {/* Add Patient Content */}
        <div className="px-3 pb-[46px] pl-[40px] pr-[92px]">
          <div className="pt-[46px]  flex flex-row justify-between items-center">
            <div>
              <h2 className="text-[32px] font-bold">Add New Patient</h2>
              <p className="text-base font-normal text-gray-500 mb-6">
                Add a new patient details
              </p>
            </div>

            <button
              onClick={() => {
                navigate("/all-patients");
              }}
              className="py-2 px-[11px] flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg shadow-md"
            >
              <img
                src="/public/food-icon.svg"
                className="h-[20px] w-[20px]"
                alt=""
              />

              <span>All Patients</span>
              <img
                src="/public/arrow-right-white-icon.svg"
                className="h-2 w-1"
                alt=""
              />
            </button>
          </div>

          {/* Form Section */}
          <div className="bg-white  rounded-lg shadow-sm  px-[201px] pt-[71px] pb-[46px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-3">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="w-full outline-none text-base font-normal"
                  />
                  <span className="!rounded-full bg-yellow flex p-[10px] items-center justify-center">
                    <img src="/public/User.svg" className="h-4 w-4" alt="" />
                  </span>
                </div>
              </div>

              {/* Last Name */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your first name"
                    className="w-full outline-none text-base font-normal"
                  />
                  <img src="/public/User-gray.svg" className="h-4 w-4" alt="" />
                </div>
              </div>

              {/* DOB */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="dob"
                >
                  DOB
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <input
                    type="text"
                    id="dob"
                    placeholder="1994/06/18"
                    className="w-full outline-none text-base font-normal"
                  />
                  <img src="/public/calendar.svg" alt="" />
                </div>
              </div>

              {/* Gender */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <select
                    id="gender"
                    className="w-full outline-none text-base font-normal bg-transparent"
                  >
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Ward */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="ward"
                >
                  Select Ward
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <select
                    id="ward"
                    className="w-full outline-none text-base font-normal bg-transparent"
                  >
                    <option value="" disabled selected>
                      Orthopedic etc
                    </option>
                    <option value="orthopedic">Orthopedic</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                  </select>
                </div>
              </div>

              {/* Contact */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="contact"
                >
                  Contact Number
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <input
                    type="text"
                    id="contact"
                    placeholder="xxxxxxxxxxxx"
                    className="w-full outline-none text-base font-normal"
                  />
                  <img src="/public/phone.svg" alt="" />
                </div>
              </div>

              {/* Insurance No */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="insurance"
                >
                  Insurance No.
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <input
                    type="text"
                    id="insurance"
                    placeholder="Enter your Insurance No."
                    className="w-full outline-none text-base font-normal"
                  />
                  <img src="/public/shield.svg" alt="" />
                </div>
              </div>

              {/* Doctor */}
              <div className="relative">
                <label
                  className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                  htmlFor="doctor"
                >
                  Assign Doctor
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                  <select
                    id="doctor"
                    className="w-full outline-none text-base font-normal bg-transparent"
                  >
                    <option value="" disabled selected>
                      Enter your first name
                    </option>
                    <option value="jacob">Dr. Jacob Ryan</option>
                    <option value="emily">Dr. Emily Stone</option>
                    <option value="michael">Dr. Michael Lee</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Diagnosis and Brief History */}
            <div className="relative mt-6">
              <label
                className="absolute -top-3 left-5 px-4  text-base font-bold bg-white z-10"
                htmlFor="diagnosis"
              >
                Diagnosis
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <textarea
                  id="diagnosis"
                  placeholder="Brief history"
                  className="w-full outline-none text-base font-normal h-32 resize-none"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="py-3 px-[85px] rounded-full bg-yellow text-white font-bold text-xl hover:bg-yellow-600 transition"
              >
                Save
              </button>
            </div>
          </div>

          {/* All Patients Button */}
          {/* <div className="flex justify-end mt-6 mr-[40px]">
            <button className="py-3 px-5 flex items-center gap-x-2 rounded-[20px] bg-yellow text-white font-semibold hover:bg-yellow-600 transition">
              <span>All Patients</span>
              <img
                src="/public/arrow-right-white-icon.svg"
                className="h-4 w-4"
                alt=""
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
