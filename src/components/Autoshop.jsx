// // import React from 'react'

// // export default function Autoshop() {
// //   return (
// //     <div>Autoshop</div>
// //   )
// // }


// "use client";
// import React from 'react';
// import Image from "next/image";
// import { useTheme } from "./ThemeProvider";
// export default function Autoshop() {
//   return (
//     <div className=" py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
//           {/* Left Section: Text Content */}
//           <div className="lg:w-1/2">
//             <h5 className="text-gray-500 uppercase tracking-widest text-sm mb-2">
//               — HOW WE ARE
//             </h5>
//             <h1 className="text-5xl font-bold mb-8 leading-tight">
//               Welcome to Auto shop
//             </h1>
//             <p className="text-gray-700 mb-6 text-lg">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
//               been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
//               galley of type and scrambled it to make a type specimen book.
//             </p>
//             <p className="text-gray-700 mb-10 text-lg">
//               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
//               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
//               like Aldus PageMaker including versions of Lorem Ipsum.
//             </p>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="card bg-base-100 shadow-xl border border-gray-200">
//                 <div className="card-body items-center text-center">
//                   <div className="bg-red-100 p-3 rounded-full mb-4">
//                     {/* Steering Wheel Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-red-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 21a9 9 0 01-9-9V7a4 4 0 014-4h2a4 4 0 014 4v5m0 4.586l-2.707-2.707A3 3 0 0011 12.293V7a4 4 0 014-4h2a4 4 0 014 4v5m0 4.586A8.966 8.966 0 0112 21z"
//                       />
//                     </svg>
//                   </div>
//                   <h2 className="card-title text-xl font-semibold">WE OFFERS LOWER CARS PRICES</h2>
//                 </div>
//               </div>

//               <div className="card bg-base-100 shadow-xl border border-gray-200">
//                 <div className="card-body items-center text-center">
//                   <div className="bg-blue-100 p-3 rounded-full mb-4">
//                     {/* Car Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-blue-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7a1 1 0 00-1-1h-2.586a1 1 0 00-.707.293L11 11.586V15m1.707 5.293L15 17.586V14.5m-5.293 2.707L7 14.5V17.586m14-11A2 2 0 0019 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6z"
//                       />
//                     </svg>
//                   </div>
//                   <h2 className="card-title text-xl font-semibold">LARGEST CARS DEALER SHIP</h2>
//                 </div>
//               </div>

//               <div className="card bg-base-100 shadow-xl border border-gray-200">
//                 <div className="card-body items-center text-center">
//                   <div className="bg-green-100 p-3 rounded-full mb-4">
//                     {/* Shield with Checkmark Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-green-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M9 12l2 2 4-4m5.618-4.276A11.955 11.955 0 0112 2.944V3a1 1 0 00-1 1v1.588l.241-.072a1 1 0 00.323-1.632l-2-2a1 1 0 00-1.632.323l-.072.241H4a1 1 0 00-1 1v2a1 1 0 001 1h.588l-.072.241a1 1 0 00-.323 1.632l2 2a1 1 0 001.632-.323l.072-.241V19a1 1 0 001 1h2a1 1 0 001-1v-2.588l.241.072a1 1 0 001.632-.323l2-2a1 1 0 00.323-1.632l-.072-.241H20a1 1 0 001-1V5a1 1 0 00-1-1zm-1.892 8.243a.75.75 0 10-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l.5.5a.75.75 0 001.06 0l4.5-4.5z"
//                       />
//                     </svg>
//                   </div>
//                   <h2 className="card-title text-xl font-semibold">MULTIPOINT SAFETY CHECKS OFFERS</h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Image */}
// <div className="lg:w-1/2 flex justify-center lg:justify-end">
//   <div className="relative w-full h-[550px] rounded-box overflow-hidden shadow-2xl">
//     <Image
//       src="/assets/images/banner/autoshop.png"
//       alt="Modern car showroom with various cars"
//       fill
//       className="object-cover"
//       priority
//     />
//   </div>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\components\Autoshop.jsx
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useTheme } from "./ThemeProvider";

// export default function Autoshop() {
//   const { theme, toggleTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <div className={`py-16 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
//           {/* Left Section: Text Content */}
//           <div className="lg:w-1/2">
//             <h5 className="uppercase tracking-widest text-sm mb-2 text-gray-500">
//               — HOW WE ARE
//             </h5>
//             <h1 className="text-5xl font-bold mb-8 leading-tight">
//               Welcome to 0ur shop
//             </h1>
//             <p className="mb-6 text-lg">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry...
//             </p>
//             <p className="mb-10 text-lg">
//               Remaining essentially unchanged. It was popularised in the 1960s...
//             </p>

            

//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Card 1 */}
//               <div className={`card shadow-xl border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-base-100 border-gray-200"}`}>
//                 <div className="card-body items-center text-center">
//                   <div className="bg-red-100 p-3 rounded-full mb-4">
//                     {/* Steering Wheel Icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9V7a4 4 0 014-4h2a4 4 0 014 4v5m0 4.586l-2.707-2.707A3 3 0 0011 12.293V7a4 4 0 014-4h2a4 4 0 014 4v5m0 4.586A8.966 8.966 0 0112 21z" />
//                     </svg>
//                   </div>
//                   <h2 className="card-title text-xl font-semibold">WE OFFERS LOWER CARS PRICES</h2>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className={`card shadow-xl border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-base-100 border-gray-200"}`}>
//                 <div className="card-body items-center text-center">
//                   <div className="bg-blue-100 p-3 rounded-full mb-4">
//                     {/* Car Icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7a1 1 0 00-1-1h-2.586a1 1 0 00-.707.293L11 11.586V15m1.707 5.293L15 17.586V14.5m-5.293 2.707L7 14.5V17.586m14-11A2 2 0 0019 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6z" />
//                     </svg>
//                   </div>
//                   <h2 className="card-title text-xl font-semibold">LARGEST CARS DEALER SHIP</h2>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className={`card shadow-xl border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-base-100 border-gray-200"}`}>
//                 <div className="card-body items-center text-center">
//                   <div className="bg-green-100 p-3 rounded-full mb-4">
//                     {/* Shield Icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.276A11.955 11.955 0 0112 2.944V3a1 1 0 00-1 1v1.588l.241-.072a1 1 0 00.323-1.632l-2-2a1 1 0 00-1.632.323l-.072.241H4a1 1 0 00-1 1v2a1 1 0 001 1h.588l-.072.241a1 1 0 00-.323 1.632l2 2a1 1 0 001.632-.323l.072-.241V19a1 1 0 001 1h2a1 1 0 001-1v-2.588l.241.072a1 1 0 001.632-.323l2-2a1 1 0 00.323-1.632l-.072-.241H20a1 1 0 001-1V5a1 1 0 00-1-1zm-1.892 8.243a.75.75 0 10-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l.5.5a.75.75 0 001.06 0l4.5-4.5z" />
//                     </svg>
//                   </div>
//                   <h2 className="card-title text-xl font-semibold">MULTIPOINT SAFETY CHECKS OFFERS</h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Image */}
//           <div className="lg:w-1/2 flex justify-center lg:justify-end">
//             <div className="relative w-full h-[550px] rounded-box overflow-hidden shadow-2xl">
//               <Image
//                 src="/assets/images/banner/autoshop.png"
//                 alt="Modern car showroom with various cars"
//                 fill
                
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Autoshop() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`py-12 md:py-16 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2 w-full">
            <h5 className="uppercase tracking-widest text-sm mb-2 text-gray-500">
              — HOW WE ARE
            </h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Welcome to 0ur shop
            </h1>
            <p className="mb-4 md:mb-6 text-base sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            <p className="mb-6 md:mb-10 text-base sm:text-lg">
              Remaining essentially unchanged. It was popularised in the 1960s...
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className={`card shadow-xl border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-base-100 border-gray-200"}`}>
                <div className="card-body items-center text-center">
                  <div className="bg-red-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9V7a4 4 0 014-4h2a4 4 0 014 4v5m0 4.586l-2.707-2.707A3 3 0 0011 12.293V7a4 4 0 014-4h2a4 4 0 014 4v5m0 4.586A8.966 8.966 0 0112 21z" />
                    </svg>
                  </div>
                  <h2 className="card-title text-lg sm:text-xl font-semibold">WE OFFERS LOWER CARS PRICES</h2>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`card shadow-xl border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-base-100 border-gray-200"}`}>
                <div className="card-body items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7a1 1 0 00-1-1h-2.586a1 1 0 00-.707.293L11 11.586V15m1.707 5.293L15 17.586V14.5m-5.293 2.707L7 14.5V17.586m14-11A2 2 0 0019 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6z" />
                    </svg>
                  </div>
                  <h2 className="card-title text-lg sm:text-xl font-semibold">LARGEST CARS DEALER SHIP</h2>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`card shadow-xl border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-base-100 border-gray-200"}`}>
                <div className="card-body items-center text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.276A11.955 11.955 0 0112 2.944V3a1 1 0 00-1 1v1.588l.241-.072a1 1 0 00.323-1.632l-2-2a1 1 0 00-1.632.323l-.072.241H4a1 1 0 00-1 1v2a1 1 0 001 1h.588l-.072.241a1 1 0 00-.323 1.632l2 2a1 1 0 001.632-.323l.072-.241V19a1 1 0 001 1h2a1 1 0 001-1v-2.588l.241.072a1 1 0 001.632-.323l2-2a1 1 0 00.323-1.632l-.072-.241H20a1 1 0 001-1V5a1 1 0 00-1-1zm-1.892 8.243a.75.75 0 10-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l.5.5a.75.75 0 001.06 0l4.5-4.5z" />
                    </svg>
                  </div>
                  <h2 className="card-title text-lg sm:text-xl font-semibold">MULTIPOINT SAFETY CHECKS OFFERS</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] rounded-box overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/banner/autoshop.png"
                alt="Modern car showroom with various cars"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
