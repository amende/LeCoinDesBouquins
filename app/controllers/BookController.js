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

exports.search = function (req, res) {
  Book.search(req.query, function (err, bookList) {
    if (err) {
      res.send(err)
    }
    res.json(bookList)
  })
}

exports.getDetail = function (req, res) {
  Book.getDetail(req.params, function (err, bookDetail) {
    if (err) {
      res.send(err)
    }
    res.json(bookDetail)
  })
}
