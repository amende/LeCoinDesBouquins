var mysql = require('mysql')

// local mysql db connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'le_coin_des_bouquins'
})

connection.connect(function (err) {
  if (err) throw err
})

module.exports = connection
