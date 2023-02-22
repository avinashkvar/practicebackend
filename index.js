const express = require('express');
const connect = require('./db/connect');
const app = express();

app.get('/',async (req,res)=>{
    res.send('hello')
})

connect()
.then(()=>{
    app.listen(3000,()=>{
        console.log('listening on port 3000')
    })
}).catch((err)=>console.log(err))