const mongoose = require('mongoose');
// connect to mongodb

mongoose.connect('mongodb//:localhost/testing');
mongoose.connection.once('open', ()=>{
    console.log('Connection has been made,now make fireworks..')
}).on ('error', (error) =>{
    console.log('connection error',error)
});