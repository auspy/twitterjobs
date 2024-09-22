import { NextResponse } from "next/server";

export async function GET(req) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.json({ message: "Cron job executed successfully" });
}
