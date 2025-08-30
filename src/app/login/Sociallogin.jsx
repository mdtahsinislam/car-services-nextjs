// // // import React from 'react'
// // // import { FcGoogle } from "react-icons/fc";
// // // import { FaFacebook, FaGithub } from "react-icons/fa";
// // // export default function Sociallogin() {
// // //   return (
// // //     <div className="flex justify-center items-center gap-4 text-3xl mt-2.5">
// // //         <FcGoogle title="Google" />
// // //               <FaGithub title="GitHub" />
// // //               <FaFacebook title="Facebook" className="text-blue-600" />
// // //     </div>
// // //   )
// // // }


// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\login\Sociallogin.jsx



// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\login\Sociallogin.jsx
// "use client";

// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaGithub } from "react-icons/fa";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider, githubProvider, facebookProvider } from "@/lib/firebaseConfig";
// import { useRouter } from "next/navigation";
//  import { fetchSignInMethodsForEmail } from "firebase/auth";
// export default function Sociallogin() {
//   const router = useRouter();

//   // Common handler
//   // const handleSocialLogin = async (provider) => {
//   //   try {
//   //     const result = await signInWithPopup(auth, provider);
//   //     const user = result.user;

//   //     // MongoDB তে পাঠানো
//   //     await fetch("/api/social-register", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         name: user.displayName,
//   //         email: user.email,
//   //         image: user.photoURL,
//   //       }),
//   //     });

//   //     router.push("/"); // Home এ নিয়ে যাবে
//   //   } catch (error) {
//   //     console.error("Login failed", error);
//   //   }
//   // };

 

// const handleSocialLogin = async (provider) => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // MongoDB তে পাঠানো
//     await fetch("/api/social-register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: user.displayName,
//         email: user.email,
//         image: user.photoURL,
//       }),
//     });

//     router.push("/");

//   } catch (error) {
//     if (error.code === "auth/account-exists-with-different-credential") {
//       const email = error.customData.email;
//       const methods = await fetchSignInMethodsForEmail(auth, email);
//       alert(`This email is already registered with: ${methods.join(", ")}`);
//     } else if (error.code === "auth/popup-closed-by-user") {
//       alert("Popup was closed before completing login.");
//     } else {
//       console.error("Login failed", error);
//     }
//   }
// };

//   return (
//     <div className="flex justify-center items-center gap-4 text-3xl mt-2.5">
//       <FcGoogle title="Google" onClick={() => handleSocialLogin(googleProvider)} className="cursor-pointer" />
//       <FaGithub title="GitHub" onClick={() => handleSocialLogin(githubProvider)} className="cursor-pointer" />
//       <FaFacebook title="Facebook" onClick={() => handleSocialLogin(facebookProvider)} className="text-blue-600 cursor-pointer" />
//     </div>
//   );
// }





// "use client";

// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaGithub } from "react-icons/fa";
// import { signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth, googleProvider, githubProvider, facebookProvider } from "@/lib/firebaseConfig";
// import { useRouter } from "next/navigation";

// export default function Sociallogin() {
//   const router = useRouter();

//   const handleSocialLogin = async (provider) => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // MongoDB তে ইউজার পাঠানো
//       await fetch("/api/social-register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: user.displayName,
//           email: user.email,
//           image: user.photoURL,
//         }),
//       });

//       router.push("/");
//     } catch (error) {
//       console.error("Login failed", error);

//       if (error.code === "auth/account-exists-with-different-credential") {
//         const email = error.customData.email;
//         const methods = await fetchSignInMethodsForEmail(auth, email);
//         alert(`This email is already registered with: ${methods.join(", ")}`);
//       } else if (error.code === "auth/popup-closed-by-user") {
//         alert("Popup was closed before completing login.");
//       } else {
//         alert("Login failed: " + error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center gap-4 text-3xl mt-2.5">
//       <FcGoogle 
//         title="Google" 
//         onClick={() => handleSocialLogin(googleProvider)} 
//         className="cursor-pointer" 
//       />
//       <FaGithub 
//         title="GitHub" 
//         onClick={() => handleSocialLogin(githubProvider)} 
//         className="cursor-pointer" 
//       />
//       <FaFacebook 
//         title="Facebook" 
//         onClick={() => handleSocialLogin(facebookProvider)} 
//         className="text-blue-600 cursor-pointer" 
//       />
//     </div>
//   );
// }


// "use client";

// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaGithub } from "react-icons/fa";
// import { signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth, googleProvider, githubProvider, facebookProvider } from "@/lib/firebaseConfig";
// import { useRouter } from "next/navigation";

// export default function Sociallogin() {
//   const router = useRouter();

  
//   const handleSocialLogin = async (provider) => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // MongoDB তে ইউজার পাঠানো
//     await fetch("/api/social-register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: user.displayName,
//         email: user.email,
//         image: user.photoURL,
//       }),
//     });

//     router.push("/");
//   } catch (error) {
//     console.error("Login failed", error);

//     if (error.code === "auth/account-exists-with-different-credential") {
//       const email = error.customData.email;
//       const methods = await fetchSignInMethodsForEmail(auth, email);
//       alert(`This email is already registered with: ${methods.join(", ")}`);
//     } else if (error.code === "auth/popup-closed-by-user") {
//       alert("Popup was closed or redirect URI mismatch. Check App Domains and OAuth Redirect URIs.");
//     } else {
//       alert("Login failed: " + error.message);
//     }
//   }
// };

//   return (
//     <div className="flex justify-center items-center gap-4 text-3xl mt-2.5">
//       <FcGoogle 
//         title="Google" 
//         onClick={() => handleSocialLogin(googleProvider)} 
//         className="cursor-pointer" 
//       />
//       <FaGithub 
//         title="GitHub" 
//         onClick={() => handleSocialLogin(githubProvider)} 
//         className="cursor-pointer" 
//       />
//       <FaFacebook 
//         title="Facebook" 
//         onClick={() => handleSocialLogin(facebookProvider)} 
//         className="text-blue-600 cursor-pointer" 
//       />
//     </div>
//   );
// }


  //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\login\Sociallogin.jsx
"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth, googleProvider, githubProvider, facebookProvider } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

export default function Sociallogin() {
  const router = useRouter();

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // MongoDB তে user পাঠানো
      const res = await fetch("/api/social-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          image: user.photoURL, // Firebase photoURL
        }),
      });

      const data = await res.json();
      console.log(data.message);

      router.push("/");
    } catch (error) {
      console.error("Login failed", error);

      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        alert(`This email is already registered with: ${methods.join(", ")}`);
      } else if (error.code === "auth/popup-closed-by-user") {
        alert("Popup was closed or redirect URI mismatch. Check App Domains and OAuth Redirect URIs.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 text-3xl mt-2.5">
      <FcGoogle title="Google" onClick={() => handleSocialLogin(googleProvider)} className="cursor-pointer" />
      <FaGithub title="GitHub" onClick={() => handleSocialLogin(githubProvider)} className="cursor-pointer" />
      <FaFacebook title="Facebook" onClick={() => handleSocialLogin(facebookProvider)} className="text-blue-600 cursor-pointer" />
    </div>
  );
}
