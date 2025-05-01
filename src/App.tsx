import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/private/Dashboard";
import AddPatient from "./pages/private/AddPatient";
import AllPatients from "./pages/private/AllPatients";
import AllWards from "./pages/private/AllWards";
import MedicalTeams from "./pages/private/MedicalTeams";
import Reports from "./pages/private/Reports";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/all-patients" element={<AllPatients />} />
          <Route path="/all-wards" element={<AllWards />} />
          <Route path="/medical-teams" element={<MedicalTeams />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;

// // File Path: src/App.tsx

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Dashboard from "./pages/private/Dashboard";
// import AddPatient from "./pages/private/AddPatient";
// import AllPatients from "./pages/private/AllPatients";
// import AllWards from "./pages/private/AllWards";
// import MedicalTeams from "./pages/private/MedicalTeams";
// import Reports from "./pages/private/Reports";
// import ProtectedRoute from "./components/ProtectedRoute";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/add-patient" element={<AddPatient />} />
//           <Route path="/all-patients" element={<AllPatients />} />
//           <Route path="/all-wards" element={<AllWards />} />
//           <Route path="/medical-teams" element={<MedicalTeams />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
