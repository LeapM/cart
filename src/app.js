import express from 'express'
import dotenv from 'dotenv'
import {getDB} from './dal'
import "regenerator-runtime/runtime"

dotenv.config();
const app = express();
const port = process.env.port || 3000;

getDB().then((db)=>console.log(db));
app.use('/',(req,res)=> res.send('hello world'));

app.listen(port,()=>{
  console.log(`listen on localhost:${port}`);
})