const express=require('express');
const {connection} = require('./db');
const { postRouter } = require('./route/post.route');




const app = express();

app.use(express.json());

app.use('/',postRouter);

require("dotenv").config();



app.listen(process.env.port,async()=>{
try {
    await connection
    console.log(`listening on port ${process.env.port}`);
    console.log("connected to db");
} catch (err) {
    console.log(err);
    console.log("something went wrong");
}
})