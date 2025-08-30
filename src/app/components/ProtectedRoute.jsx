"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import Loader from "./Loader"; // আপনার লোডার কম্পোনেন্ট বা simple text ব্যবহার করতে পারেন

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.replace("/login"); // যদি লগইন না থাকে, login পেজে পাঠান
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <Loader />; // লোডিং দেখাতে পারেন
  }

  if (!user) return null;

  return children;
}
