import { foodSchema } from "@/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: any, content: any) {
    const id = content.params.id;
    console.log(id);
    let success = false;
    await mongoose.connect(process.env.MONGO_URL as string);
    const result = await foodSchema.find();
    if(request){
        success = true;
    }

    return NextResponse.json({result,success})
}
