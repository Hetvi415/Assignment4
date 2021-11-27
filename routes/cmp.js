const express = require("express");
const router = express.Router();
router.use(express.json());

const cmp = require("../cmpdetail.js")

router.get("/",(req,res) => res.send("Company Page"));

router.post("/addcmp",(req,res)=> 
{
    const cmplist = req.body;
    const clist = cmp;
    prolist.push(cmplist)
    res.json({data:prolist});
});

router.post("/getdata",(req,res)=> 
{    
    res.json({data:cmp});
});

router.post("/delete",(req,res)=> 
{   
    const dltdata = req.body;
    prod.pop(dltdata);
    
    res.json({data:cmp});
});  

router.post("/updatecmp",(req,res)=> 
{
    const cmplist = req.body;
    
    cmp[1]=cmplist;
    res.json({data:cmp});
});

module.exports = router;