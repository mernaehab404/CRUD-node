import { Author } from "../../../database/models/author.model.js";

const addAuthor = async (req, res) => {
  let author = await Author.insertMany(req.body);
  res.status(201).json({ message: "success", author });
};
const updateAuthor = async (req, res) => {
  let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ message: "success", author });
};
const deleteAuthor = async (req, res) => {
  let author = await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "success", author });
};
const getAllAuthors = async (req, res) => {
  const page= req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 4;
  const skip = (page - 1) * limit;
  let authors = await Author.find().populate("books").skip(skip).limit(limit);
  res.status(200).json({results:authors.length,page, authors });
};
const getAuthorById=async (req, res) => {
    let author = await Author.findById(req.params.id).populate("books");
    res.status(200).json({ message: "success", author });
  };
export { addAuthor, updateAuthor, deleteAuthor, getAllAuthors ,getAuthorById};
