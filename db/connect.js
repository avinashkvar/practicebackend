const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
const url =
	'mongodb+srv://vercel-admin-user:7OyXqqCb9nHTY7kO@cluster0.7aune5i.mongodb.net/newproject?retryWrites=true&w=majority';

async function connect (){
     return new Promise((resolve, reject)=>{
          mongoose.connect(url,(err)=>{
               if(err){
                   return reject(err)
               }
               return resolve();
          })
     });
}

module.exports = connect