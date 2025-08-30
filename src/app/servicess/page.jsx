
// C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\servicess\page.jsx

// import React from 'react'

// export default function page() {
//   return (
//     <div></div>
//   )
// }


// import React from 'react'

// import { MdSearch, MdLocalShipping } from "react-icons/md";
// import { GiExchange, GiGearStick } from "react-icons/gi";
// import { FaPaintRoller, FaMoneyBillWave } from "react-icons/fa";


// export default function page() {
//   return (
//     <div className="bg-white py-20 px-8 lg:px-24">
//       <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
        
//         {/* Left Section - Image */}
//         <div className="lg:w-1/2 relative z-10">
//           <img
//             //src="http://googleusercontent.com/file_content/0" // Use the provided image URL here
//             src="/assets/images/banner/autoshop.png"
//             alt="Car"
//             className="rounded-lg shadow-2xl w-full h-auto"
//           />
//         </div>

//         {/* Right Section - Services */}
//         <div className="lg:w-1/2">
//           <div className="text-center lg:text-left mb-12">
//             <p className="text-gray-500 uppercase tracking-widest text-sm">
//               — Our Services
//             </p>
//             <h2 className="text-4xl font-bold mt-2">
//               Services We Offers
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Service Card 1 */}
//             <div className="card bg-base-100 shadow-xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-red-500 rounded-full p-3">
//                   {/* Placeholder for Icon */}
//                   <div className="w-8 h-8 bg-white mask mask-squircle"> <MdSearch className="text-4xl text-red-500" /></div>
                  
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Car Inspection</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Service Card 2 */}
//             <div className="card bg-base-100 shadow-xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-red-500 rounded-full p-3">
//                   {/* Placeholder for Icon */}
//                   <div className="w-8 h-8 bg-white mask mask-squircle"><GiExchange className="text-4xl text-red-500" /> </div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Vehicle Trade-in</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Service Card 3 */}
//             <div className="card bg-base-100 shadow-xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-red-500 rounded-full p-3">
//                   {/* Placeholder for Icon */}
//                   <div className="w-8 h-8 bg-white mask mask-squircle"><FaPaintRoller className="text-4xl text-red-500" /></div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Auto Painting</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Service Card 4 */}
//             <div className="card bg-base-100 shadow-xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-red-500 rounded-full p-3">
//                   {/* Placeholder for Icon */}
//                   <div className="w-8 h-8 bg-white mask mask-squircle"><GiGearStick className="text-4xl text-red-500" /></div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Parts Repairing</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Service Card 5 */}
//             <div className="card bg-base-100 shadow-xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-red-500 rounded-full p-3">
//                   {/* Placeholder for Icon */}
//                   <div className="w-8 h-8 bg-white mask mask-squircle"><FaMoneyBillWave className="text-4xl text-red-500" /></div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Auto Financing</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Service Card 6 */}
//             <div className="card bg-base-100 shadow-xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-red-500 rounded-full p-3">
//                   {/* Placeholder for Icon */}
//                   <div className="w-8 h-8 bg-white mask mask-squircle"><MdLocalShipping className="text-4xl text-red-500" /> </div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Vehicle Delivery</h3>
//                   <p className="text-gray-600 text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>
//     </div>
//   )
// }



import React from 'react';

import { MdSearch, MdLocalShipping } from "react-icons/md";
import { GiCardExchange, GiGearStick } from "react-icons/gi"; // Corrected here
import { FaPaintRoller, FaMoneyBillWave, FaCarSide } from "react-icons/fa";

export default function page() {
  return (
    <div className="text-base-content py-20 px-8 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
        
        {/* Left Section - Image */}
        <div className="lg:w-1/2 relative z-10">
          <img
            src="/assets/images/banner/autoshop.png"
            alt="Car"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </div>

        {/* Right Section - Services */}
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left mb-12">
            <p className="text-black uppercase tracking-widest text-sm">
              — Our Services
            </p>
            <h2 className="text-4xl text-black font-bold mt-2">
              Services We Offers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className=" rounded-full p-3">
                  <div className=" mask mask-squircle"> 
                    {/* <MdSearch className="text-4xl text-blue-500" /> */}
                    <FaCarSide className="text-5xl text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Car Inspection</h3>
                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3">
                  <div className="w-8 h-8 bg-white mask mask-squircle">
                    <GiCardExchange className="text-4xl text-blue-500" /> {/* Corrected here */}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Vehicle Trade-in</h3>
                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3">
                  <div >
                    <FaPaintRoller className="text-4xl text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Auto Painting</h3>
                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3">
                  <div >
                    <GiGearStick className="text-4xl text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Parts Repairing</h3>
                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className=" rounded-full p-3">
                  <div >
                    <FaMoneyBillWave className="text-4xl text-green-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Auto Financing</h3>
                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className=" rounded-full p-3">
                  <div >
                    <MdLocalShipping className="text-4xl text-yellow-400" /> 
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Vehicle Delivery</h3>
                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
