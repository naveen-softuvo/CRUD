const mongoose = require('mongoose');

var Employee = mongoose.model("Employee", {
    name: {type : String},
    email : {type : String},
    address : {type : String},
    empId : {type : String} ,
    phone : {type : Number},
    designation : {type : String},
});

module.exports = Employee ;