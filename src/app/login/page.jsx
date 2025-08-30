

// // C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\login\page.jsx
// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import animationData from "../../../public/assets/images/about_us/zpunet icon (1).json";
// import Sociallogin from "./Sociallogin";

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// export default function LoginPage() {
//   const [isClient, setIsClient] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // 🔥 Login Handler
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire("✅ Success!", "Login successful!", "success");
//         localStorage.setItem("token", data.token); // Save JWT in localStorage
//       } else {
//         Swal.fire("❌ Error", data.error, "error");
//       }
//     } catch (error) {
//       Swal.fire("⚠️ Error", "Something went wrong", "error");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex flex-row gap-8 items-center">
//         {/* Left Part (Image) */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="/assets/images/login/Privacy-policy-rafiki.png"
//             alt="Login"
//           />
//         </div>

//         {/* Right Part (Form) */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           {/* 🔥 Lottie Animation */}
//           <div className="w-40 mx-auto mb-4">
//             {isClient && <Lottie animationData={animationData} loop={true} />}
//           </div>

//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Login your Account!
//           </h1>

//           <form onSubmit={handleLogin}>
//             {/* Email */}
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="flex text-gray-700 font-bold mb-2 items-center gap-2"
//               >
//                 <MdOutlineMailOutline size={24} /> Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="border-green-500 border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 suppressHydrationWarning
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-6 relative">
//               <label
//                 htmlFor="password"
//                 className="flex text-gray-700 text-lg font-bold mb-2 items-center gap-2"
//               >
//                 <RiLockPasswordLine size={24} /> Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 className="border-green-500 border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 pr-10"
//                 placeholder="Your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 suppressHydrationWarning
//               />
//               {/* Eye Toggle Button */}
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-11 text-gray-500 hover:text-gray-700"
//                 suppressHydrationWarning
//               >
//                 {showPassword ? (
//                   <AiFillEyeInvisible size={22} />
//                 ) : (
//                   <AiFillEye size={22} />
//                 )}
//               </button>
//             </div>

//             {/* Submit */}
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="bg-[#ff3811] text-white font-bold py-2 px-4 rounded"
//                 suppressHydrationWarning
//               >
//                 Login
//               </button>
//             </div>

//             {/* Register Link */}
//             <Link href={"/register"}>
//               <h4 className="font-bold mt-5 text-center">
//                 * Don't have account{" "}
//                 <span className="text-[#ff3811]">Signup</span> Now
//               </h4>
//             </Link>

//             {/* Social Login */}
//             <p className="text-center mt-3">Or Sign in with</p>
//             <Sociallogin />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import Sociallogin from "./Sociallogin";
// import animationData from "../../../public/assets/images/about_us/zpunet icon (1).json";

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// export default function LoginPage() {
//   const [isClient, setIsClient] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire("✅ Success!", "Login successful!", "success");
//         localStorage.setItem("token", data.token); // JWT save
//         router.push("/"); // 🔥 redirect to Home page
//       } else {
//         Swal.fire("❌ Error", data.error, "error");
//       }
//     } catch (error) {
//       Swal.fire("⚠️ Error", "Something went wrong", "error");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex flex-row gap-8 items-center">
//         {/* Left Image */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="/assets/images/login/Privacy-policy-rafiki.png"
//             alt="Login"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <div className="w-40 mx-auto mb-4">
//             {isClient && <Lottie animationData={animationData} loop={true} />}
//           </div>

//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Login your Account!
//           </h1>

//           <form onSubmit={handleLogin}>
//             {/* Email */}
//             <div className="mb-4">
//               <label htmlFor="email" className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <MdOutlineMailOutline size={24} /> Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="border-green-500 border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 suppressHydrationWarning
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-6 relative">
//               <label htmlFor="password" className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <RiLockPasswordLine size={24} /> Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 className="border-green-500 border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 pr-10"
//                 placeholder="Your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 suppressHydrationWarning
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-11 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
//               </button>
//             </div>

//             {/* Submit */}
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="bg-[#ff3811] text-white font-bold py-2 px-4 rounded"
//               >
//                 Login
//               </button>
//             </div>

//             <Link href={"/register"}>
//               <h4 className="font-bold mt-5 text-center">
//                 * Don't have account <span className="text-[#ff3811]">Signup</span> Now
//               </h4>
//             </Link>

//             <p className="text-center mt-3">Or Sign in with</p>
//             <Sociallogin />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // 🔥 import useRouter
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import Sociallogin from "./Sociallogin";
// import animationData from "../../../public/assets/images/about_us/zpunet icon (1).json";

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// export default function LoginPage() {
//   const [isClient, setIsClient] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter(); // 🔥 router hook

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire("✅ Success!", "Login successful!", "success");
//         localStorage.setItem("token", data.token); // JWT save
//         router.push("/"); // 🔥 successful login এর পর "/" page এ navigate
//       } else {
//         Swal.fire("❌ Error", data.error, "error");
//       }
//     } catch (error) {
//       Swal.fire("⚠️ Error", "Something went wrong", "error");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex flex-row gap-8 items-center">
//         {/* Left Image */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="/assets/images/login/Privacy-policy-rafiki.png"
//             alt="Login"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <div className="w-40 mx-auto mb-4">
//             {isClient && <Lottie animationData={animationData} loop={true} />}
//           </div>

//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Login your Account!
//           </h1>

//           <form onSubmit={handleLogin}>
//             {/* Email */}
//             <div className="mb-4">
//               <label htmlFor="email" className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <MdOutlineMailOutline size={24} /> Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="border-green-500 border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 suppressHydrationWarning
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-6 relative">
//               <label htmlFor="password" className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <RiLockPasswordLine size={24} /> Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 className="border-green-500 border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 pr-10"
//                 placeholder="Your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 suppressHydrationWarning
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-11 text-gray-500 hover:text-gray-700"
//                   suppressHydrationWarning
//               >
//                 {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
//               </button>
//             </div>

//             {/* Submit */}
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="bg-[#ff3811] text-white font-bold py-2 px-4 rounded"
//                   suppressHydrationWarning
//               >
//                 Login
//               </button>
//             </div>

//             <Link href={"/register"}>
//               <h4 className="font-bold mt-5 text-center">
//                 * Don't have account <span className="text-[#ff3811]">Signup</span> Now
//               </h4>
//             </Link>

//             <p className="text-center mt-3">Or Sign in with</p>
//             <Sociallogin />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\login\page.jsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebaseConfig";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import Lottie from "lottie-react";
// import animationData from "../../../public/assets/images/about_us/register (4) (1).json";
// import Link from "next/link";
// import Image from "next/image";
// import Sociallogin from "../login/Sociallogin";
// import Swal from "sweetalert2";
// import loginImg from "../../../public/assets/images/login/Privacy-policy-rafiki.png";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       Swal.fire({
//         icon: "warning",
//         title: "Email and password are required",
//         confirmButtonColor: "#ff3811",
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       // Sign in with Firebase Auth
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       Swal.fire({
//         icon: "success",
//         title: "Successfully logged in!",
//         confirmButtonColor: "#ff3811",
//       }).then(() => {
//         router.push("/");
//       });
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Login failed",
//         text: error.message,
//         confirmButtonColor: "#ff3811",
//       });
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex flex-row gap-8 items-center">
//         {/* Left Part */}
//         <div className="w-1/2 hidden md:block">
//           <Image src={loginImg} alt="Login" width={500} height={500} priority />
//         </div>

//         {/* Right Part */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <div className="w-40 mx-auto mb-4">
//             <Lottie animationData={animationData} loop={true} />
//           </div>

//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Login to your account!
//           </h1>

//           <form onSubmit={handleSubmit}>
//             {/* Email */}
//             <div className="mb-4">
//               <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <MdOutlineMailOutline size={24} /> Email
//               </label>
//               <input
//                 type="email"
//                 className="border-2 border-green-500 rounded w-full py-2 px-3"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                   suppressHydrationWarning
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-6 relative">
//               <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <RiLockPasswordLine size={24} /> Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="border-2 border-green-500 rounded w-full py-2 px-3 pr-10"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                   suppressHydrationWarning
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//                   suppressHydrationWarning
//               >
//                 {showPassword ? (
//                   <AiOutlineEyeInvisible size={30} className="mt-6" />
//                 ) : (
//                   <AiOutlineEye size={30} className="mt-6" />
//                 )}
//               </button>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="bg-[#ff3811] text-white font-bold py-2 px-4 rounded w-full"
//               disabled={loading}
//                 suppressHydrationWarning
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <Link href="/register">
//               <h4 className="font-bold mt-5 text-center">
//                 * Don't have an account?{" "}
//                 <span className="text-[#ff3811]">Signup</span> Now
//               </h4>
//             </Link>
//             <div className="divider divider-accent">OR</div>
//             <Sociallogin />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }  



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Lottie from "lottie-react";
import animationData from "../../../public/assets/images/about_us/zpunet icon (1).json";
import Link from "next/link";
import Image from "next/image";
import Sociallogin from "../login/Sociallogin";
import Swal from "sweetalert2";
import loginImg from "../../../public/assets/images/login/login.svg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Email and password are required",
        confirmButtonColor: "#ff3811",
      });
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      Swal.fire({
        icon: "success",
        title: "Successfully logged in!",
        confirmButtonColor: "#ff3811",
      }).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: error.message,
        confirmButtonColor: "#ff3811",
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl">
        {/* Left Part */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={loginImg}
            alt="Login"
            width={500}
            height={500}
            priority
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>

        {/* Right Part */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
          <div className="w-32 sm:w-40 mx-auto mb-4">
            <Lottie animationData={animationData} loop={true} />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Login to your account!
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
                <MdOutlineMailOutline size={20} /> Email
              </label>
              <input
                type="email"
                className="border-2 border-green-500 rounded w-full py-2 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                suppressHydrationWarning
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
                <RiLockPasswordLine size={20} /> Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="border-2 border-green-500 rounded w-full py-2 px-3 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                suppressHydrationWarning
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={24} className="mt-6" />
                ) : (
                  <AiOutlineEye size={24} className="mt-6" />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#ff3811] text-white font-bold py-2 px-4 rounded w-full"
              disabled={loading}
              suppressHydrationWarning
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <Link href="/register">
              <h4 className="font-bold mt-5 text-center text-sm sm:text-base">
                * Don't have an account?{" "}
                <span className="text-[#ff3811]">Signup</span> Now
              </h4>
            </Link>
            <div className="divider divider-accent">OR signin with</div>
            <Sociallogin />
          </form>
        </div>
      </div>
    </div>
  );
}
