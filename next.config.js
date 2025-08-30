// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'graph.facebook.com', // Facebook profile picture
//       'lh3.googleusercontent.com', // Google profile picture
//       'avatars.githubusercontent.com', // GitHub profile picture
//       // অন্য host add করতে পারো যদি দরকার হয়
//     ],
//   },
// };

// module.exports = nextConfig;

//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'graph.facebook.com', // Facebook profile picture
      'lh3.googleusercontent.com', // Google profile picture
      'avatars.githubusercontent.com', // GitHub profile picture
      'i.ibb.co', // ✅ Add this domain to allow ImgBB images
      // অন্য host add করতে পারো যদি দরকার হয়
    ],
     qualities: [75, 100], 
  },
};

module.exports = nextConfig;