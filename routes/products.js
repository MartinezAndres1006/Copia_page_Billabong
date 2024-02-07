const express = require('express')
const router = express.Router()
router.use(express.static('public'))



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

router.get('/nike',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/Nike.html"))
})



module.exports = router