import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 });
  }

  const result = leadSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.format();
    return NextResponse.json({ success: false, message: "Validation failed.", errors }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: "Lead captured!" });
}
