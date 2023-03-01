import express from 'express';
import {getAllBooks,getBookbyId,postNewBook,updateBook,deleteBook,registerUser,loginUser} from "./controller.js"

const router = express.Router();

// 
router.get('/', (req,res) => {
    res.json({success:true,msg:"you are in mern library"});
});

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