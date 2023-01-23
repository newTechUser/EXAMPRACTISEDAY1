const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const {Schema} = mongoose;
const teachersSchema = new Schema(
    {
        teacherimage:{type:String,required:true},
        teachername:{type:String,required:true},
        teachersubject:{type:String,required:true},
        teacherdescription:{type:String,required:true}
    },
    {timestamps:true}
)

const Teacher = mongoose.model("teachers",teachersSchema)
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("<h1>Teachers api</h1>")
})

app.get("/teacher",(req,res)=>[
    Teacher.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
])

app.get("/teacher/:id",(req,res)=>{
    const {id} = req.params
    Teacher.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message:"not found"})
            }
        }
        else{
            res.status(500).json({message:err})
        }
    })
})

app.post("/teacher",(req,res)=>{
    const teacher = new Teacher({
        teacherimage:req.body.teacherimage,
        teachername:req.body.teachername,
        teachersubject:req.body.teachersubject,
        teacherdescription:req.body.teacherdescription
    })
    teacher.save()
    res.send({message:'Products succesfully added!'})
})


app.delete("/teacher/:id",(req,res)=>{
    const {id} = req.params
    Teacher.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Succesfuly deleted!")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})
const port = process.env.port
const url = process.env.connection_url.replace("<password>",process.env.password)

mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("connection succsesfully!");
        app.listen(port,()=>{
            console.log("server working...");
        })
    }
    else{
        console.log(err);
    }
})