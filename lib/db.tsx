import mongoose from "mongoose";
import { restaurantSchema } from "./restaurantModel";

export const connectdb = async ()=>{
  try {

    const {connection} = await mongoose.connect(process.env.MONGO_URL as string,{
        dbName:"RESTODB"
    })

    console.log("db id connected....")
    console.log(connection)

   const user =  new restaurantSchema({
        name:"abhay"
    })

    await user.save();
    
  } catch (error) {
    console.log("db is not connected...");
    console.log(error);
    
  }
}