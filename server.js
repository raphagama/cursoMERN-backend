const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/database', {
    userUnifiedTopology: true,
    useNewUrlParser: true,
    userFindAndModify: false
}, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('MongoDB successfully CONNECTED!')
    }
})


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || port, () =>{
    console.log(`Server runing on port ${port}`)
})
