import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
   const { name, email, message, companyName, inquiryType } = await req.json();

  const inquiry = await prisma.inquiry.create({
    data: { name, email, message, companyName, inquiryType },
  });

    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}