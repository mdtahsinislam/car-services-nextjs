

//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\pages\api\social-register.js
// import dbConnect from "@/lib/dbConnect";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { name, email, image } = req.body;

//       if (!name || !email || !image) {
//         return res.status(400).json({ message: "সব ফিল্ড পূরণ করুন" });
//       }

//       const collection = await dbConnect("users");

//       // আগেই আছে কিনা চেক করা
//       const existingUser = await collection.findOne({ email });
//       if (existingUser) {
//         return res.status(200).json({ message: "User already exists" });
//       }

//       const newUser = {
//         name,
//         email,
//         image,
//         createdAt: new Date(),
//       };

//       await collection.insertOne(newUser);

//       return res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: "Server error" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// /lib/firebaseConfig.js

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // Export auth and providers
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new FacebookAuthProvider();
// export const githubProvider = new GithubAuthProvider();



///correct 
// import dbConnect from "../../lib/dbConnect";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { name, email, image } = req.body; // password remove করা হলো

//       if (!name || !email || !image) {
//         return res.status(400).json({ message: "সব ফিল্ড পূরণ করুন" });
//       }

//       const collection = await dbConnect("users");

//       // Check: যদি same email থাকে
//       const existingUser = await collection.findOne({ email });
//       if (existingUser) {
//         return res.status(200).json({ message: "User already exists" }); // Duplicate হলে কেবল message return করবে
//       }

//       const newUser = {
//         name,
//         email,
//         image, // already hosted link
//         createdAt: new Date(),
//       };

//       await collection.insertOne(newUser);

//       return res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: "Server error" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }



// pages/api/social-register.js

//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\pages\api\social-register.js

import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, image } = req.body; // password remove করা হলো

      if (!name || !email || !image) {
        return res.status(400).json({ message: "সব ফিল্ড পূরণ করুন" });
      }

      const collection = await dbConnect("users");

      // Check: যদি same email থাকে
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }

      const newUser = {
        name,
        email,
        image, // Firebase / Imgbb hosted link
        createdAt: new Date(),
      };

      await collection.insertOne(newUser);

      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
