const express = require('express');
const connect = require('./db/connect');
const { UserModel } = require('./db/user');
const app = express();


app.get('/',async (req,res)=>{
    res.send('hello')
})

app.get('/users',async (req,res)=>{
    try {
        let users = await UserModel.find();
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

connect()
.then(()=>{
    app.listen(3000,()=>{
        console.log('listening on port 3000')
        return
    })
}).catch((err)=>err)
