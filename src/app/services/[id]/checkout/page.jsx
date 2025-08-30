


// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\services\[id]\checkout\page.jsx

// "use client";

// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import { auth } from "@/lib/firebaseConfig"; // Firebase config
// import { onAuthStateChanged } from "firebase/auth";

// export default function CheckoutPage() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [service, setService] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     dueAmount: "",
//     date: "",
//     phone: "",
//     address: "",
//   });

//   // ✅ Firebase user info load
//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         setFormData((prev) => ({
//           ...prev,
//           name: currentUser.displayName || "",
//           email: currentUser.email || "",
//         }));
//       }
//     });
//   }, []);

//   // ✅ Specific service fetch
//   useEffect(() => {
//     const fetchService = async () => {
//       //const res = await fetch(`/api/services/${id}`);
//       // CheckoutPage.jsx
// //const res = await fetch(`/api/services-api/${id}`);
// const res = await fetch(`/api/services/${id}`);
//   //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`);
//       const data = await res.json();
//       setService(data);
//       setFormData((prev) => ({
//         ...prev,
//         dueAmount: data.price || "",
//       }));
//     };
//     if (id) fetchService();
//   }, [id]);

//   // ✅ Handle Input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Handle Submit
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("/api/orders", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) throw new Error("Failed to place order");

//     const data = await res.json();
//     alert("Order Confirmed!");
//     console.log("Order Saved:", data);

//     // ✅ Reset Form after success
//     setFormData({
//       name: user?.displayName || "",
//       email: user?.email || "",
//       dueAmount: service?.price || "",
//       date: "",
//       phone: "",
//       address: "",
//     });

//   } catch (error) {
//     console.error("Error:", error);
//     alert("Something went wrong!");
//   }
// };

// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     const res = await fetch("/api/orders", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(formData),
// //     });

// //     if (!res.ok) throw new Error("Failed to place order");

// //     const data = await res.json();
// //     alert("Order Confirmed!");
// //     console.log("Order Saved:", data);
// //   } catch (error) {
// //     console.error("Error:", error);
// //     alert("Something went wrong!");
// //   }
// // };


//   // ✅ Handle Submit
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   console.log("Checkout Data:", formData);

//   //   // এখানে চাইলে DB তে order save করতে পারো
//   //   // await fetch("/api/orders", { method: "POST", body: JSON.stringify(formData) });
//   //   alert("Order Confirmed!");
//   // };

//   if (!service) return <p className="text-center mt-10">Loading service...</p>;

//   return (
//     <div className="max-w-2xl mx-auto p-8 bg-base-200 rounded-lg shadow-md mt-10">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Checkout for {service.title}
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           readOnly
//           className="input input-bordered w-full"
//         />
//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           readOnly
//           className="input input-bordered w-full"
//         />
//         {/* Due Amount */}
//         <input
//           type="text"
//           name="dueAmount"
//           value={formData.dueAmount}
//           readOnly
//           className="input input-bordered w-full"
//         />
//         {/* Date */}
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           required
//         />
//         {/* Phone */}
//         <input
//           type="text"
//           name="phone"
//           placeholder="Enter your phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           required
//         />
//         {/* Address */}
//         <textarea
//           name="address"
//           placeholder="Enter your present address"
//           value={formData.address}
//           onChange={handleChange}
//           className="textarea textarea-bordered w-full"
//           required
//         />
//         {/* Submit */}
//         <button
//           type="submit"
//           className="btn w-full bg-[#ff3811] text-white font-bold hover:bg-[#ff5533]"
//         >
//           Confirm Order
//         </button>
//       </form>
//     </div>
//   );
// }
// //i want data  send  in mongodb  it not show in input fild 

//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\services\[id]\checkout\page.jsx

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { auth } from "@/lib/firebaseConfig"; 
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function CheckoutPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dueAmount: "",
    date: "",
    phone: "",
    address: "",
  });

  // ✅ Firebase user info load
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setFormData((prev) => ({
          ...prev,
          name: currentUser.displayName || "",
          email: currentUser.email || "",
        }));
      }
    });
  }, []);

  // ✅ Specific service fetch
  useEffect(() => {
    const fetchService = async () => {
      const res = await fetch(`/api/services/${id}`);
      const data = await res.json();
      setService(data);
      setFormData((prev) => ({
        ...prev,
        dueAmount: data.price || "",
      }));
    };
    if (id) fetchService();
  }, [id]);

  // ✅ Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 


// ✅ Checkout handleSubmit এডিট
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const orderData = {
      ...formData,
      serviceId: service._id,          // service id
      serviceName: service.title,      // service name
      img: service.img,                // service image
      price: service.price,            // service price
    };

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) throw new Error("Failed to place order");

    const data = await res.json();
    toast.success("Order Confirmed!");

    console.log("Order Saved:", data);

    // ✅ Reset form
    setFormData({
      name: user?.displayName || "",
      email: user?.email || "",
      dueAmount: service?.price || "",
      date: "",
      phone: "",
      address: "",
    });
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!");
  }
};


  if (!service) return <p className="text-center mt-10">Loading service...</p>;

  return (

     <ProtectedRoute>
 <div className="max-w-2xl mx-auto p-8 bg-base-200 rounded-lg shadow-md mt-5 mb-5 text-base-content">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Checkout for {service.title}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} readOnly className="input input-bordered w-full" />
        <input type="email" name="email" value={formData.email} readOnly className="input input-bordered w-full" />
        <input type="text" name="dueAmount" value={formData.dueAmount} readOnly className="input input-bordered w-full" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="text-base-content input input-bordered w-full" required />
        <input type="text" name="phone" placeholder="Enter your phone" value={formData.phone} onChange={handleChange} className=" text-base-content input input-bordered w-full" required />
        <textarea name="address" placeholder="Enter your present address" value={formData.address} onChange={handleChange} className="textarea textarea-bordered w-full" required />
        <button type="submit" className="btn w-full bg-[#ff3811] text-white font-bold hover:bg-[#ff5533]">
          Confirm Order
        </button>
      </form>
    </div>

     </ProtectedRoute>
   
  );
}
