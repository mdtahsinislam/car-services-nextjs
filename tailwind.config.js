// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./src/**/*.{js,ts,jsx,tsx,mdx}",  // যদি src/ ডিরেক্টরি ইউজ করো
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",  // App Router এর জন্য
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "#ffffff",
// //         foreground: "#0a0a0a",
// //       },
// //     },
// //   },
// //   plugins: [require("daisyui")],
// //   daisyui: {
// //     themes: ["light"], // শুধু light theme চালু হবে
// //   },
// // };



// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./src/**/*.{js,ts,jsx,tsx,mdx}", // যদি src/ ব্যবহার করো
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router এর জন্য
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "#ffffff",
// //         foreground: "#0a0a0a",
// //       },
// //     },
// //   },
// //   plugins: [require("daisyui")],
// //   daisyui: {
// //     themes: ["light", "dark", "synthwave"], // শুধু light theme চালু
// //   },
// // };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       "light", 
//       "dark", 
//       "cupcake", 
//       "synthwave", 
//       "cyberpunk", 
//       "valentine", 
//       "forest", 
//       "dracula"
//     ], // একাধিক থিম চালু
//   },
// };



//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components folder is often useful to add
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
      },
    },
  },
  plugins: [require("daisyui")],
  // This line is the key change to make the dark theme available.
  daisyui: {
    themes: ["light", "dark"],
  },
};