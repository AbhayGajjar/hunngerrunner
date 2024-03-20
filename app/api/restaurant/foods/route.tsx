import { connectdb } from "@/lib/db";
import { foodSchema } from "@/lib/foodsModel";
import { NextResponse } from "next/server";

connectdb();

export async function POST(request:any){
    const { foodname, price, img_path, desc} = await request.json();
    // console.log({ name, email, password, address, confirmPassword, city, contact});

  const food=  new foodSchema({
    foodname,price,img_path,desc
    })

    try {

        // save the object to database
        const craetedfood =  await food.save();
        console.log(craetedfood);
     
       const response= NextResponse.json(
         food,{status:201})
     
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