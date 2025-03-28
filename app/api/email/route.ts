import connectDB from "@/lib/config/db";
import { EmailModel } from "@/lib/models/EmailModel";
import { NextRequest, NextResponse } from "next/server";

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

export async function POST(req: NextRequest) {
    const formData = await req.formData();

    const emailData = {
        email: `${formData.get('email')}`,
    }

    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscribed" });
}

export async function GET(req: NextRequest) {
    const emails = await EmailModel.find({});
    return NextResponse.json({emails});
}

export async function DELETE(req: NextRequest) {
    const id = await req.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({
        success: true,
        msg: "Email Deleted"
    })
}