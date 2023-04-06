const router = require("express").Router()

const mail = require('../module/Mail')

router.route("/").get((req,res)=>{

    mail.find()
    .then(e=>res.status(200).json({e}))
    .catch(err=>res.status(400).json("Err" + err))
})

router.route("/").post((req,res)=>{
    console.log(req.body)
   const topic = req.body.topic;
   const description = req.body.description;
   const mailId = req.body.mailId;

   const newMail = new mail({
    mailId,topic,description
   })
    newMail.save()
    .then((e)=>res.status(200).json({e,message:"successfully Added"}))
    .catch(err=>res.status(400).json("json"+ err))
})

module.exports = router;
