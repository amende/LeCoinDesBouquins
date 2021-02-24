const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes/routes'); //importing routes

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

routes(app); //register the routes