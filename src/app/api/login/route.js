import dbConnect from "@/lib/dbConnect";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email & Password required" }), { status: 400 });
    }

    const usersCollection = await dbConnect("users");
    const user = await usersCollection.findOne({ email });

    if (!user) return new Response(JSON.stringify({ error: "User not found" }), { status: 401 });

    // 🔥 plain text password verification
    if (password !== user.password) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "testsecret",
      { expiresIn: "1d" }
    );

    return new Response(JSON.stringify({ message: "Login successful", token }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
