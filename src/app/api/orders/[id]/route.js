import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// ✅ GET /api/orders/:id -> Single order
export async function GET(req, { params }) {
  try {
    const { id } = params;
    const ordersCollection = await dbConnect("orders");
    const order = await ordersCollection.findOne({ _id: new ObjectId(id) });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(
      { ...order, _id: order._id.toString() },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch order", details: error.message },
      { status: 500 }
    );
  }
}

// ✅ PUT /api/orders/:id -> Update
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ordersCollection = await dbConnect("orders");

    const result = await ordersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...body, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Order updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Order Update Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ DELETE /api/orders/:id -> Delete
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    const ordersCollection = await dbConnect("orders");

    const result = await ordersCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Order Delete Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
