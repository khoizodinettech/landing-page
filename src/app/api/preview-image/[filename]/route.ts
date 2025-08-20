import { NextRequest, NextResponse } from "next/server";
import { ImageService } from "../../../../lib/service/image.service";

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;
  try {
    const image = await ImageService.getInstance().getImage(filename);
    return new NextResponse(image, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new NextResponse(JSON.stringify({ error: "Backend error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
