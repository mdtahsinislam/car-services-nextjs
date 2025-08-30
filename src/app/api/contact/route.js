
//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\api\contact\route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // ✅ ঠিক path ব্যবহার করুন

// POST method
export async function POST(req) {
  try {
    const body = await req.json();

    const contactCollection = await dbConnect("contacts");

    const result = await contactCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: "Message saved successfully!", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save message." },
      { status: 500 }
    );
  }
}
