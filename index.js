const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello Explorer!!!') )

app.listen(port, ()=> console.log(`node barebones running on port ${port}!!!`))