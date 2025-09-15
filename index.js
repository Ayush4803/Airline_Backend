const express = require('express');
const app = express();
const dotenv=require('dotenv')

dotenv.config()
const PORT=process.env.PORT

app.get('/',(req,res)=>{
    res.send("Home page ")
})

app.listen(PORT,()=>{
    console.log(`Started the PORT ON PORT:${PORT}`)
});