const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public')) //setting up static middleware
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./methods-public/navbar-app/index.html'))
//adding to assets
//Serer side rendering
// })

app.all('*',(req,res)=>{
    res.status(404).send('<h4>Page not found<h4/>')
})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})