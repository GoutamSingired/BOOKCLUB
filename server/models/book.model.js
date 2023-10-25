const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title should be given"],
            minlength: [2, "Title must be unique and contain 2 characters"]
            
        },
        author: {
            type: String,
            required: [true, "Please give the author name"],
            minlength: [3, "Author Name should be 3 character min"],
            maxLength: [12, "Author Name must contain max of 12 characters"]
        },
        year: {
            type: Number,
            required: [true, "Please enter the year of book"]
        }
    },{ timestamps: true }
)

const Book = mongoose.model('Book', BookSchema)
module.exports = Book