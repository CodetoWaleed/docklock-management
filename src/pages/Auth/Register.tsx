import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/authStore";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"admin" | "doctor" | "staff">("staff");
  const { register, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      useAuthStore.getState().setError("Passwords do not match");
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      await register({ fullName, email, password, role });
      toast.success("Registration successful! Please log in.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } catch (err) {
      toast.error(error || "Registration failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Welcome Message */}
      <div className="w-1/3 flex items-center justify-center bg-gradient-to-b from-yellow to-navy-light">
        <div className="text-center text-white flex flex-col items-center justify-center gap-y-[45px]">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <h1 className="text-[40px] font-bold">Welcome Back!</h1>
            <p className="font-normal text-base max-w-[271px]">
              To keep connected with us please login with your personal info
            </p>
          </div>
          <button
            type="button"
            className="py-[21px] px-[91px] text-base font-semibold rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition"
            onClick={() => navigate("/login")}
          >
            SIGN IN
          </button>
        </div>
      </div>

      {/* Right Section - Create Account Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-[40px] font-bold text-navy mb-6 text-center">
            Create Account
          </h2>
          {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
          <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label
                className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <div className="relative py-2 flex items-center border border-gray-300 rounded-md px-[18px]">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full outline-none text-base font-normal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <span className="!rounded-full bg-yellow flex p-[10px] items-center justify-center">
                  <img src="/User.svg" className="h-4 w-4" alt="User icon" />
                </span>
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full outline-none text-base font-normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <img src="/Message.svg" alt="Email icon" />
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
                htmlFor="password"
              >
                Create Password
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="password"
                  id="password"
                  placeholder="xxxxxxxxxxxxxx"
                  className="w-full outline-none text-base font-normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img src="/Combined-Shape.svg" alt="Password icon" />
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="xxxxxxxxxxxxxx"
                  className="w-full outline-none text-base font-normal"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <img src="/Combined-Shape.svg" alt="Confirm password icon" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full py-5 px-[92px] rounded-[20px] bg-gradient-to-r from-navy-light to-yellow text-white font-semibold transition max-w-[253px]"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "SIGN UP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "../../store/authStore";

// const Register = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState<"admin" | "doctor" | "staff">("staff");
//   const { register, isLoading, error } = useAuthStore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       useAuthStore.getState().setError("Passwords do not match");
//       return;
//     }

//     try {
//       await register({ fullName, email, password, role });
//       navigate("/login"); // Redirect to login page on success
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Section - Welcome Message */}
//       <div className="w-1/3 flex items-center justify-center bg-gradient-to-b from-yellow to-navy-light">
//         <div className="text-center text-white flex flex-col items-center justify-center gap-y-[45px]">
//           <div className="flex flex-col items-center justify-center gap-y-5">
//             <h1 className="text-[40px] font-bold">Welcome Back!</h1>
//             <p className="font-normal text-base max-w-[271px]">
//               To keep connected with us please login with your personal info
//             </p>
//           </div>
//           <button
//             type="button"
//             className="py-[21px] px-[91px] text-base font-semibold rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition"
//             onClick={() => navigate("/login")}
//           >
//             SIGN IN
//           </button>
//         </div>
//       </div>

//       {/* Right Section - Create Account Form */}
//       <div className="flex-1 flex items-center justify-center bg-white">
//         <div className="w-full max-w-md p-8">
//           <h2 className="text-[40px] font-bold text-navy mb-6 text-center">
//             Create Account
//           </h2>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
//             <div className="mb-4 relative">
//               <label
//                 className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
//                 htmlFor="fullName"
//               >
//                 Full Name
//               </label>
//               <div className="relative py-2 flex items-center border border-gray-300 rounded-md px-[18px]">
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="Enter your full name"
//                   className="w-full outline-none text-base font-normal"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   required
//                 />
//                 <span className="!rounded-full bg-yellow flex p-[10px] items-center justify-center">
//                   <img src="/User.svg" className="h-4 w-4" alt="User icon" />
//                 </span>
//               </div>
//             </div>
//             <div className="mb-4 relative">
//               <label
//                 className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your Email"
//                   className="w-full outline-none text-base font-normal"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <img src="/Message.svg" alt="Email icon" />
//               </div>
//             </div>
//             {/* <div className="mb-4 relative">
//               <label
//                 className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
//                 htmlFor="role"
//               >
//                 Role
//               </label>
//               <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
//                 <select
//                   id="role"
//                   className="w-full outline-none text-base font-normal bg-white"
//                   value={role}
//                   onChange={(e) =>
//                     setRole(e.target.value as "admin" | "doctor" | "staff")
//                   }
//                   required
//                 >
//                   <option value="staff">Staff</option>
//                   <option value="doctor">Doctor</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
//             </div> */}
//             <div className="mb-4 relative">
//               <label
//                 className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
//                 htmlFor="password"
//               >
//                 Create Password
//               </label>
//               <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="xxxxxxxxxxxxxx"
//                   className="w-full outline-none text-base font-normal"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <img src="/Combined-Shape.svg" alt="Password icon" />
//               </div>
//             </div>
//             <div className="mb-4 relative">
//               <label
//                 className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
//                 htmlFor="confirmPassword"
//               >
//                 Confirm Password
//               </label>
//               <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   placeholder="xxxxxxxxxxxxxx"
//                   className="w-full outline-none text-base font-normal"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//                 <img src="/Combined-Shape.svg" alt="Confirm password icon" />
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="w-full py-5 px-[92px] rounded-[20px] bg-gradient-to-r from-navy-light to-yellow text-white font-semibold  transition max-w-[253px]"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Signing Up..." : "SIGN UP"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
