require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())


app.post('/login', (req, res) => {
    const username = req.body.username
    const user = {name: username}
    
    console.log(user)
    const accessToken = jwt.sign(user && user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})


app.listen(3300)
