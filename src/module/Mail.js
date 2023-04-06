const mongoose = require("mongoose")

const schema = mongoose.Schema;

const users_schema = new schema({
    mailId:{type:String,required:true},
    description:{type:String,required:true},
    topic:{type:String,required:true}
},
{timestamps:true}
)

const mail = mongoose.model("mail",users_schema)

module.exports = mail;