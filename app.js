const express = require('express')
const app= express()
const productsRouter = require('./routes/products')
 
app.listen(8080,()=> console.log("Server up"))




app.use(express.json())
app.use(express.static('public'))
app.use("/",productsRouter)
app.use("/products",productsRouter)
app.use("/nike",productsRouter)
