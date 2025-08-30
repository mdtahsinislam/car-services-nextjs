// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function UpdateBookingPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     date: "",
//     phone: "",
//     address: "",
//   });

//   // ✅ পুরানো ডাটা লোড
//   useEffect(() => {
//     async function fetchBooking() {
//       const res = await fetch(`/api/orders/${id}`);
//       const data = await res.json();
//       setFormData({
//         date: data.date || "",
//         phone: data.phone || "",
//         address: data.address || "",
//       });
//     }
//     if (id) fetchBooking();
//   }, [id]);

//   // ✅ ইনপুট হ্যান্ডলার
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ সাবমিট
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`/api/orders/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Update failed");

//       toast.success("Booking updated successfully!");
//       router.push("/my-booking"); // আবার লিস্ট পেইজে রিডাইরেক্ট
//     } catch (error) {
//       toast.error("Error updating booking");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Update Booking</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//         />
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="textarea textarea-bordered w-full"
//         />
//         <button type="submit" className="btn bg-[#ff3811] text-white w-full">
//           Update Booking
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateBookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    serviceName: "",
    date: "",
    phone: "",
    address: "",
    price: "",
  });

  // ✅ পুরানো ডাটা লোড (Auto fill)
  useEffect(() => {
    async function fetchBooking() {
      const res = await fetch(`/api/orders/${id}`);
      if (!res.ok) {
        toast.error("Booking not found!");
        return;
      }
      const data = await res.json();

      setFormData({
        serviceName: data.serviceName || "",
        date: data.date || "",
        phone: data.phone || "",
        address: data.address || "",
        price: data.price || "",
      });
    }
    if (id) fetchBooking();
  }, [id]);

  // ✅ ইনপুট হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ সাবমিট (Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Update failed");

      toast.success("Booking updated successfully!");
      router.push("/my-booking"); // আবার লিস্ট পেইজে নিয়ে যাওয়া হবে
    } catch (error) {
      toast.error("Error updating booking");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Update Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Name readonly */}
        <input
          type="text"
          name="serviceName"
          value={formData.serviceName}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        />

        {/* Price readonly */}
        <input
          type="text"
          name="price"
          value={formData.price}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <button type="submit" className="btn bg-[#ff3811] text-white w-full">
          Update Booking
        </button>
      </form>
    </div>
  );
}
