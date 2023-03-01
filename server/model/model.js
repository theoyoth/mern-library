import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
});

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: [String],
    status: { type: String, required: true},
    information: { type: String, required: true },
    summary: { type: String, required: true },
});
mongoose.set('strictQuery', false);

export const User = mongoose.model("User", UserSchema);
export const Book = mongoose.model("Book", BookSchema);