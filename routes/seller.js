const express = require("express");
const router = express.Router();
router.use(express.json());

const seller = require("../sellerdetail.js")

router.get("/",(req,res)=> res.send("seller page"));

router.post("/addseller",(req,res)=> 
{
    const sellerlist = req.body;
    const slist = prod;
    slist.push(sellerlist)
    res.json({data:slist});
});

router.post("/get",(req,res)=> 
{    
    res.json({data:seller});
});

router.post("/delete",(req,res)=> 
{   
    const dltdata = req.body;
    seller.pop(dltdata);
    
    res.json({data:seller});
});  

router.post("/updateseller",(req,res) => 
{
    const sellerlist = req.body;
    
    seller[1]=sellerlist;
    res.json({data:seller});
});

module.exports = router;