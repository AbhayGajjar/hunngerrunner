import { foodSchema } from "@/lib/foodsModel";
import { NextResponse } from "next/server";

export async function POST(request:any){
    const {foodname,price,path,desc} = await request.json();

    const users = new foodSchema({
        foodname,price,path,desc
    })

    try {

      const fooods= await  users.save();
      console.log(fooods)
       const response  = NextResponse.json(
        users,{status:201})
        return response;
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"faild to created user!",
            status:false,
        },{
            status:500
        })
    }

}