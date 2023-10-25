const Book = require('../models/book.model')

module.exports = {
    getAllBooks: (req, res) => {
        Book.find({})
            .then(books => {res.json(books)})
            .catch(err => {res.json("not found any books", err)})
    },

    createBooks: (req, res) => {     
        console.log("body", req.body.newBook)
        Book.create(req.body.newBook)
            .then(newBook => {res.status(200).json(newBook)})
            .catch(err => {res.status(500).json(err), console.log(err)}) 
    },
    getOneBook: (req, res) => {
        console.log(req.params.id)
        Book.findOne({_id: req.params.id})
            .then(oneBook => res.json(oneBook))
            .catch(err => {res.json("cant get the Book", err)})
    },
    updateOneBook: (req, res) => {
        console.log("hello", req.body)
        Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
            .then(updateOne => res.status(200).json(updateOne))
            .catch(err => { res.status(500).json(err), console.log(err)} )
    },
    deleteOneBook: (req, res) => {
        console.log(req.params.id)
        Book.deleteOne({_id: req.params.id})
            .then(deleteBook => res.json(deleteBook))
            .catch(err => console.log(err))
    }
}