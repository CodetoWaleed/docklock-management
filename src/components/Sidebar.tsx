import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Sidebar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white shadow-md flex flex-col justify-between h-screen fixed top-0 left-0">
      <div>
        <div className="py-[10px] px-[14px] border-b">
          <h1 className="text-3xl font-semibold text-navy">
            DocLock Management
          </h1>
        </div>
        <nav className="mt-[54px] pl-8 pr-[15px]">
          <ul className="flex flex-col gap-y-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-x-3 px-4 py-3 rounded-full ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src="/public/dashboard.svg"
                      alt="Dashboard"
                      className={`w-5 h-5 ${
                        isActive ? "bg-white rounded-full" : ""
                      }`}
                    />
                    Dashboard
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-patients"
                className={({ isActive }) =>
                  `flex items-center gap-x-3 px-4 py-3 rounded-full ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src="/public/dashboard.svg"
                      alt="Patients"
                      className={`w-5 h-5 ${
                        isActive ? "bg-white rounded-full" : ""
                      }`}
                    />
                    Patients
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-wards"
                className={({ isActive }) =>
                  `flex items-center gap-x-3 px-4 py-3 rounded-full ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src="/public/ward.svg"
                      alt="Ward"
                      className={`w-5 h-5 ${
                        isActive ? "bg-white rounded-full" : ""
                      }`}
                    />
                    Ward Management
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/medical-teams"
                className={({ isActive }) =>
                  `flex items-center gap-x-3 px-4 py-3 rounded-full ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src="/public/user-sidebar-icon.svg"
                      alt="Teams"
                      className={`w-5 h-5 ${
                        isActive ? "bg-white rounded-full" : ""
                      }`}
                    />
                    Medical Teams
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `flex items-center gap-x-3 px-4 py-3 rounded-full ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src="/public/report.svg"
                      alt="Reports"
                      className={`w-5 h-5 ${
                        isActive ? "bg-white rounded-full" : ""
                      }`}
                    />
                    Reports
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 flex items-center gap-x-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-x-3 text-gray-600 hover:text-navy"
        >
          <img src="/public/Logout.svg" alt="Logout" className="w-5 h-5" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
