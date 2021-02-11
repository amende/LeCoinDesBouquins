var User = require('../model/User')

exports.register = function (req, res) {
  var newUser = new User(req.body)

  User.register(newUser, function (err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

exports.get_register_page = function (result) {
  result.json({})
}
