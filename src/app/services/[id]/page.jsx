
// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\pages\services\[id]\page.jsx

// import dbConnect from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";
// import Image from "next/image";
// import Link from "next/link";
// import { BsArrowLeft } from "react-icons/bs";

// export default async function ServiceDetails({ params }) {
//   const { id } = params;

//   // Connect to MongoDB and fetch the specific service by _id
//   const serviceCollection = await dbConnect("test_services");
//   const service = await serviceCollection.findOne({ _id: new ObjectId(id) });

//   if (!service) {
//     return (
//       <div className="text-center mt-10">
//         <p className="text-red-500 text-xl">Service not found</p>
//         <Link href="/services" className="btn btn-outline btn-accent mt-4 inline-flex items-center gap-2">
//           <BsArrowLeft /> Back to Services
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       {/* <Link href="/" className="btn btn-outline btn-accent mb-8 inline-flex items-center gap-2">
//         <BsArrowLeft /> Back to Services
//       </Link> */}

//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-1/2">
//           <img
//             src={service.img}
//             alt={service.title}
//             className="w-full h-96 object-cover rounded-lg shadow-md"
//           />
//         </div>

//         <div className="md:w-1/2 space-y-4">
//           <h1 className="text-3xl font-bold">{service.title}</h1>
//           <p className="text-accent font-semibold">Price: ${service.price}</p>
//           <p className="mt-4 text-gray-700 dark:text-gray-200">{service.description}</p>

//           <h2 className="text-2xl font-semibold mt-6">Facilities</h2>
//           <ul className="list-disc pl-5 mt-2 space-y-2">
//             {service.facility.map((item, idx) => (
//               <li key={idx}>
//                 <strong>{item.name}:</strong> {item.details}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }  i want below code output structure implement here first code 


// import { BsArrowLeft } from "react-icons/bs";
// import dbConnect from "@/lib/dbConnect";
// import Link from "next/link";
// import { ObjectId } from "mongodb";
// import Image from "next/image";
// import serviceBanner from "../../../public/assets/images/services/logoo.jpg";

// export default function ServiceDetails({ service }) {
//   if (!service) {
//     return <p className="text-center mt-10">Service not found</p>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-base-content bg-base-100">
//       {/* Full-width top banner */}
//       <div className="w-full">
//         <Image
//           src={serviceBanner}
//           alt="service-banner"
//           className="w-full h-[300px] object-cover"
//           priority
//         />
//       </div>

//       {/* Main content container */}
//       <div className="max-w-[1200px] w-full mx-auto py-12 px-4 lg:px-0">
//         {/* Back button and title */}
//         <div className="flex items-center mb-6 w-full">
//           <Link href="/" className="flex items-center text-lg hover:text-[#ff3811] transition-colors">
//             <BsArrowLeft className="text-2xl mr-2" />
//             Back to Home
//           </Link>
//         </div>

//         {/* Main flex container */}
//         <div className="flex flex-col lg:flex-row gap-8 w-full">
//           {/* Left side - 2/3 width on large screens */}
//           <div className="lg:w-2/3 w-full space-y-8">
//             <div className="flex flex-col items-center">
//               <Image
//                 src={service.img}
//                 alt={service.title}
//                 width={800}
//                 height={500}
//                 className="w-full h-[400px] object-cover rounded-lg"
//               />
//             </div>
            
//             <div>
//               <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
//               <p className="mb-6 text-lg">{service.description}</p>
              
//               <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {service.facility && service.facility.map((item, index) => (
//                   <div key={index} className="bg-base-200 p-4 rounded-md shadow-sm">
//                     <h3 className="font-bold text-lg">{item.name}</h3>
//                     <p>{item.details}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right side - 1/3 width on large screens */}
//           <div className="lg:w-1/3 w-full">
//             <div className="sticky top-24 space-y-6">
//               <div className="bg-base-200 p-6 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">Services</h2>
//                 <p>Explore our other services</p>
//               </div>
              
//               <div className="bg-neutral text-neutral-content p-6 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">Download</h2>
//                 <p>Get our service catalog</p>
//               </div>
              
//               <div className="bg-neutral text-neutral-content p-6 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">Car Doctor</h2>
//                 <p className="mb-2">Need Help? We Are Here to Help You</p>
//                 <p className="font-bold text-[#ff3811] mb-4">Car Doctor Special</p>
//                 <button className="bg-[#ff3811] text-white px-6 py-2 rounded-md hover:bg-[#ff5533] transition-colors">
//                   Get A Quote
//                 </button>
//               </div>
              
//               <div className="bg-base-200 p-6 rounded-lg">
//                 <p className="text-xl font-semibold text-[#ff3811] mb-4">
//                   Price: ${service.price}
//                 </p>
//                 <button className="btn w-full bg-[#ff3811] text-white font-bold hover:bg-[#ff5533] transition-colors">
//                   Proceed Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Server-side fetching
// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   try {
//     await dbConnect();
//     const serviceCollection = await dbConnect("test_services");
//     const service = await serviceCollection.findOne({ _id: new ObjectId(id) });

//     if (!service) {
//       return { notFound: true };
//     }

//     // Convert ObjectId to string for serialization
//     const serializedService = {
//       ...service,
//       _id: service._id.toString(),
//     };

//     return { props: { service: serializedService } };
//   } catch (error) {
//     console.error("Failed to fetch service data:", error);
//     return { notFound: true };
//   }
// }


// src/app/services/[id]/page.jsx

//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\services\[id]\page.jsx
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import serviceBanner from "../../../../public/assets/images/services/logoo.jpg";
//import ProtectedRoute from "@/app/components/ProtectedRoute";

export default async function ServiceDetails({ params }) {
  const { id } = params;

  // MongoDB থেকে service fetch করা
  await dbConnect();
  const serviceCollection = await dbConnect("test_services");
  const service = await serviceCollection.findOne({ _id: new ObjectId(id) });

  if (!service) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 text-xl">Service not found</p>
        <Link
          href="/services"
          className="btn btn-outline btn-accent mt-4 inline-flex items-center gap-2"
        >
          <BsArrowLeft /> Back to Services
        </Link>
      </div>
    );
  }

  // ObjectId convert to string
  service._id = service._id.toString();

  return (

   
<div className="flex flex-col items-center justify-center min-h-screen text-base-content bg-base-100">
      {/* Top banner */}
      <div className="mx-auto">
        <Image
          src={serviceBanner}
          alt="service-banner"
          className="mt-3 w-full  h-[400px] object-cover"
          priority
        />
      </div>

      {/* Main container */}
      <div className="max-w-[1200px] w-full mx-auto py-12 px-4 lg:px-0">
        {/* Back button */}
        <div className="flex items-center mb-6 w-full">
          <Link
            href="/"
            className="flex items-center text-lg hover:text-[#ff3811] transition-colors"
          >
            <BsArrowLeft className="text-2xl text-accent mr-2" />
            Back to Main service Area.
          </Link>
        </div>

        {/* Flex layout: Left 2/3, Right 1/3 */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Left side */}
          <div className="lg:w-2/3 w-full space-y-8">
            <Image
              src={service.img}
              alt={service.title}
              width={800}
              height={400}
              className="w-full  h-[400px] object-cover rounded-lg"
              priority
            />

            <div>
              <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
              <p className="mb-6 text-lg">{service.description}</p>

              <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.facility &&
                  service.facility.map((item, index) => (
                    <div
                      key={index}
                      className="bg-base-200 p-4 rounded-md shadow-sm"
                    >
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p>{item.details}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="lg:w-1/3 w-full">
            <div className="sticky top-24 space-y-6">
              <div className="bg-base-200 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <p>Explore our other services</p>
              </div>

              <div className="bg-neutral text-neutral-content p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Download</h2>
                <p>Get our service catalog</p>
              </div>

              <div className="bg-neutral text-neutral-content p-6 rounded-lg text-center">
                <h2 className="text-xl font-bold mb-4">Car Doctor</h2>
                <p className="mb-2">Need Help? We Are Here to Help You</p>
                <p className="font-bold text-[#ff3811] mb-4">
                  Car Doctor Special
                </p>
                <button className="bg-[#ff3811] text-white px-6 py-2 rounded-md hover:bg-[#ff5533] transition-colors">
                  Get A Quote
                </button>
              </div>

              <div className="bg-base-200 p-6 rounded-lg text-center">
                <p className="text-xl font-semibold text-[#ff3811] mb-4">
                  Price: ${service.price}
                </p>
                <Link href={`/services/${service._id}/checkout`}   >
                <button className="btn w-full bg-[#ff3811] text-white font-bold hover:bg-[#ff5533] transition-colors">
                  Proceed Checkout
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

