import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message, companyName, inquiryType } = await req.json();

    if (!name || !email || !message || !inquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { ok: true, name, email, message, companyName, inquiryType },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 },
    );
  }
}
