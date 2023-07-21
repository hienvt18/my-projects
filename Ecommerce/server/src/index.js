const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = 8000

app.use(express.json())
app.use(cors());

//HTTP logger
app.use(morgan('combined'))

//import route
const route = require('./routers')
//Routes init
route(app)

//import database
const db = require('./config/db')
//connect to db
db.connect()




app.listen(port, () => console.log(`http://localhost:${port}`))