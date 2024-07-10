const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.json([{name: 'bensoli'}, {name: 'alex'}])
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})