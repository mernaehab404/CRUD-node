import express from 'express'
 import { dbConnection } from './database/dbConnection.js'
import mongoose, { Schema,model  } from 'mongoose'
import bookRouter from './src/modules/book/book.routes.js'
import authorRouter from './src/modules/author/author.routes.js'
const app = express()
const port = 3000
app.use(express.json())
app.use('/books',bookRouter)
app.use('/authors',authorRouter)



app.get('/',(req,res)=> res.send('helloooo'))
app.listen(port,()=> console.log(`listening on port${port}!`))