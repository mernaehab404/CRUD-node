import mongoose, { Schema, model } from "mongoose"

const schema =new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    },
    
    publishedDate: { type: Date, default: Date.now },
 })
  
 
 export const Book=model('Book',schema)