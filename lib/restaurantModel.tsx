import mongoose, { Schema } from "mongoose";

const restaurantModel = new Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String,
    city:String,
    address:String,
    contact:String,


})

export const restaurantSchema = mongoose.models.restaurant || mongoose.model("restaurant",restaurantModel)