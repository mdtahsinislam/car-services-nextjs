


// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import Image from "next/image";
// // // import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// // // import { useTheme } from "./ThemeProvider";
// // // import Link from "next/link";

// // // export default function NavBar() {
// // //   const { theme, toggleTheme } = useTheme();
// // //   const [isMounted, setIsMounted] = useState(false);

// // //   // Set isMounted to true once component mounts on client
// // //   useEffect(() => {
// // //     setIsMounted(true);
// // //   }, []);

// // //   return (
// // //     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
// // //       {/* Left: Logo */}
// // //       <div className="flex">
// // //         <Image src={logo} alt="Logo" width={60} height={60} />
// // //         <h1 className="mt-4 font-bold text-lg">
// // //           Car<span className="text-accent">Service</span>
// // //         </h1>
// // //       </div>

// // //       {/* Middle: Menu  href="/about"   href="/services"  href="/blog" href="/contact"*/}
      

// // // <div className="flex gap-6 text-lg font-medium">
// // //   <Link href="/">Home</Link>
// // //   <Link href="/about">About</Link>
// // //   <Link href="/services">Services</Link>
// // //   <Link href="/blog">Blog</Link>
// // //   <Link href="/contact">Contact</Link>
// // // </div>

// // //       {/* Right: Icons + Button */}
// // //       <div className="flex items-center gap-4 text-2xl">
        
// // //         {isMounted ? (
// // //           <input
// // //             type="checkbox"
// // //             onChange={toggleTheme}
// // //             checked={theme === "dark"}
// // //             className="toggle theme-controller"
// // //           />
// // //         ) : (
// // //           <div className="toggle theme-controller" style={{ width: '3rem', height: '1.5rem' }} />
// // //         )}
       
// // //        <img>i want login user profile picture here  add this feature</img>
       
// // //         <Link href="/login">
// // //   <button
// // //     className="btn btn-outline btn-accent btn-sm"
// // //     suppressHydrationWarning
// // //   >
// // //     Login
// // //   </button>
// // // </Link>

// // // <button
// // //   className="btn btn-outline btn-accent btn-sm"
// // //   suppressHydrationWarning
// // // >
// // //   Appointment
// // // </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import Image from "next/image";
// // // import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// // // import { useTheme } from "./ThemeProvider";
// // // import Link from "next/link";
// // // import { auth } from "@/lib/firebaseConfig";
// // // import { onAuthStateChanged } from "firebase/auth";

// // // export default function NavBar() {
// // //   const { theme, toggleTheme } = useTheme();
// // //   const [isMounted, setIsMounted] = useState(false);
// // //   const [currentUser, setCurrentUser] = useState(null);

// // //   useEffect(() => {
// // //     setIsMounted(true);

// // //     // Firebase Auth listener
// // //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// // //       if (user) {
// // //         // MongoDB থেকে user data fetch
// // //         const res = await fetch(`/api/get-user?email=${user.email}`);
// // //         const data = await res.json();
// // //         setCurrentUser(data.user); // MongoDB তে store করা user object
// // //       } else {
// // //         setCurrentUser(null);
// // //       }
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   return (
// // //     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
// // //       {/* Left: Logo */}
// // //       <div className="flex">
// // //         <Image src={logo} alt="Logo" width={60} height={60} />
// // //         <h1 className="mt-4 font-bold text-lg">
// // //           Car<span className="text-accent">Service</span>
// // //         </h1>
// // //       </div>

// // //       {/* Middle: Menu */}
// // //       <div className="flex gap-6 text-lg font-medium">
// // //         <Link href="/">Home</Link>
// // //         <Link href="/about">About</Link>
// // //         <Link href="/services">Services</Link>
// // //         <Link href="/blog">Blog</Link>
// // //         <Link href="/contact">Contact</Link>
// // //       </div>

// // //       {/* Right: Icons + Button */}
// // //       <div className="flex items-center gap-4 text-2xl">
// // //         {isMounted ? (
// // //           <input
// // //             type="checkbox"
// // //             onChange={toggleTheme}
// // //             checked={theme === "dark"}
// // //             className="toggle theme-controller"
// // //           />
// // //         ) : (
// // //           <div className="toggle theme-controller" style={{ width: '3rem', height: '1.5rem' }} />
// // //         )}

// // //         {/* Login user profile picture */}
// // //         {currentUser ? (
// // //           <Image
// // //             src={currentUser.image} // MongoDB তে store করা image URL
// // //             alt={currentUser.name}
// // //             width={40}
// // //             height={40}
// // //             className="rounded-full"
// // //           />
// // //         ) : (
// // //           <Link href="/login">
// // //             <button className="btn btn-outline btn-accent btn-sm">
// // //               Login
// // //             </button>
// // //           </Link>
// // //         )}

// // //         <button className="btn btn-outline btn-accent btn-sm">
// // //           Appointment
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // ///3333
// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import Image from "next/image";
// // // import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// // // import { useTheme } from "./ThemeProvider";
// // // import Link from "next/link";
// // // import { auth } from "@/lib/firebaseConfig";
// // // import { onAuthStateChanged, signOut } from "firebase/auth";

// // // export default function NavBar() {
// // //   const { theme, toggleTheme } = useTheme();
// // //   const [isMounted, setIsMounted] = useState(false);
// // //   const [currentUser, setCurrentUser] = useState(null);

// // //   useEffect(() => {
// // //     setIsMounted(true);

// // //     // Firebase Auth listener
// // //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// // //       if (user) {
// // //         // MongoDB থেকে user data fetch
// // //         const res = await fetch(`/api/get-user?email=${user.email}`);
// // //         const data = await res.json();
// // //         setCurrentUser(data.user); // MongoDB তে store করা user object
// // //       } else {
// // //         setCurrentUser(null);
// // //       }
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   // 🔥 Logout function
// // //   const handleLogout = async () => {
// // //     try {
// // //       await signOut(auth);
// // //       setCurrentUser(null); // state update
// // //       alert("Successfully logged out");
// // //     } catch (error) {
// // //       console.error("Logout failed", error);
// // //       alert("Logout failed: " + error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
// // //       {/* Left: Logo */}
// // //       <div className="flex">
// // //         <Image src={logo} alt="Logo" width={60} height={60} />
// // //         <h1 className="mt-4 font-bold text-lg">
// // //           Car<span className="text-accent">Service</span>
// // //         </h1>
// // //       </div>

// // //       {/* Middle: Menu */}
// // //       <div className="flex gap-6 text-lg font-medium">
// // //         <Link href="/">Home</Link>
// // //         <Link href="/about">About</Link>
// // //         <Link href="/services">Services</Link>
// // //         <Link href="/blog">Blog</Link>
// // //         <Link href="/contact">Contact</Link>
// // //       </div>

// // //       {/* Right: Icons + Button */}
// // //       <div className="flex items-center gap-4 text-2xl">
// // //         {isMounted ? (
// // //           <input
// // //             type="checkbox"
// // //             onChange={toggleTheme}
// // //             checked={theme === "dark"}
// // //             className="toggle theme-controller"
// // //           />
// // //         ) : (
// // //           <div className="toggle theme-controller" style={{ width: '3rem', height: '1.5rem' }} />
// // //         )}

// // //         {/* Login user profile picture + Logout */}
// // //         {currentUser ? (
// // //           <>
// // //             {/* <Image
// // //               src={currentUser.image} // MongoDB তে store করা image URL
// // //               alt={currentUser.name}
// // //               width={40}
// // //               height={40}
// // //               className="rounded-full"
// // //             /> */}
// // //             <Image
// // //   src={currentUser.image || "/assets/images/default-profile.png"} // default image
// // //   alt={currentUser.name || "User"}
// // //   width={40}
// // //   height={40}
// // //   className="rounded-full"
// // // />

// // //             <button
// // //               onClick={handleLogout}
// // //               className="btn btn-outline btn-error btn-sm"
// // //             >
// // //               Logout
// // //             </button>
// // //           </>
// // //         ) : (
// // //           <Link href="/login">
// // //             <button className="btn btn-outline btn-accent btn-sm">
// // //               Login
// // //             </button>
// // //           </Link>
// // //         )}

// // //         <button className="btn btn-outline btn-accent btn-sm">
// // //           Appointment
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// // import { useTheme } from "./ThemeProvider";
// // import Link from "next/link";
// // import { auth } from "@/lib/firebaseConfig";
// // import { onAuthStateChanged, signOut } from "firebase/auth";

// // export default function NavBar() {
// //   const { theme, toggleTheme } = useTheme();
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [currentUser, setCurrentUser] = useState(null);

 
// //   useEffect(() => {
// //   setIsMounted(true); 

// //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //     if (user) {
// //       let userData = null;
// //       try {
// //         const res = await fetch(`/api/get-user?email=${user.email}`);
// //         const data = await res.json();
// //         userData = data.user || null;
// //       } catch (err) {
// //         console.error("MongoDB থেকে user fetch ব্যর্থ", err);
// //       }

// //       // 🔹 MongoDB > Firebase > Default
// //       let profileImage = userData?.image || user.photoURL || "/default-profile.png";

// //       // Facebook image ঠিক করার জন্য যদি Facebook login
// //       if (!profileImage && user.providerData?.length) {
// //         const fbProvider = user.providerData.find(p => p.providerId === "facebook.com");
// //         if (fbProvider) {
// //           profileImage = `https://graph.facebook.com/${fbProvider.uid}/picture?type=large`;
// //         }
// //       }

// //       setCurrentUser({
// //         name: userData?.name || user.displayName || "User",
// //         email: userData?.email || user.email,
// //         image: profileImage,
// //       });
// //     } else {
// //       setCurrentUser(null);
// //     }
// //   });


  

// //   return () => unsubscribe();
// // }, []);


// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       setCurrentUser(null);
// //       alert("Successfully logged out");
// //     } catch (error) {
// //       console.error("Logout failed", error);
// //       alert("Logout failed: " + error.message);
// //     }
// //   };

// //   return (
// //     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
// //       {/* Left: Logo */}
// //       <div className="flex">
// //         <Image src={logo} alt="Logo" width={60} height={60} />
// //         <h1 className="mt-4 font-bold text-lg">
// //           Car<span className="text-accent">Service</span>
// //         </h1>
// //       </div>

// //       {/* Middle: Menu */}
// //       <div className="flex gap-6 text-lg font-medium">
// //         <Link href="/">Home</Link>
// //         <Link href="/about">About</Link>
// //         <Link href="/services">Services</Link>
// //         <Link href="/blog">Blog</Link>
// //         <Link href="/contact">Contact</Link>
// //       </div>

// //       {/* Right: Icons + Button */}
// //       <div className="flex items-center gap-4 text-2xl">
// //         {isMounted ? (
// //           <input
// //             type="checkbox"
// //             onChange={toggleTheme}
// //             checked={theme === "dark"}
// //             className="toggle theme-controller"
// //           />
// //         ) : (
// //           <div className="toggle theme-controller" style={{ width: '3rem', height: '1.5rem' }} />
// //         )}

// //         {/* Login user profile picture + Logout */}
// //         {currentUser ? (
// //           <>
// //             {/* <Image
// //               src={currentUser.image} // MongoDB বা Firebase থেকে fallback image
// //               alt={currentUser.name}
// //               width={40}
// //               height={40}
// //               className="rounded-full"
// //             /> */}

// //               <Image
// //   src={currentUser?.image || "/default-avatar.png"}
// //   alt={currentUser?.name || "User"}
// //   width={40}
// //   height={40}
// //   className="rounded-full"
// //   onError={(e) => {
// //     e.target.src = "/default-avatar.png"; // Fallback image
// //   }}
// // />
// //             <button
// //               onClick={handleLogout}
// //               className="btn btn-outline btn-error btn-sm"
// //             >
// //               Logout
// //             </button>
// //           </>
// //         ) : (
// //           <Link href="/login">
// //             <button className="btn btn-outline btn-accent btn-sm">
// //               Login
// //             </button>
// //           </Link>
// //         )}

// //         <button className="btn btn-outline btn-accent btn-sm">
// //           Appointment
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }



// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// // import { useTheme } from "./ThemeProvider";
// // import Link from "next/link";
// // import { auth } from "@/lib/firebaseConfig";
// // import { onAuthStateChanged, signOut } from "firebase/auth";

// // export default function NavBar() {
// //   const { theme, toggleTheme } = useTheme();
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [imgError, setImgError] = useState(false); // fallback state

// //   useEffect(() => {
// //     setIsMounted(true);

// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       if (user) {
// //         let userData = null;
// //         try {
// //           const res = await fetch(`/api/get-user?email=${user.email}`);
// //           const data = await res.json();
// //           userData = data.user || null;
// //         } catch (err) {
// //           console.error("MongoDB থেকে user fetch ব্যর্থ", err);
// //         }

// //         // MongoDB > Firebase > Default
// //         let profileImage = userData?.image || user.photoURL || "/default-avatar.png";

// //         // Facebook fallback (যদি photoURL missing হয়)
// //         if ((!profileImage || profileImage.includes("null")) && user.providerData?.length) {
// //           const fbProvider = user.providerData.find(p => p.providerId === "facebook.com");
// //           if (fbProvider) {
// //             profileImage = `https://graph.facebook.com/${fbProvider.uid}/picture?type=large`;
// //           }
// //         }

// //         setCurrentUser({
// //           name: userData?.name || user.displayName || "User",
// //           email: userData?.email || user.email,
// //           image: profileImage,
// //         });
// //       } else {
// //         setCurrentUser(null);
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       setCurrentUser(null);
// //       alert("Successfully logged out");
// //     } catch (error) {
// //       console.error("Logout failed", error);
// //       alert("Logout failed: " + error.message);
// //     }
// //   };

// //   return (
// //     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
// //       {/* Left: Logo */}
// //       <div className="flex">
// //         <Image src={logo} alt="Logo" width={60} height={60} />
// //         <h1 className="mt-4 font-bold text-lg">
// //           Car<span className="text-accent">Service</span>
// //         </h1>
// //       </div>

// //       {/* Middle: Menu */}
// //       <div className="flex gap-6 text-lg font-medium">
// //         <Link href="/">Home</Link>
// //         <Link href="/about">About</Link>
// //         <Link href="/services">Services</Link>
// //         <Link href="/blog">Blog</Link>
// //         <Link href="/contact">Contact</Link>
// //       </div>

// //       {/* Right: Icons + Button */}
// //       <div className="flex items-center gap-4 text-2xl">
// //         {isMounted ? (
// //           <input
// //             type="checkbox"
// //             onChange={toggleTheme}
// //             checked={theme === "dark"}
// //             className="toggle theme-controller"
// //           />
// //         ) : (
// //           <div className="toggle theme-controller" style={{ width: "3rem", height: "1.5rem" }} />
// //         )}

// //         {/* Login user profile picture + Logout */}
// //         {currentUser ? (
// //           <>
// //             <Image
// //               src={!imgError ? currentUser.image : "/default-avatar.png"}
// //               alt={currentUser.name}
// //               width={40}
// //               height={40}
// //               className="rounded-full"
// //               onError={() => setImgError(true)} // fallback এ default image
// //             />
// //             <button
// //               onClick={handleLogout}
// //               className="btn btn-outline btn-error btn-sm"
// //             >
// //               Logout
// //             </button>
// //           </>
// //         ) : (
// //           <Link href="/login">
// //             <button className="btn btn-outline btn-accent btn-sm">
// //               Login
// //             </button>
// //           </Link>
// //         )}

// //         <button className="btn btn-outline btn-accent btn-sm">
// //           Appointment
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }




// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// import { useTheme } from "./ThemeProvider";
// import Link from "next/link";
// import { auth } from "@/lib/firebaseConfig";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export default function NavBar() {
//   const { theme, toggleTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [imgError, setImgError] = useState(false);

  


// useEffect(() => {
//   setIsMounted(true);

//   const unsubscribe = onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       let profileImage = null;
//       let userName = user.displayName || "User";

//       try {
//         // MongoDB তে check করা
//         const res = await fetch(`/api/get-user?email=${user.email}`);
//         const data = await res.json();
//         if (data.user) {
//           profileImage = data.user.image;
//           userName = data.user.name || userName;
//         }
//       } catch (err) {
//         console.error("MongoDB fetch failed:", err);
//       }

//       // যদি MongoDB তেও না থাকে, Firebase photoURL use করা
//       if (!profileImage && user.photoURL) {
//         profileImage = user.photoURL;
//       }

//       // 🔹 Facebook fallback
//       if (!profileImage && user.providerData?.length) {
//         const fbProvider = user.providerData.find(p => p.providerId === "facebook.com");
//         if (fbProvider) {
//           profileImage = `https://graph.facebook.com/${fbProvider.uid}/picture?type=large`;
//           userName = fbProvider.displayName || userName;
//         }
//       }

//       // final set
//       setCurrentUser({
//         name: userName,
//         email: user.email,
//         image: profileImage || "/default-avatar.png",
//       });

//     } else {
//       setCurrentUser(null);
//     }
//   });

//   return () => unsubscribe();
// }, []);



//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setCurrentUser(null);
//       alert("Successfully logged out");
//     } catch (error) {
//       console.error("Logout failed", error);
//       alert("Logout failed: " + error.message);
//     }
//   };

//   return (
//     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
//       {/* Left: Logo */}
//       <div className="flex">
//         <Image src={logo} alt="Logo" width={60} height={60} />
//         <h1 className="mt-4 font-bold text-lg">
//           Car<span className="text-accent">Service</span>
//         </h1>
//       </div>

//       {/* Middle Menu */}
//       <div className="flex gap-6 text-lg font-medium">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/services">Services</Link>
//         <Link href="/blog">Blog</Link>
//         <Link href="/contact">Contact</Link>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-4 text-2xl">
//         {isMounted ? (
//           <input
//             type="checkbox"
//             onChange={toggleTheme}
//             checked={theme === "dark"}
//             className="toggle theme-controller"
//           />
//         ) : (
//           <div
//             className="toggle theme-controller"
//             style={{ width: "3rem", height: "1.5rem" }}
//           />
//         )}

//         {/* {currentUser ? (
//           <>
             
//                    <Image
//   src={currentUser?.image || "/default-avatar.png"}
//   alt={currentUser?.name || "User"}
//   width={40}
//   height={40}
//   className="rounded-full"
//   onErrorCapture={(e) => {
//     e.currentTarget.src = "/default-avatar.png"; // fallback কাজ করবে
//   }}
// />

//             <button
//               onClick={handleLogout}
//               className="btn btn-outline btn-error btn-sm"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link href="/login">
//             <button className="btn btn-outline btn-accent btn-sm">Login</button>
//           </Link>
//         )} */}

//         {currentUser ? (
//   <>
//     {/* <img
//       src={currentUser?.image || "/default-avatar.png"}
//       alt={currentUser?.name || "User"}
//       className="w-10 h-10 rounded-full object-cover"
//       onError={(e) => {
//         e.currentTarget.src = "/default-avatar.png";
//       }}
//     /> */}
//     <Image
//   src={currentUser?.image || "/default-avatar.png"}
//   alt={currentUser?.name || "User"}
//   width={40}
//   height={40}
//   className="rounded-full"
//   onError={(e) => { e.target.src = "/default-avatar.png"; }}
// />

//     <button
//       onClick={handleLogout}
//       className="btn btn-outline btn-error btn-sm"
//     >
//       Logout
//     </button>
//   </>
// ) : (
//   <Link href="/login">
//     <button className="btn btn-outline btn-accent btn-sm">Login</button>
//   </Link>
// )}


//         <button className="btn btn-outline btn-accent btn-sm">
//           Appointment
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// import { useTheme } from "./ThemeProvider";
// import Link from "next/link";
// import { auth } from "@/lib/firebaseConfig";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export default function NavBar() {
//   const { theme, toggleTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     setIsMounted(true);

//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         let userData = null;
//         try {
//           const res = await fetch(`/api/get-user?email=${user.email}`);
//           const data = await res.json();
//           userData = data.user || null;
//         } catch (err) {
//           console.error("MongoDB থেকে user fetch ব্যর্থ", err);
//         }

//         // Fix Facebook image URL
//         let profileImage = userData?.image || user.photoURL || "/default-profile.png";
        
//         // Handle Facebook image specifically
//         if (profileImage.includes('graph.facebook.com')) {
//           profileImage = profileImage.replace(/\/picture$/, '/picture?type=large');
//         }

//         setCurrentUser({
//           name: userData?.name || user.displayName || "User",
//           email: userData?.email || user.email,
//           image: profileImage,
//         });
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setCurrentUser(null);
//       alert("Successfully logged out");
//     } catch (error) {
//       console.error("Logout failed", error);
//       alert("Logout failed: " + error.message);
//     }
//   };

//   return (
//     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
//       {/* Left: Logo */}
//       <div className="flex">
//         <Image src={logo} alt="Logo" width={60} height={60} />
//         <h1 className="mt-4 font-bold text-lg">
//           Car<span className="text-accent">Service</span>
//         </h1>
//       </div>

//       {/* Middle: Menu */}
//       <div className="flex gap-6 text-lg font-medium">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/services">Services</Link>
//         <Link href="/blog">Blog</Link>
//         <Link href="/contact">Contact</Link>
//       </div>

//       {/* Right: Icons + Button */}
//       <div className="flex items-center gap-4 text-2xl">
//         {isMounted ? (
//           <input
//             type="checkbox"
//             onChange={toggleTheme}
//             checked={theme === "dark"}
//             className="toggle theme-controller"
//           />
//         ) : (
//           <div className="toggle theme-controller" style={{ width: '3rem', height: '1.5rem' }} />
//         )}

//         {/* Login user profile picture + Logout */}
//         {currentUser ? (
//           <>
//             <Image
//               src={currentUser.image}
//               alt={currentUser.name}
//               width={40}
//               height={40}
//               className="rounded-full"
//               onError={(e) => {
//                 e.target.src = "/default-avatar.png";
//               }}
//             />
//             <button
//               onClick={handleLogout}
//               className="btn btn-outline btn-error btn-sm"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link href="/login">
//             <button className="btn btn-outline btn-accent btn-sm">
//               Login
//             </button>
//           </Link>
//         )}

//         <button className="btn btn-outline btn-accent btn-sm">
//           Appointment
//         </button>
//       </div>
//     </div>
//   );
// }


// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\components\NavBar.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
// import { useTheme } from "./ThemeProvider";
// import Link from "next/link";
// import { auth } from "@/lib/firebaseConfig";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export default function NavBar() {
//   const { theme, toggleTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     setIsMounted(true);

//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // Fetch user from backend if needed
//         let userData = null;
//         try {
//           const res = await fetch(`/api/get-user?email=${user.email}`);
//           const data = await res.json();
//           userData = data.user || null;
//         } catch (err) {
//           console.error("Failed to fetch user from MongoDB:", err);
//         }

//         // Decide profile image
//         let profileImage = userData?.image || user.photoURL || "/default-profile.png";

//         // Facebook image fix
//         if (profileImage.includes("graph.facebook.com")) {
//           profileImage = profileImage.replace(/\/picture$/, "/picture?type=large");
//         }

//         setCurrentUser({
//           name: userData?.name || user.displayName || "User",
//           email: userData?.email || user.email,
//           image: profileImage,
//         });
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setCurrentUser(null);
//      // alert("Successfully logged out");
//     } catch (error) {
//       console.error(error);
//       alert("Logout failed: " + error.message);
//     }
//   };

//   return (
//     <div className="navbar bg-base-300 px-6 flex justify-between text-base-content">
//       {/* Logo */}
//       <div className="flex">
//         <Image src={logo} alt="Logo" width={60} height={60} />
//         <h1 className="mt-4 -ml-2 font-bold text-lg">
//           Car<span className="text-accent">ServicePR0</span>
//         </h1>
//       </div>

//       {/* Menu */}
//       <div className="flex gap-6 text-lg font-medium">
       

//          <Link href="/" className="hover:text-accent">Home</Link>
//   <Link href="/my-booking" className="hover:text-accent">My Booking</Link>
//   <Link href="/servicess" className="hover:text-accent">Services</Link>
//   <Link href="/blog" className="hover:text-accent">Blog</Link>
//   <Link href="/contact" className="hover:text-accent">Contact</Link>
//       </div>

//       {/* Right: Theme + User */}
//       <div className="flex items-center gap-4 text-2xl">
//         {isMounted ? (
//           <input
//             type="checkbox"
//             onChange={toggleTheme}
//             checked={theme === "dark"}
//             className="toggle theme-controller"
//           />
//         ) : (
//           <div className="toggle theme-controller" style={{ width: "3rem", height: "1.5rem" }} />
//         )}

//         {currentUser ? (
//           <>
//             {/* Profile picture */}
//             <Image
//               src={currentUser.image}
//               alt={currentUser.name}
//               width={40}
//               height={40}
//               className="rounded-full"
//               onError={(e) => (e.target.src = "/default-profile.png")}
//             />
//             {/* <span className="hidden md:block font-medium">{currentUser.name}</span> */}
//             <button
//               onClick={handleLogout}
//               className="btn btn-outline btn-error btn-sm"
//                 suppressHydrationWarning
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link href="/login">
//             <button className="btn btn-outline btn-accent btn-sm"   suppressHydrationWarning>Login</button>
//           </Link>
//         )}

//         <button className="btn btn-outline btn-accent btn-sm"   suppressHydrationWarning>Appointment</button>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/services/car-logoooo-removebg-preview.png";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        let userData = null;
        try {
          const res = await fetch(`/api/get-user?email=${user.email}`);
          const data = await res.json();
          userData = data.user || null;
        } catch (err) {
          console.error("Failed to fetch user from MongoDB:", err);
        }

        let profileImage = userData?.image || user.photoURL || "/default-profile.png";

        if (profileImage.includes("graph.facebook.com")) {
          profileImage = profileImage.replace(/\/picture$/, "/picture?type=large");
        }

        setCurrentUser({
          name: userData?.name || user.displayName || "User",
          email: userData?.email || user.email,
          image: profileImage,
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
      alert("Logout failed: " + error.message);
    }
  };

  return (
    <div className="navbar bg-base-300 px-6 flex justify-between items-center text-base-content">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={60} height={60} />
        <h1 className="mt-2 ml-2 font-bold text-lg">
          Car<span className="text-accent">ServicePR0</span>
        </h1>
      </div>

      {/* Desktop Menu (now lg and up) */}
      <div className="hidden lg:flex gap-6 text-lg font-medium">
        <Link href="/" className="hover:text-accent">Home</Link>
        <Link href="/my-booking" className="hover:text-accent">My Booking</Link>
        <Link href="/servicess" className="hover:text-accent">Services</Link>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <Link href="/contact" className="hover:text-accent">Contact</Link>
      </div>

      {/* Right Section (now lg and up) */}
      <div className="hidden lg:flex items-center gap-4 text-2xl">
        {isMounted ? (
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            className="toggle theme-controller"
          />
        ) : (
          <div className="toggle theme-controller" style={{ width: "3rem", height: "1.5rem" }} />
        )}

        {currentUser ? (
          <>
            <Image
              src={currentUser.image}
              alt={currentUser.name}
              width={40}
              height={40}
              className="rounded-full"
              onError={(e) => (e.target.src = "/default-profile.png")}
            />
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm"
              suppressHydrationWarning
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-outline btn-accent btn-sm" suppressHydrationWarning>
              Login
            </button>
          </Link>
        )}

        <button className="btn btn-outline btn-accent btn-sm" suppressHydrationWarning>
          Appointment
        </button>
      </div>

      {/* Mobile/Tablet Hamburger (visible until lg) */}
      <div className="lg:hidden">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile/Tablet Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-300 flex flex-col  py-4 gap-4 lg:hidden z-50 shadow-lg text-start ">
          <Link href="/" className="hover:text-accent ml-3" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/my-booking" className="hover:text-accent ml-3" onClick={() => setIsMenuOpen(false)}>My Booking</Link>
          <Link href="/servicess" className="hover:text-accent ml-3" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/blog" className="hover:text-accent ml-3" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="hover:text-accent ml-3" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          {/* User / Login */}
          {/* {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="btn btn-outline btn-error btn-sm"
              suppressHydrationWarning
            >
              Logout
            </button>
          ) : (
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="btn btn-outline btn-accent btn-sm" suppressHydrationWarning>
                Login
              </button>
            </Link>
          )} */}
           {isMounted ? (
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            className="toggle theme-controller ml-3"
          />
        ) : (
          <div className="toggle theme-controller" style={{ width: "3rem", height: "1.5rem" }} />
        )}
          {currentUser ? (
          <>
            <Image
              src={currentUser.image}
              alt={currentUser.name}
              width={40}
              height={40}
              className="rounded-full ml-3"
              onError={(e) => (e.target.src = "/default-profile.png")}
            />
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm w-[100px] ml-3"
              suppressHydrationWarning
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-outline btn-accent btn-sm ml-3" suppressHydrationWarning>
              Login
            </button>
          </Link>
        )}

          <button className="btn btn-outline btn-accent btn-sm w-[100px] ml-3" suppressHydrationWarning>
            Appointment
          </button>
        </div>
      )}
    </div>
  );
}
