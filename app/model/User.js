var sql = require('./db.js')

var User = function (user) {
  this.email = user.email
  this.pwd = user.pwd
  this.created_at = new Date()
}

User.register = function (newUser, result) {
  sql.query(
    'INSERT INTO user set ?', newUser, function (err, res) {
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

module.exports = User
