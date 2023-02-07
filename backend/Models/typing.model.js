const mongoose=require("mongoose")

const typingSchema=mongoose.Schema({

    alltime:{type:{wpm:{type:Number},accuracy:{type:Number}}},
    best:{type:{wpm:{type:Number},accuracy:{type:Number}}}

})

const TypingModel=mongoose.model("typeing",typingSchema)

module.exports={TypingModel}