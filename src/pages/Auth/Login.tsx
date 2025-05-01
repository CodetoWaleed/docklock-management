import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard");
    } catch (err) {
      toast.error(error || "Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Sign In Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 flex flex-col gap-y-5">
          <h2 className="text-[40px] text-center font-bold text-navy">
            Sign In
          </h2>
          {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
          <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
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
                Password
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full outline-none text-base font-normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img src="/Combined-Shape.svg" alt="Password icon" />
              </div>
            </div>
            <div className="text-right mb-6">
              <a
                href="/forgot-password"
                className="text-base font-normal text-gray-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-5 px-[92px] rounded-[20px] bg-gradient-to-r from-[#36B5FF] to-[#7CD957] text-white font-semibold hover:from-cyan-500 hover:to-green-500 transition"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </div>

      {/* Right Section - Welcome Message */}
      <div className="w-1/3 flex items-center justify-center bg-gradient-to-b from-navy-light to-yellow">
        <div className="text-center text-white flex flex-col items-center justify-center gap-y-[45px]">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <h1 className="text-[40px] font-bold">Hello, Friend!</h1>
            <p className="font-normal text-base max-w-[215px]">
              Enter your personal details and start journey with us
            </p>
          </div>
          <button
            type="button"
            className="w-full py-5 px-[92px] rounded-[20px] text-base font-semibold bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition"
            onClick={() => navigate("/register")}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "../../store/authStore";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login, isLoading, error } = useAuthStore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login({ email, password });
//       navigate("/dashboard"); // Redirect to dashboard on success
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Section - Sign In Form */}
//       <div className="flex-1 flex items-center justify-center bg-white">
//         <div className="w-full max-w-md p-8 flex flex-col gap-y-5">
//           <h2 className="text-[40px] text-center font-bold text-navy">
//             Sign In
//           </h2>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
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
//             <div className="mb-4 relative">
//               <label
//                 className="absolute -top-3 left-5 px-1 text-gray-700 text-base font-semibold bg-white z-10"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   className="w-full outline-none text-base font-normal"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <img src="/Combined-Shape.svg" alt="Password icon" />
//               </div>
//             </div>
//             <div className="text-right mb-6">
//               <a
//                 href="/forgot-password"
//                 className="text-base font-normal text-gray-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-5 px-[92px] rounded-[20px] bg-gradient-to-r from-[#36B5FF] to-[#7CD957] text-white font-semibold hover:from-cyan-500 hover:to-green-500 transition"
//               disabled={isLoading}
//             >
//               {isLoading ? "Signing In..." : "SIGN IN"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Section - Welcome Message */}
//       <div className="w-1/3 flex items-center justify-center bg-gradient-to-b from-navy-light to-yellow">
//         <div className="text-center text-white flex flex-col items-center justify-center gap-y-[45px]">
//           <div className="flex flex-col items-center justify-center gap-y-5">
//             <h1 className="text-[40px] font-bold">Hello, Friend!</h1>
//             <p className="font-normal text-base max-w-[215px]">
//               Enter your personal details and start journey with us
//             </p>
//           </div>
//           <button
//             type="button"
//             className="w-full py-5 px-[92px] rounded-[20px] text-base font-semibold bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition"
//             onClick={() => navigate("/register")}
//           >
//             SIGN UP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
