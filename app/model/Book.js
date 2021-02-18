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
        console.log('error in register model: ', err)
        result(null, res.insertId)
      } else {
        console.log(res.insertId)
        result(null, res.insertId)
      }
    }
  )
}

module.exports = Book
