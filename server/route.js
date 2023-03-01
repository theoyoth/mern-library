import express from 'express';
import {getAllBooks,getBookbyId,postNewBook,updateBook,deleteBook,registerUser,loginUser} from "./controller.js"

const router = express.Router();

// authentication
router.post('/login', loginUser);
router.post('/register', registerUser);

// book
router.get('/book', getAllBooks);
router.get('/book/:id', getBookbyId);
router.post('/book', postNewBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);


export default router;