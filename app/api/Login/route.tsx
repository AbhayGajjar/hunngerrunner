import { NextResponse } from 'next/server';
import { restaurantSchema } from '../../../lib/restaurantModel';
export async function POST(request:any) {
    
    console.log("login api")

    const {email,password} = await request.json();
    try{
        const  users = restaurantSchema.findOne({
            email:email,
        })

        if(users == null){
            throw new Error("user not found !!")
        }
        if(password !== users.password){
            throw new Error("Incorrect Password !!")
        }

        const response = NextResponse.json({
            message:"Login Success !!",
            success:true,
            users : users,
        })

        console.log(users);
        return response
    }catch(error:any){
        return NextResponse.json({
            message: error.message,
            success:false
        },
        {
            status:500,
        }
        
        )

    }
}