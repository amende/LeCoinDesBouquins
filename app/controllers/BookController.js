var Book = require('../model/Book')

exports.create = function (req, res) {
  var newBook = new Book(req.body)

  Book.create(newBook, function (err, book) {
    if (err) {
      res.send(err)
    }
    res.json(book)
  })
}
