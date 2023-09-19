import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "Hello World" });
}

// GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
