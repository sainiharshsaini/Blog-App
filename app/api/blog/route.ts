// import connectDB from "@/lib/config/db";
import { BlogModel } from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
const fs = require('fs');

// connectDB();

export async function GET(req: NextRequest) {

    const blogId = req.nextUrl.searchParams.get("id");

    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);

    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }
}

export async function POST(req: NextRequest) {
    const formData: FormData = await req.formData();
    const image = formData.get('image');

    if (!image) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`
    }

    await BlogModel.insertOne(blogData);
    console.log("Blog saved");

    return NextResponse.json({ success: true, msg: "Blog added" });
}

export async function DELETE(req: NextRequest) {
    const id = await req.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, () => {});
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Blog Deleted"})
}