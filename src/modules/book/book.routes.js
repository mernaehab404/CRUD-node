import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "./book.controller.js";

const bookRouter = Router()
bookRouter.route('/').post(addBook).get(getAllBooks)
bookRouter.route('/:id').patch(updateBook).delete(deleteBook).get(getBook)



export default bookRouter