require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req , res) =>{
    res.send('dullutwitter')
})

app.get("/rakun",(req , res) => {
    res.send("<h2>rakun ni bolna uncle doremon naam h mera</h2>")
})


app.get('/login',(req , res ) =>{
    res.send('<h1>please login to my website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})