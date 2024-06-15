import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from "./author.controller.js";

const authorRouter = Router()
authorRouter.route('/').post(addAuthor).get(getAllAuthors)
authorRouter.route('/:id').patch(updateAuthor).delete(deleteAuthor).get(getAuthorById)



export default authorRouter