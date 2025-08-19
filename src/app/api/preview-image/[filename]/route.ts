import { ImageService } from "../../../../lib/service/image.service";

export async function GET(
  req: Request,
  { params }: { params: { filename: string } }
) {
  const { filename } = await params;
  try {
    const image = await ImageService.getInstance().getImage(filename);
    return new Response(image, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new Response(JSON.stringify({ error: "Backend error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
