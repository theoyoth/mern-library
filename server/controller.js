import {User,Book} from "./model/model.js"
import jwt from 'jsonwebtoken';

// constroller for authentication
export const registerUser = async (req,res) => {
    try {
        const {name,password} = req.body;
        const findUser = await User.findOne({name});
        if(findUser) {
            res.json({success:false,msg:"User already exist"});
        }
        else{
            const regUser = await User.create({name,password});
            if(regUser) {
                res.status(201).json({success:true,msg:"User registered successfully"});
            }
            else{
                res.status(400).json({success:false});
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}
export const loginUser = async (req,res) => {
    try {
        const {name,password} = req.body;
        const findUser = await User.findOne({name});
        if(findUser){
            if(findUser.password !== password) {
                return res.json({success:false,msg:"Invalid password"});
            }
            const token = jwt.sign({name:findUser.name},process.env.SECRET_KEY);
            // set headers
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
            res.setHeader(
                'Access-Control-Allow-Headers',
                'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            )
            return res.status(200).json({success:true,name:findUser.name,token});
        }
        else{
            return res.json({success:false,msg:"User not found, please register!"});
        }
        
    } catch (error) {
        console.log(error)
    }
}

// controllers for book
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        if(books.length > 0){
            res.status(200).json({success:true,data:books})
        }
        else {
            res.json({success:false,msg:"No books found"})
        }
    } catch (error) {
        console.log(error)
    }
}
export const getBookbyId = async (req, res) => {
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        res.status(200).json({success:true,data:book})
        
    } catch (error) {
        console.log(error)
    }
}
export const postNewBook = async (req, res) => {
    try {
        const {title,author,genre,status,information,summary} = req.body
        const dataBook = await Book.create({
            title: title,
            author: author,
            genre: genre,
            status: status,
            information: information,
            summary: summary
        })
        if(dataBook){
            res.status(201).json({success:true, msg:"book has registered"})
        }
        else {
            res.json({success:false,msg:"book not registered, try in few minutes"})
        }
        
    } catch (error) {
        console.log(error)
    }
}
export const updateBook = async (req, res) => {
    try {
        const {title,author,genre,status,information,summary} = req.body
        const {id} = req.params
        
        const updateBook = await Book.findByIdAndUpdate({_id:id},{
            title:title,
            author:author,
            genre:genre,
            status:status,
            information:information,
            summary:summary
        })
        if(updateBook){
            res.status(200).json({success:true,msg:"book has updated"})
        }
        else {
            res.json({success:false,msg:"failed to update"})
        }
        
    } catch (error) {
        console.log(error)
    }
}
export const deleteBook = async (req, res) => {
    try {
        const {id} = req.params
        const delBook = await Book.findByIdAndDelete(id)

        if(delBook){
            res.status(200).json({success:true,msg:"book has deleted"})
        }
        else {
            res.json({success:false,msg:"cannot delete book"})
        }
        
    } catch (error) {
        console.log(error)
    }
}