


// // //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\api\orders\route.js
// // import { NextResponse } from "next/server";
// // import dbConnect from "@/lib/dbConnect";

// // // ✅ POST /api/orders
// // export async function POST(req) {
// //   try {
// //     const body = await req.json();

// //     // Orders collection
// //     const ordersCollection = await dbConnect("orders");

// //     // Insert new order
// //     const result = await ordersCollection.insertOne({
// //       ...body,
// //       createdAt: new Date(),
// //     });

// //     return NextResponse.json(
// //       { message: "i want tost successfully", orderId: result.insertedId },
// //       { status: 201 }
// //     );
// //   } catch (error) {
// //     console.error("Order Insert Error:", error);
// //     return NextResponse.json(
// //       { error: "Failed to place order", details: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }


// // C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\api\orders\route.js

// //C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\api\orders\route.js
// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";

// import { ObjectId } from "mongodb";

// // ✅ GET /api/orders -> সব বুকিং আনা অথবা নির্দিষ্ট ইউজারের বুকিং
// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const email = searchParams.get("email"); // query থেকে email ধরব

//     const ordersCollection = await dbConnect("orders");

//     const query = email ? { email } : {}; // যদি email থাকে তাহলে ফিল্টার

//     const orders = await ordersCollection.find(query).toArray();

//     const formattedOrders = orders.map(order => ({
//       ...order,
//       _id: order._id.toString(),
//     }));

//     return NextResponse.json(formattedOrders, { status: 200 });
//   } catch (error) {
//     console.error("Order Fetch Error:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch orders", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ POST /api/orders -> নতুন বুকিং যোগ করা
// export async function POST(req) {
//   try {
//     const body = await req.json();

//     // Orders collection
//     const ordersCollection = await dbConnect("orders");

//     // Insert new order
//     const result = await ordersCollection.insertOne({
//       ...body,
//       createdAt: new Date(),
//     });

//     return NextResponse.json(
//       { message: "Order placed successfully", orderId: result.insertedId },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Order Insert Error:", error);
//     return NextResponse.json(
//       { error: "Failed to place order", details: error.message },
//       { status: 500 }
//     );
//   }
// }


// // C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\api\orders\[id]\route.js



// // ✅ DELETE /api/orders/:id
// export async function DELETE(req, { params }) {
//   try {
//     const { id } = params;
//     const ordersCollection = await dbConnect("orders");

//     const result = await ordersCollection.deleteOne({ _id: new ObjectId(id) });

//     if (result.deletedCount === 0) {
//       return NextResponse.json({ error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
//   } catch (error) {
//     console.error("Order Delete Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // ✅ PUT /api/orders/:id (Update booking info)
// export async function PUT(req, { params }) {
//   try {
//     const { id } = params;
//     const body = await req.json();

//     const ordersCollection = await dbConnect("orders");

//     const updatedDoc = {
//       $set: {
//         ...body,
//         updatedAt: new Date(),
//       },
//     };

//     const result = await ordersCollection.updateOne(
//       { _id: new ObjectId(id) },
//       updatedDoc
//     );

//     if (result.matchedCount === 0) {
//       return NextResponse.json({ error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Order updated successfully" }, { status: 200 });
//   } catch (error) {
//     console.error("Order Update Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }




// // ✅ GET /api/orders/:id -> Single order by id
// export async function GET(req, { params }) {
//   try {
//     const { id } = params;
//     const ordersCollection = await dbConnect("orders");
//     const order = await ordersCollection.findOne({ _id: new ObjectId(id) });

//     if (!order) {
//       return NextResponse.json({ error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json(
//       { ...order, _id: order._id.toString() },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch order", details: error.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

// ✅ GET /api/orders -> সব বুকিং আনা অথবা নির্দিষ্ট ইউজারের বুকিং
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email"); // query থেকে email ধরব

    const ordersCollection = await dbConnect("orders");
    const query = email ? { email } : {};

    const orders = await ordersCollection.find(query).toArray();
    const formattedOrders = orders.map(order => ({
      ...order,
      _id: order._id.toString(),
    }));

    return NextResponse.json(formattedOrders, { status: 200 });
  } catch (error) {
    console.error("Order Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders", details: error.message },
      { status: 500 }
    );
  }
}

// ✅ POST /api/orders -> নতুন বুকিং যোগ করা
export async function POST(req) {
  try {
    const body = await req.json();
    const ordersCollection = await dbConnect("orders");

    const result = await ordersCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Order placed successfully", orderId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order Insert Error:", error);
    return NextResponse.json(
      { error: "Failed to place order", details: error.message },
      { status: 500 }
    );
  }
}
