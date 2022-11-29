const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const app = express()
const port = 3001; 


app.use(express.json())
app.use(cors())

