const express = require('express'); //importing the module
const app = express() //invoking it; creating an instance

//express itself is an objact with the following method:
//app.get -READ DATA
//app.post -INSERT DATA
//app.delete -DELETE DATA
//app.all
//app.use -MIDDLEWARE
//app.put -UPDATE DATA
//app.listen -LISTENING TO ALL CLIENT REQUESTS

app.get('/', (req,res)=>{  //path to resource user is trying to access, callback function invoked every time user performs a get request
    console.log('user hit home resource');
    res.send('Home Page') // the callback takes in 2 arguments req,res. for response express uses res and the .send method to return data to client
} )

app.get('/about', (req,res)=>{
    console.log('user hit about resource')
    res.send('About page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found<h1>')
    console.log('User accessing unavailable page');
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})