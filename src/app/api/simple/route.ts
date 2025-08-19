import { NextResponse } from "next/server";
import { SimpleService } from "../../../lib/service/simple.service";

export async function GET() {
  try {
    const simple = await SimpleService.getinstance().getAllSimple();
    return NextResponse.json(simple);
  } catch (error) {
    return NextResponse.json({ error: "Backend error" }, { status: 500 });
  }
}
