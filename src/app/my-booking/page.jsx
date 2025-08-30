// // C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\my-booking\page.jsx

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaEdit, FaTrash } from "react-icons/fa";

// export default function MyBooking() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Bookings fetch (API থেকে)
//   useEffect(() => {
//     async function fetchBookings() {
//       try {
//         const res = await fetch("/api/orders");
//         const data = await res.json();
//         setBookings(data);
//       } catch (error) {
//         console.error("Booking fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchBookings();
//   }, []);

//   // ✅ Delete Handler
//   const handleDelete = async (id) => {
//     const confirmDelete = confirm("Are you sure you want to delete?");
//     if (!confirmDelete) return;

//     try {
//       const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//       if (res.ok) {
//         setBookings(bookings.filter((b) => b._id !== id));
//       }
//     } catch (error) {
//       console.error("Delete error:", error);
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading bookings...</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-6 text-base-content">
//       <h1 className="text-3xl font-bold mb-6 text-center text-black">My Bookings</h1>

//       <div className="overflow-x-auto">
//         <table className="table w-full  rounded-lg text-base-content">
//           <thead className="bg-base-200 text-base-content">
//             <tr>
//               <th>Service Image</th>
//               <th>Service Name</th>
//               <th>Service Date</th>
//               <th>Service Price</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody >
//             {bookings.length > 0 ? (
//               bookings.map((booking) => (
//                 <tr key={booking._id} className="hover:bg-base-100  shadow-lg ">
//                   <td>
//                     <img
//                       src={booking.img}
//                       alt={booking.serviceName}
//                       width={80}
//                       height={80}
//                       className="rounded-md"
//                     />
//                   </td>
//                   <td className="font-semibold text-accent">{booking.serviceName}</td>
//                   <td className="text-accent font-bold">{booking.date}</td>
//                   <td className="text-[#ff3811] font-bold">
//                     ${booking.price}
//                   </td>
//                   <td className="flex justify-center gap-4">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(booking._id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <FaTrash size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-gray-500">
//                   No bookings found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\my-booking\page.jsx

// "use client";

// import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// //import { auth } from "@/lib/firebase"; // আপনার firebase config
// import { auth } from "@/lib/firebaseConfig"; // firebaseConfig.js ফাইল থেকে auth নিন
// import toast from "react-hot-toast";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import Link from "next/link";
// import ProtectedRoute from "../components/ProtectedRoute";

// export default function MyBooking() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user] = useAuthState(auth); // 🔥 logged in user

//   // ✅ Bookings fetch (API থেকে)
//   useEffect(() => {
//     if (!user?.email) return; // ইউজার না থাকলে ফেচ হবে না

//     async function fetchBookings() {
//       try {
//         const res = await fetch(`/api/orders?email=${user.email}`);
//         const data = await res.json();
//         setBookings(data);
//       } catch (error) {
//         console.error("Booking fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchBookings();
//   }, [user]);

//   // ✅ Delete Handler


// const handleDelete = (id) => {
//   toast(
//     (t) => (
//       <div className="flex flex-col gap-3">
//         <p className="font-semibold">Are you sure you want to delete?</p>
//         <div className="flex gap-3">
//           <button
//             className="px-3 py-1 bg-red-500 text-white rounded"
//             onClick={async () => {
//               try {
//                 const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//                 if (res.ok) {
//                   setBookings((prev) => prev.filter((b) => b._id !== id));
//                   toast.success("Booking deleted successfully!");
//                 } else {
//                   toast.error("Failed to delete booking");
//                 }
//               } catch (error) {
//                 toast.error("Error deleting booking");
//               } finally {
//                 toast.dismiss(t.id); // close confirm toast
//               }
//             }}
//           >
//             Yes
//           </button>
//           <button
//             className="px-3 py-1 bg-gray-300 rounded"
//             onClick={() => toast.dismiss(t.id)}
//           >
//             No
//           </button>
//         </div>
//       </div>
//     ),
//     { duration: 4000 }
//   );
// };




  



//   if (!user) return <p className="text-center mt-10">Please login to see your bookings.</p>;
//   if (loading) return <p className="text-center mt-10">Loading bookings...</p>;

//   return (  
//     <ProtectedRoute>
// <div className="max-w-6xl mx-auto p-6 text-base-content">
//       <h1 className="text-3xl font-bold mb-6 text-center text-black">My Bookings</h1>

//       <div className="overflow-x-auto">
//         <table className="table w-full rounded-lg text-base-content">
//           <thead className="bg-base-200 text-base-content">
//             <tr>
//               <th>Service Image</th>
//               <th>Service Name</th>
//               <th>Service Date</th>
//               <th>Service Price</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking) => (
//                 <tr key={booking._id} className="hover:bg-base-100 shadow-lg">
//                   <td>
//                     <img
//                       src={booking.img}
//                       alt={booking.serviceName}
//                       width={80}
//                       height={80}
//                       className="rounded-md"
//                     />
//                   </td>
//                   <td className="font-semibold text-accent">{booking.serviceName}</td>
//                   <td className="text-accent font-bold">{booking.date}</td>
//                   <td className="text-[#ff3811] font-bold">${booking.price}</td>
//                   <td className="flex justify-center gap-4">
//                    {/* <Link href="/update">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit size={18} />
//                     </button>
//                    </Link> */}
//                    <Link href={`/update/${booking._id}`}>
//   <button className="text-blue-500 hover:text-blue-700">
//     <FaEdit size={18} />
//   </button>
// </Link>

//                     <button
//                       onClick={() => handleDelete(booking._id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <FaTrash size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-gray-500">
//                   No bookings found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </ProtectedRoute>
    
    
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

export default function MyBookingPage() {
  return (
    <ProtectedRoute>
      <MyBooking />
    </ProtectedRoute>
  );
}

function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } 
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user?.email) return;

    async function fetchBookings() {
      try {
        const res = await fetch(`/api/orders?email=${user.email}`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Booking fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [user]);

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Are you sure you want to delete?</p>
          <div className="flex gap-3">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={async () => {
                try {
                  const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
                  if (res.ok) {
                    setBookings((prev) => prev.filter((b) => b._id !== id));
                    toast.success("Booking deleted successfully!");
                  } else {
                    toast.error("Failed to delete booking");
                  }
                } catch (error) {
                  toast.error("Error deleting booking");
                } finally {
                  toast.dismiss(t.id);
                }
              }}
            >
              Yes
            </button>
            <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => toast.dismiss(t.id)}>
              No
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  if (loading) return <p className="text-center mt-10">Loading bookings...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">My Bookings</h1>

      <div className="overflow-x-auto">
        <table className="table w-full rounded-lg text-base-content">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-base-100 shadow-lg">
                  <td>
                    <img
                      src={booking.img}
                      alt={booking.serviceName}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  </td>
                  <td className="font-semibold text-accent">{booking.serviceName}</td>
                  <td className="text-accent font-bold">{booking.date}</td>
                  <td className="text-[#ff3811] font-bold">${booking.price}</td>
                  <td className="flex justify-center gap-4">
                    <Link href={`/update/${booking._id}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit size={18} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
