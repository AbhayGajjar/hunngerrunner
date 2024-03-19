import mongoose, { Schema } from "mongoose";

const foodSModels = new Schema({
    foodname:String,
    price:Number,
    img_path:String,
    desc:String,
    resto_id:mongoose.Schema.Types.ObjectId

})


 export const foodSchema = mongoose.models.food || mongoose.model('food',foodSModels)