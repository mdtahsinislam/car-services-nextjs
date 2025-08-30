

// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\components\Banner.jsx

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useTheme } from "./ThemeProvider"; // ThemeProvider থেকে useTheme আনো



// import { FaTachometerAlt, FaGasPump, FaCogs } from "react-icons/fa";
// import { GiCarWheel } from "react-icons/gi";

// const cars = [
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner1.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner2.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner5-removebg-preview.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner4.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
// ];

// export default function Banner() {
//   const [currentCarIndex, setCurrentCarIndex] = useState(0);
//   const { theme } = useTheme(); // ✅ থিম এখানে আনো

//   const handleNext = () => {
//     setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
//   };

//   const handlePrev = () => {
//     setCurrentCarIndex(
//       (prevIndex) => (prevIndex - 1 + cars.length) % cars.length
//     );
//   };

//   const currentCar = cars[currentCarIndex];

//   return (
//     <div
//       className={`relative container mx-auto h-screen flex items-center justify-center transition-colors duration-500 ${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex">
//         {/* Text Section */}
//         <div className="flex flex-col justify-center w-1/2 pr-12">
//           <p className="text-sm uppercase tracking-widest">
//             Introducing the →
//           </p>
//           <h1 className="text-6xl font-bold mt-2 leading-tight">
//             {currentCar.name}
//           </h1>
//           <p className="mt-4 max-w-lg text-sm opacity-70">
//             We all have a dream car some wish for a classy one where others
//             dream of having a simple old school one.
//           </p>
//           <button className="btn btn-primary mt-8 w-48">ORDER NOW</button>
//         </div>

//         {/* Image Carousel Section */}
//         <div className="relative w-1/2">
//           {/* Main Car Image */}
//           <div className="w-full h-full relative">
//             <Image
//               src={currentCar.image}
//               alt={currentCar.name}
//               layout="fill"
//               objectFit="contain"
//               quality={100}
//             />
//           </div>

//           {/* Pagination Indicators */}
//           <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col space-y-2 mr-4">
//             {cars.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
//                   index === currentCarIndex
//                     ? theme === "dark"
//                       ? "bg-green-400"
//                       : "bg-green-700"
//                     : "bg-gray-500"
//                 }`}
//                 onClick={() => setCurrentCarIndex(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

      







// <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-12 text-center">
//   {/* Acceleration */}
//   <div className="flex flex-col items-center">
//     <FaTachometerAlt className="text-4xl text-accent mb-2" />
//     <p className="text-3xl font-bold">{currentCar.stats.acceleration}</p>
//     <p className="text-xs mt-1 opacity-70">From 0-100kmph</p>
//   </div>

//   {/* Engine Power */}
//   <div className="flex flex-col items-center">
//     {/* Option 1 */}
//     <GiCarWheel className="text-4xl text-orange-500 mb-2" />
//     {/* Option 2 (if you prefer gears look) */}
//     {/* <FaCogs className="text-4xl text-orange-500 mb-2" /> */}
//     <p className="text-3xl font-bold">{currentCar.stats.enginePower}</p>
//     <p className="text-xs mt-1 opacity-70">Engine Power</p>
//   </div>

//   {/* Fuel Tank Capacity */}
//   <div className="flex flex-col items-center">
//     <FaGasPump className="text-4xl text-green-600 mb-2" />
//     <p className="text-3xl font-bold">{currentCar.stats.fuelCapacity}</p>
//     <p className="text-xs mt-1 opacity-70">Fuel Tank Capacity</p>
//   </div>
// </div>
















//     </div>
//   );
// }




// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useTheme } from "./ThemeProvider";

// import { FaTachometerAlt, FaGasPump } from "react-icons/fa";
// import { GiCarWheel } from "react-icons/gi";

// const cars = [
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner1.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner2.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner5-removebg-preview.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
//   {
//     name: "Mercedes-AMG GT",
//     image: "/assets/images/banner/carbanner4.png",
//     stats: {
//       acceleration: "4.4s",
//       enginePower: "566hp",
//       fuelCapacity: "100.0",
//     },
//   },
// ];

// export default function Banner() {
//   const [currentCarIndex, setCurrentCarIndex] = useState(0);
//   const { theme } = useTheme();

//   const currentCar = cars[currentCarIndex];

//   return (
//     <div
//       className={`relative container mx-auto min-h-screen flex items-center justify-center px-4 py-8 transition-colors duration-500 ${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 w-full">
//         {/* Left Content */}
//         <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
//           <p className="text-sm uppercase tracking-widest">
//             Introducing the →
//           </p>
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
//             {currentCar.name}
//           </h1>
//           <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-sm md:text-base opacity-70">
//             We all have a dream car some wish for a classy one where others
//             dream of having a simple old school one.
//           </p>
//           <button className="btn btn-primary mt-6 md:mt-8 w-40 md:w-48 mx-auto lg:mx-0">
//             ORDER NOW
//           </button>
//         </div>

//         {/* Right Content - Image Carousel */}
//         <div className="relative w-full lg:w-1/2 h-64 md:h-96 lg:h-[500px]">
//           <Image
//             src={currentCar.image}
//             alt={currentCar.name}
//             fill
//             className="object-contain"
//             quality={100}
//           />

      //     {/* Pagination Indicators */}
      //     <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col space-y-2">
      //       {cars.map((_, index) => (
      //         <div
      //           key={index}
      //           className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
      //             index === currentCarIndex
      //               ? theme === "dark"
      //                 ? "bg-green-400"
      //                 : "bg-green-700"
      //               : "bg-gray-500"
      //           }`}
      //           onClick={() => setCurrentCarIndex(index)}
      //         />
      //       ))}
      //     </div>
      //   </div>
      // </div>

//       {/* Bottom Stats */}
//       <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col md:flex-row space-y-6 md:space-y-0  md:space-x-12 text-center bg-white/20 dark:bg-black/20 backdrop-blur-md p-4 md:p-6 rounded-xl">
//         {/* Acceleration */}
//         <div className="flex flex-col items-center">
//           <FaTachometerAlt className="text-3xl md:text-4xl text-accent mb-2" />
//           <p className="text-xl md:text-3xl font-bold">
//             {currentCar.stats.acceleration}
//           </p>
//           <p className="text-xs mt-1 opacity-70">From 0-100kmph</p>
//         </div>

//         {/* Engine Power */}
//         <div className="flex flex-col items-center">
//           <GiCarWheel className="text-3xl md:text-4xl text-orange-500 mb-2" />
//           <p className="text-xl md:text-3xl font-bold">
//             {currentCar.stats.enginePower}
//           </p>
//           <p className="text-xs mt-1 opacity-70">Engine Power</p>
//         </div>

//         {/* Fuel Tank */}
//         <div className="flex flex-col items-center">
//           <FaGasPump className="text-3xl md:text-4xl text-green-600 mb-2" />
//           <p className="text-xl md:text-3xl font-bold">
//             {currentCar.stats.fuelCapacity}
//           </p>
//           <p className="text-xs mt-1 opacity-70">Fuel Tank Capacity</p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider"; // ThemeProvider থেকে useTheme আনো

import { FaTachometerAlt, FaGasPump, FaCogs } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

const cars = [
  {
    name: "Mercedes-AMG GT",
    image: "/assets/images/banner/carbanner1.png",
    stats: {
      acceleration: "4.4s",
      enginePower: "566hp",
      fuelCapacity: "100.0L", // Changed for better readability
    },
  },
  {
    name: "Mercedes-AMG GT",
    image: "/assets/images/banner/carbanner2.png",
    stats: {
      acceleration: "4.4s",
      enginePower: "566hp",
      fuelCapacity: "100.0L",
    },
  },
  {
    name: "Mercedes-AMG GT",
    image: "/assets/images/banner/carbanner5-removebg-preview.png",
    stats: {
      acceleration: "4.4s",
      enginePower: "566hp",
      fuelCapacity: "100.0L",
    },
  },
  {
    name: "Mercedes-AMG GT",
    image: "/assets/images/banner/carbanner4.png",
    stats: {
      acceleration: "4.4s",
      enginePower: "566hp",
      fuelCapacity: "100.0L",
    },
  },
];

export default function Banner() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const { theme } = useTheme();

  const currentCar = cars[currentCarIndex];

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center transition-colors duration-500 overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-16 lg:py-0 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section - Flexible for all screen sizes */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
          <p className="text-sm uppercase tracking-widest text-secondary-500">
            Introducing the →
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
            {currentCar.name}
          </h1>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm opacity-70">
            We all have a dream car some wish for a classy one where others
            dream of having a simple old school one.
          </p>
          <button className="btn btn-primary mt-8 mx-auto lg:mx-0 w-48 transition-transform duration-300 hover:scale-105">
            ORDER NOW
          </button>
        </div>

        {/* Image Carousel Section - Flexible layout */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-[600px] flex items-center justify-center">
          {/* Main Car Image */}
          <div className="w-full h-full relative">
            <Image
              src={currentCar.image}
              alt={currentCar.name}
              fill
              style={{ objectFit: "contain" }} 
              // objectFit="contain"
              quality={100}
              className="transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Pagination Indicators - Positioned responsively */}
          {/* <div className="absolute top-1/2 -right-4 translate-y-1/2 hidden lg:flex flex-col space-y-3 mr-4">
            {cars.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  index === currentCarIndex
                    ? theme === "dark"
                      ? "bg-green-400"
                      : "bg-green-700"
                    : "bg-gray-500"
                }`}
                onClick={() => setCurrentCarIndex(index)}
              />
            ))}
          </div>
        </div>
      </div> */}

                      {/* Pagination Indicators */}
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 flex flex-col space-y-2">
            {cars.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  index === currentCarIndex
                    ? theme === "dark"
                      ? "bg-green-600"
                      : "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={() => setCurrentCarIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Car Stats Section - Responsive layout */}
      <div className="absolute bottom-4 md:bottom-12 w-full flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-8 md:gap-x-12 px-4">
          {/* Acceleration */}
          <div className="flex flex-col items-center text-center">
            <FaTachometerAlt className="text-3xl md:text-4xl text-accent mb-2" />
            <p className="text-xl md:text-3xl font-bold">{currentCar.stats.acceleration}</p>
            <p className="text-xs mt-1 opacity-70">From 0-100kmph</p>
          </div>

          {/* Engine Power */}
          <div className="flex flex-col items-center text-center">
            <GiCarWheel className="text-3xl md:text-4xl text-orange-500 mb-2" />
            <p className="text-xl md:text-3xl font-bold">{currentCar.stats.enginePower}</p>
            <p className="text-xs mt-1 opacity-70">Engine Power</p>
          </div>

          {/* Fuel Tank Capacity */}
          <div className="flex flex-col items-center text-center">
            <FaGasPump className="text-3xl md:text-4xl text-green-600 mb-2" />
            <p className="text-xl md:text-3xl font-bold">{currentCar.stats.fuelCapacity}</p>
            <p className="text-xs mt-1 opacity-70">Fuel Tank Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}