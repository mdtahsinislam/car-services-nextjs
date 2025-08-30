// import dbConnect from "../../lib/dbConnect";

// export default async function handler(req, res) {
//   const { email } = req.query;

//   if (!email) {
//     return res.status(400).json({ message: "Email is required" });
//   }

//   try {
//     const collection = await dbConnect("users");
//     const user = await collection.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({ user });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// }


import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    try {
      const collection = await dbConnect('users');
      const user = await collection.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // শুধু প্রয়োজনীয় ডেটা return করুন
      const { name, email: userEmail, image } = user;
      return res.status(200).json({ 
        user: { name, email: userEmail, image } 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}