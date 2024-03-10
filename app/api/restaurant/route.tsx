import { connectdb } from "@/lib/db";
import { restaurantSchema } from "@/lib/restaurantModel";
import { NextResponse } from "next/server";

connectdb();


export async function GET(request: any) {
    let users = []
    try {
        users = await restaurantSchema.find();
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get data",
            sucess:false,
        })
    }

  return NextResponse.json(users);

   
}










export async function POST(request:any){
    const { name, email, password, address, confirmPassword, city, contact} = await request.json();
    // console.log({ name, email, password, address, confirmPassword, city, contact});

  const users=  new restaurantSchema({
        name, email, password, address, confirmPassword, city, contact
    })

    try {

        // save the object to database
        const craetedusers =  await users.save();
        console.log(craetedusers);
     
       const response= NextResponse.json(
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
 

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.body === 'POST') {
//         try {
//             const { name, email, password, address, confirmPassword, city, contact } = req.body;

//             const newUser = new restaurantSchema({ name, email, password, address, confirmPassword, city, contact })
//             await newUser.save();
//             res.status(201).json({ message: 'User registered successfully' });

//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Server Error' });
//         }
//     }
//     else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }

// }