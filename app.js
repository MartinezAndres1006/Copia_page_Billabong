const express = require('express')
const handlebars = require('express-handlebars')
const app= express()
const productsRouter = require('./routes/products')
const server = app.listen(8080,()=> console.log("Server up"))



// config
app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'pug')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('views'))
app.use(express.static('public'))



app.use("/",productsRouter)
app.use("/products",productsRouter)



