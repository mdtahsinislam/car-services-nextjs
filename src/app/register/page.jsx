





// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { CiFaceSmile, CiImageOn } from "react-icons/ci";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import Lottie from "lottie-react";
// import animationData from "../../../public/assets/images/about_us/register (4) (1).json";
// import Link from "next/link";
// import Image from "next/image";
// import Sociallogin from "../login/Sociallogin";
// import Swal from "sweetalert2";

// import loginImg from "../../../public/assets/images/login/Privacy-policy-rafiki.png";


// export default function RegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !file) {
//       Swal.fire({
//         icon: "warning",
//         title: "সব ফিল্ড পূরণ করুন",
//         confirmButtonColor: "#ff3811",
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       // 🔥 Step 1: Upload image to ImgBB
//       const formData = new FormData();
//       formData.append("image", file);

//       const imgbbRes = await fetch(
//         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const imgbbData = await imgbbRes.json();
//       const imageUrl = imgbbData.data.url;

//       // 🔥 Step 2: Send data to backend API
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password, image: imageUrl }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "সফলভাবে রেজিস্টার হয়েছে 🎉",
//           confirmButtonColor: "#ff3811",
          
//         }).then(() => {
//           // Success হলে Home এ পাঠাবো
//           router.push("/");
//         });

//         setName("");
//         setEmail("");
//         setPassword("");
//         setFile(null);
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "রেজিস্ট্রেশন ব্যর্থ",
//           text: data.message,
//           confirmButtonColor: "#ff3811",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Error registering user",
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
//           {/* <Image
//             src="/assets/images/login/login.svg"
//             alt="Login"
//             width={500}
//             height={500}
//             priority
//           /> */}
//           <Image src={loginImg} alt="Login" width={500} height={500} priority />

//         </div>

//         {/* Right Part */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <div className="w-40 mx-auto mb-4">
//             <Lottie animationData={animationData} loop={true} />
//           </div>

//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Sign up your account!
//           </h1>

//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="mb-4">
//               <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 Name <CiFaceSmile size={24} className="text-green-500 font-bold " />
//               </label>
//               <input
              
//                 type="text"
//                 className="border-2 border-green-500 rounded w-full py-2 px-3"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                  suppressHydrationWarning
//               />
//             </div>

//             {/* Picture */}
//             <div className="mb-4">
//               <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <CiImageOn size={24} /> Picture
//               </label>
//               <input
//                 type="file"
                
//                 className="border-2 border-green-500 rounded w-full py-2 px-3"
//                 onChange={(e) => setFile(e.target.files[0])}
//                  suppressHydrationWarning
//               />
//             </div>

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
//                  suppressHydrationWarning
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
//                  suppressHydrationWarning
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//                  suppressHydrationWarning
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
//                suppressHydrationWarning
//             >
//               {loading ? "Signing up..." : "Sign up"}
//             </button>

//             <Link href="/login">
//               <h4 className="font-bold mt-5 text-center">
//                 * Already have account{" "}
//                 <span className="text-[#ff3811]">Login</span> Now
//               </h4>
//             </Link>
//             <div className="divider divider-accent">OR</div>
//             <Sociallogin></Sociallogin>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//  //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\register\page.jsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "@/lib/firebaseConfig";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { CiFaceSmile, CiImageOn } from "react-icons/ci";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import Lottie from "lottie-react";
// import animationData from "../../../public/assets/images/about_us/register (4) (1).json";
// import Link from "next/link";
// import Image from "next/image";
// import Sociallogin from "../login/Sociallogin";
// import Swal from "sweetalert2";
// import loginImg from "../../../public/assets/images/login/Privacy-policy-rafiki.png";

// export default function RegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !file) {
//       Swal.fire({
//         icon: "warning",
//         title: "Please fill all fields",
//         confirmButtonColor: "#ff3811",
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       // Step 1: Upload image to ImgBB
//       const formData = new FormData();
//       formData.append("image", file);

//       const imgbbRes = await fetch(
//         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const imgbbData = await imgbbRes.json();
//       const imageUrl = imgbbData.data.url;

//       // Step 2: Create user in Firebase Auth
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Update profile with name and photo
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: imageUrl,
//       });

//       // Step 3: Send data to backend API
//       const res = await fetch("/api/social-register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, image: imageUrl }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Registration successful! 🎉",
//           confirmButtonColor: "#ff3811",
//         }).then(() => {
//           router.push("/");
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Registration failed",
//           text: data.message,
//           confirmButtonColor: "#ff3811",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Error registering user",
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
//             Sign up your account!
//           </h1>

//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="mb-4">
//               <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 Name <CiFaceSmile size={24} className="text-green-500 font-bold" />
//               </label>
//               <input
//                 type="text"
//                 className="border-2 border-green-500 rounded w-full py-2 px-3"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Picture */}
//             <div className="mb-4">
//               <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
//                 <CiImageOn size={24} /> Picture
//               </label>
//               <input
//                 type="file"
//                 className="border-2 border-green-500 rounded w-full py-2 px-3"
//                 onChange={(e) => setFile(e.target.files[0])}
//                 required
//               />
//             </div>

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
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-2 flex items-center text-gray-500"
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
//             >
//               {loading ? "Signing up..." : "Sign up"}
//             </button>

//             <Link href="/login">
//               <h4 className="font-bold mt-5 text-center">
//                 * Already have an account?{" "}
//                 <span className="text-[#ff3811]">Login</span> Now
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiFaceSmile, CiImageOn } from "react-icons/ci";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Lottie from "lottie-react";
import animationData from "../../../public/assets/images/about_us/register (4) (1).json";
import Link from "next/link";
import Image from "next/image";
import Sociallogin from "../login/Sociallogin";
import Swal from "sweetalert2";
import loginImg from "../../../public/assets/images/login/Privacy-policy-rafiki.png";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !file) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all fields",
        confirmButtonColor: "#ff3811",
      });
      return;
    }

    setLoading(true);

    try {
      // Upload image
      const formData = new FormData();
      formData.append("image", file);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgbbData = await imgbbRes.json();
      const imageUrl = imgbbData.data.url;

      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: imageUrl,
      });

      // Backend API
      const res = await fetch("/api/social-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, image: imageUrl }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration successful! 🎉",
          confirmButtonColor: "#ff3811",
        }).then(() => {
          router.push("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: data.message,
          confirmButtonColor: "#ff3811",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error registering user",
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
            Sign up your account!
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
                Name <CiFaceSmile size={20} className="text-green-500 font-bold" />
              </label>
              <input
                type="text"
                className="border-2 border-green-500 rounded w-full py-2 px-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                suppressHydrationWarning
              />
            </div>

            {/* Picture */}
            <div className="mb-4">
              <label className="flex text-gray-700 font-bold mb-2 items-center gap-2">
                <CiImageOn size={20} /> Picture
              </label>
              <input
                type="file"
                className="border-2 border-green-500 rounded w-full py-2 px-3"
                onChange={(e) => setFile(e.target.files[0])}
                required
                suppressHydrationWarning
              />
            </div>

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
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <Link href="/login">
              <h4 className="font-bold mt-5 text-center text-sm sm:text-base">
                * Already have an account?{" "}
                <span className="text-[#ff3811]">Login</span> Now
              </h4>
            </Link>
            <div className="divider divider-accent">OR</div>
            <Sociallogin />
          </form>
        </div>
      </div>
    </div>
  );
}
