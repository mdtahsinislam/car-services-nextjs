import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, password, image } = req.body;

      if (!name || !email || !password || !image) {
        return res.status(400).json({ message: "সব ফিল্ড পূরণ করুন" });
      }

      const collection = await dbConnect("users");

      // Check যদি same email থাকে
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const newUser = {
        name,
        email,
        password,
        image, // এখানে already hosted link
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
