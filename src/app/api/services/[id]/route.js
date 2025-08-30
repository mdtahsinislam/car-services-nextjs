//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\services\[id]\route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const serviceCollection = await dbConnect("test_services");
    const service = await serviceCollection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // _id কে string এ convert করতে হবে
    service._id = service._id.toString();

    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
//C:\Web-Development\Next-Lecel-MileStone13\Module-Car-Service-project\car-services-nextjs\src\app\api\services\[id]\route.js