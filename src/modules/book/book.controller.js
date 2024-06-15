import { Book } from "../../../database/models/book.model.js"

const addBook=async(req,res)=>{
    let book = await  Book.insertMany(req.body)
  res.status(201).json({message:"success",book})
  }
const updateBook = async(req,res)=>{
    let book = await  Book.findByIdAndUpdate(req.params.id, req.body,{new:true})
  res.json({message:"success",book})
  }
const deleteBook= async(req,res)=>{
    let book = await  Book.findByIdAndDelete(req.params.id)
  res.json({message:"success",book})
  }
const getAllBooks=async (req,res)=>{
  const page= req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 4;
  const skip = (page - 1) * limit;
  let books = await Book.find().populate("author").skip(skip).limit(limit)
    res.status(200).json({results:books.length,page,books})
}
const getBook=async (req,res)=>{
  let books= await Book.findById(req.params.id)
  res.status(200).json({message:"sucess",books})
}
  export {
    addBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getBook
  }