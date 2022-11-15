const express = require('express')
const app= express()
const multer= require('multer')
const productsRouter = require('./routes/products')
const server = app.listen(8080,()=> console.log("Server up"))


let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-'+ file.originalname)
    }
})


app.use(express.json())
app.use(express.static('public'))
app.use("/",productsRouter)
app.use("/products",productsRouter)
