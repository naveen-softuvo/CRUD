const express = require('express');
var router = express.Router();

var Employee = require('../model/employee.js');

//
router.post('/',(req,res)=>{
    new Employee(req.body).save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("error in retrieving employee");
        }
    });
});
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("error in retrieving employee" + JSON.stringify(err,undefined,2));
        }
    });
});
router.get('/:id',(req,res)=>{
    Employee.findOne({_id:req.params.id},(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("error in retrieving employee" + JSON.stringify(err,undefined,2));
        }
    });
});
router.delete("/:id",(req,res)=>{
    Employee.findOneAndRemove({_id:req.params.id},(err,docs)=>{
        if(docs){
            console.log("success");
            res.send(docs);
        }else{
            console.log("unable to delete",err);
        }
    });
});
router.put('/:id',(req,res)=>{
    Employee.updateOne({_id:req.params.id},{$set : req.body },(err,docs)=>{
        if(docs){
            console.log(docs);
            res.send(docs);
        }
        else{
            console.log("unable to update==>"+err);
        }
    });
})

module.exports = router;