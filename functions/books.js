import { connectDb } from "./connectDb.js";

export const getAllBooks = async (req, res) => {
    const db = connectDb();
    const books = await db.collection("books").get();
    const booksArray = books.docs.map(doc => doc.data());
    res.status(200).send(booksArray);
  }