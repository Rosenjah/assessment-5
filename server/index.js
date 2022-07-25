require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.json())
app.use(cors())
app.use('/', router);

// DEV
app.post('/seed', seed)

// COUNTRIES
// app.get('/countries', getCountries)

// CITIES
// app.post('/cities', createCity)
// app.get('/cities', getCities)
// app.delete('/cities/:id', deleteCity)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
