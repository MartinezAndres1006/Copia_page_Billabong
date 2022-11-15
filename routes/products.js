const express = require('express')
const router = express.Router()
const Contenedor = require('../contenedor')
const contenedor= new Contenedor()
const file='./products.txt'
const products= contenedor.read(file)


const middlewareProducts = (req,res,next)=>{
   let products= req.body
    if(!products.nombre ||!products.modelo){
        return res.status(400).send({Error:"Se requieren mas datos"})
    }else{

        next()
    }
}

router.get('/products',(req,res)=>{
   res.json(contenedor.getAll(file)) 
})


router.get('/products/:id',(req,res)=>{
    const { id } = req.params;
    const product = contenedor.getById(parseInt(id), file);
    product ? res.json({product_id: id, producto: product}) 
            : res.json({message: 'No tenemos este producto id:'+ id});
})


router.post('/products',middlewareProducts,(req,res)=>{
    let product= req.body
    contenedor.save(product,file)
    res.json({Message:"Producto creado",product,file})
})


router.put('/products/:id',(req,res)=>{
    const { id } = req.params;
    let body  = req.body;
    const product = contenedor.getById(parseInt(id), file);
    if(product){
        contenedor.updateProduct(id,body,file)
        res.json({message: 'Producto actualizado', producto: body})
    }else{
        res.json({message: 'No existe tal producto id :'+ id})
    }
    
})


router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = contenedor.deleteById(parseInt(id), file);
    if(product){ 
        res.json({message: 'Producto eliminado', id: id})
    }else{  
        res.json({message: 'Producto no encontrado. Id: '+ id})
    };
}
);





module.exports = router