const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req , res) => {
    res.send("name = durlabh")
  
})
app.get("/login", (req , res) => {
    res.send("<h1>please login at durlabh.com</h1>")
  
})

app.get("/youtube",(req , res) => {
    res.send("<h1>you are standing on youtube<h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
