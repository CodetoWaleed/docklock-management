import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 pl-64">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="px-3">
          <div className=" pt-[46px] pl-[40px]">
            <h2 className="text-[32px] font-bold">Dashboard</h2>
            <p className="text-base font-normal text-gray-500 mb-6">
              Overview of details
            </p>
          </div>
          {/* Cards Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card
              title="Total Appointments"
              value="101"
              percentage="+3.11%"
              isPositive={true}
            />
            <Card
              title="Total Doctors"
              value="135"
              percentage="+3.11%"
              isPositive={true}
            />
            <Card
              title="Total Wards"
              value="96"
              percentage="-2.91%"
              isPositive={false}
            />
            <Card title="Total Patients" value="197" isChart={true} />
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card
              title="Total Appointments"
              value="101"
              percentage="+3.11%"
              isPositive={true}
            />
            <Card
              title="Total Doctors"
              value="135"
              percentage="+3.11%"
              isPositive={true}
            />
            <Card
              title="Total Wards"
              value="96"
              percentage="-2.91%"
              isPositive={false}
            />
            <Card title="Total Patients" value="197" isChart={true} />
          </div>

          {/* New Sections */}
          <div className="flex flex-row gap-x-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full">
              <div className="bg-white py-[10px] px-5 shadow-sm flex flex-col gap-y-[11px] justify-center">
                <h3 className="text-xl font-bold mb-4">New Appointment</h3>
                <div className="flex justify-between items-center">
                  <img
                    src="/public/user-avatar.svg"
                    alt="Doctor Icon"
                    className="w-24 h-24 rounded-full"
                  />
                  <button className="py-2 px-1 flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg">
                    <span>Create Appointment</span>
                    <img
                      src="/public/arrow-right-white-icon.svg"
                      className="h-2 w-1"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="bg-white py-[10px] px-5 shadow-sm flex flex-col gap-y-[11px] justify-center">
                <h3 className="text-xl font-bold ">View Report</h3>
                <div className="flex justify-between items-center">
                  <img
                    src="/public/user-avatar.svg"
                    alt="Doctor Icon"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <button className="py-2 px-1 flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg">
                    <span>Check Reports</span>
                    <img
                      src="/public/arrow-right-white-icon.svg"
                      className="h-2 w-1"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="bg-white py-[10px] px-5 shadow-sm flex flex-col gap-y-[11px] justify-center">
                <h3 className="text-xl font-bold mb-4">New Admission</h3>
                <div className="flex justify-between items-center">
                  <img
                    src="/public/user-avatar.svg"
                    alt="Doctor Icon"
                    className="w-24 h-24 rounded-full"
                  />
                  <button className="py-2 px-1 flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg">
                    <span>Create Admission</span>
                    <img
                      src="/public/arrow-right-white-icon.svg"
                      className="h-2 w-1"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="bg-white py-[10px] px-5 shadow-sm flex flex-col gap-y-[11px] justify-center">
                <h3 className="text-xl font-bold mb-4">View Wards</h3>
                <div className="flex justify-between items-center">
                  <img
                    src="/public/user-avatar.svg"
                    alt="Doctor Icon"
                    className="w-24 h-24 rounded-full"
                  />
                  <button className="py-2 px-1 flex flex-row gap-x-2 items-center text-xm font-bold bg-yellow text-white rounded-lg">
                    <span>Manage Wards</span>
                    <img
                      src="/public/arrow-right-white-icon.svg"
                      className="h-2 w-1"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Appointments */}
            <div className="grid grid-cols-1 gap-6 w-full">
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold  border-b-[1px] border-red">
                    Appointments
                  </h3>
                  <div className="flex items-center">
                    <select
                      className="text-red border-none bg-transparent focus:outline-none text-sm"
                      defaultValue="10"
                    >
                      <option value="10">Show 10 items</option>
                      <option value="20">Show 20 items</option>
                      <option value="50">Show 50 items</option>
                    </select>
                    {/* <img
                      src="/public/dropdown-arrow-red.svg"
                      alt="Dropdown Arrow"
                      className="w-4 h-4 ml-1"
                    /> */}
                  </div>
                </div>
                <table className="w-full text-sm text-gray-600">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">
                        <div className="flex items-center gap-2">
                          First Name Last Name
                          <div className="flex flex-col gap-0">
                            <img
                              src="/public/arrow-up-gray.svg"
                              alt="Dropdown Arrow"
                              className="w-4 h-4 ml-1"
                            />
                            <img
                              src="/public/arrow-down-red.svg"
                              alt="Dropdown Arrow"
                              className="w-4 h-4 ml-1"
                            />
                          </div>
                        </div>
                      </th>
                      <th className="text-left py-2">
                        <div className="flex items-center gap-2">
                          Date
                          <div className="flex flex-col gap-0">
                            <img
                              src="/public/arrow-up-gray.svg"
                              alt="Dropdown Arrow"
                              className="w-4 h-4 ml-1"
                            />
                            <img
                              src="/public/arrow-down-red.svg"
                              alt="Dropdown Arrow"
                              className="w-4 h-4 ml-1"
                            />
                          </div>
                        </div>
                      </th>
                      <th className="text-left py-2">
                        <div className="flex items-center gap-2">
                          Status
                          <div className="flex flex-col gap-0">
                            <img
                              src="/public/arrow-up-gray.svg"
                              alt="Dropdown Arrow"
                              className="w-4 h-4 ml-1"
                            />
                            <img
                              src="/public/arrow-down-red.svg"
                              alt="Dropdown Arrow"
                              className="w-4 h-4 ml-1"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Chance Vaccaro</td>
                      <td className="py-2 text-gray-400">10.01.2003 12:54</td>
                      <td className="py-2"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Desirae Kenter</td>
                      <td className="py-2 text-gray-400">04.12.2003 03:21</td>
                      <td className="py-2">
                        <span className="bg-red-light text-red px-3 font-semibold py-1 rounded-full text-xs">
                          Rejected
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Paityn Lubin</td>
                      <td className="py-2 text-gray-400">10.01.2003 12:54</td>
                      <td className="py-2"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Phillip Bator</td>
                      <td className="py-2 text-gray-400">04.12.2003 03:21</td>
                      <td className="py-2"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Emerson Stanton</td>
                      <td className="py-2 text-gray-400">10.01.2003 12:54</td>
                      <td className="py-2"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Alfredo Rhiel Madsen</td>
                      <td className="py-2 text-gray-400">03.08.2019 12:54</td>
                      <td className="py-2">
                        <span className="bg-red-light text-red px-3 font-semibold py-1 rounded-full text-xs">
                          Rejected
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-x-2">
                    <button className="p-2">
                      <img
                        src="/public/arrow-left.svg"
                        alt="Previous"
                        className="w-4 h-4"
                      />
                    </button>
                    <button className="px-4 py-2 border border-purple-500 text-purple-500 rounded-lg">
                      1
                    </button>
                    <button className="px-4 py-2 text-gray-600">2</button>
                    <button className="px-4 py-2 text-gray-600">3</button>
                    <span className="px-4 py-2 text-gray-600">...</span>
                    <button className="px-4 py-2 text-gray-600">13</button>
                    <button className="p-2">
                      <img
                        src="/public/arrow-right.svg"
                        alt="Next"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booked Appointments and doctors list section */}
          <div className="flex flex-row gap-x-5 mt-6">
            {/* Booked Appointments */}
            <div className="bg-white p-6 rounded-t-[47px] shadow-sm w-full min-w-[814px]">
              <h3 className="text-2xl font-medium mb-4">Booked Appointment</h3>
              <table className="w-full text-sm text-gray-600">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">#</th>
                    <th className="text-left py-2">Patient Name</th>
                    <th className="text-left py-2">Assigned Doctor</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Diseases</th>
                    <th className="text-left py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">001</td>
                    <td className="py-2">Ramesh Kumar</td>
                    <td className="py-2">Dr. Jacob Ryan</td>
                    <td className="py-2">12 Jan 2022</td>
                    <td className="py-2">Fever</td>
                    <td className="py-2 flex gap-x-2">
                      <button
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
                        style={{
                          boxShadow: "0 4px 15px 0 rgba(185, 178, 226, 0.64)",
                        }}
                      >
                        <img
                          src="/public/edit-icon.svg"
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                      <button
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
                        style={{
                          boxShadow: "0 4px 15px 0 rgba(185, 178, 226, 0.64)",
                        }}
                      >
                        <img
                          src="/public/delete-icon.svg"
                          alt="Delete"
                          className="w-4 h-4"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">001</td>
                    <td className="py-2">Ramesh Kumar</td>
                    <td className="py-2">Dr. Jacob Ryan</td>
                    <td className="py-2">12 Jan 2022</td>
                    <td className="py-2">Fever</td>
                    <td className="py-2 flex gap-x-2">
                      <button
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
                        style={{
                          boxShadow: "0 4px 15px 0 rgba(185, 178, 226, 0.64)",
                        }}
                      >
                        <img
                          src="/public/edit-icon.svg"
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                      <button
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
                        style={{
                          boxShadow: "0 4px 15px 0 rgba(185, 178, 226, 0.64)",
                        }}
                      >
                        <img
                          src="/public/delete-icon.svg"
                          alt="Delete"
                          className="w-4 h-4"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">001</td>
                    <td className="py-2">Ramesh Kumar</td>
                    <td className="py-2">Dr. Jacob Ryan</td>
                    <td className="py-2">12 Jan 2022</td>
                    <td className="py-2">Fever</td>
                    <td className="py-2 flex gap-x-2">
                      <button
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
                        style={{
                          boxShadow: "0 4px 15px 0 rgba(185, 178, 226, 0.64)",
                        }}
                      >
                        <img
                          src="/public/edit-icon.svg"
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                      <button
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
                        style={{
                          boxShadow: "0 4px 15px 0 rgba(185, 178, 226, 0.64)",
                        }}
                      >
                        <img
                          src="/public/delete-icon.svg"
                          alt="Delete"
                          className="w-4 h-4"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Doctor list */}
            <div className="bg-white p-6 rounded-t-[47px] shadow-sm w-full min-w-[353px] ">
              <h3 className="text-2xl font-medium mb-4">Doctors List</h3>
              <table className="w-full text-sm text-gray-600">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">#</th>
                    <th className="text-left py-2">Doctors Name</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">
                      <img
                        src="/public/doc-avatar.svg"
                        alt="Doctor Icon"
                        className="w-[36px] h-[36px] rounded-lg"
                      />
                    </td>
                    <td className="py-2">Dr. Jacob Ryan</td>
                    <td className="">
                      <button className="py-1 px-2 text-white bg-tertiary-green shadow-custom-green">
                        Available
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">
                      <img
                        src="/public/doc-avatar.svg"
                        alt="Doctor Icon"
                        className="w-[36px] h-[36px] rounded-lg"
                      />
                    </td>
                    <td className="py-2">Dr. Jacob Ryan</td>
                    <td className="">
                      <button className="py-1 px-2 text-white bg-tertiary-green shadow-custom-green">
                        Available
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">
                      <img
                        src="/public/doc-avatar.svg"
                        alt="Doctor Icon"
                        className="w-[36px] h-[36px] rounded-lg"
                      />
                    </td>
                    <td className="py-2">Dr. Jacob Ryan</td>
                    <td className="">
                      <button className="py-1 px-2 text-white bg-tertiary-green shadow-custom-green">
                        Available
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
