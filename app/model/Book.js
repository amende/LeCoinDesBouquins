var sql = require('./db.js')

var Book = function (book) {
  this.title = book.title
  this.categorie = book.categorie
  this.is_donation = book.isDonation
  this.departement = book.departement
  this.description = book.description
  this.created_at = new Date()
}

Book.create = function (newBook, result) {
  sql.query(
    'INSERT INTO book set ?', newBook, function (err, res) {
      if (err) {
        console.log('error in create book model: ', err)
        result(null, res.insertId)
      } else {
        console.log(res.insertId)
        result(null, res.insertId)
      }
    }
  )
}

Book.search = function (query, result) {
  sql.query(
    'SELECT * FROM book', function (err, res) {
      if (err) {
        console.log('error in search book model: ', err)
        result(null, res)
      } else {
        console.log(res)
        result(null, res)
      }
    }
  )
}

Book.getDetail = function (params, result) {
  sql.query(
    `SELECT * FROM book WHERE bok_id = ${params.bokId}`, function (err, res) {
      if (err) {
        console.log('error in getting details of book model: ', err)
        result(null, res)
      } else {
        console.log(res)
        result(null, res)
      }
    }
  )
}

module.exports = Book
