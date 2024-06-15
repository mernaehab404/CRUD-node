import mongoose, { Schema, model } from "mongoose"


const schema =new Schema({
    name: String,
    bio:String,
    birthDate:Date ,
    books:{
        type:mongoose.Types.ObjectId,
        ref:'Book'
    }
 })
  
 
 export const Author=model('Author',schema)