module.exports = function (app) {
  var user = require('../controllers/UserController')
  var book = require('../controllers/BookController')

  // User Routes
  app.route('/api/register')
    .get(user.get_register_page)
    .post(user.register)
  /*
  app.route('/login')
    .get(user.get_login_page)
    .put(user.login)
    .delete(user.delete_user)
  */

  // Book Routes
  app.route('/api/book')
    .get(book.search)
    .post(book.create)
}
