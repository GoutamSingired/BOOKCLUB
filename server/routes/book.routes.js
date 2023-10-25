const BookController = require('../controllers/book.controller')

module.exports = (app) => {
    app.get('/books', BookController.getAllBooks);
    app.post('/book/new', BookController.createBooks);
    app.get('/books/:id', BookController.getOneBook);
    app.patch('/books/:id', BookController.updateOneBook);
    app.delete('/books/:id', BookController.deleteOneBook);
}