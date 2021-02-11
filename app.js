const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes/routes'); //importing routes

const app = express()
const port = 3000

numbTest = 0

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});
 
app.get('/bouton', (req, res) => {
    numbTest += 1;
    res.json({
        message: numbTest
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

routes(app); //register the routes