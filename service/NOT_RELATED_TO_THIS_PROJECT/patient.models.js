import mongoose, { Mongoose } from "mongoose";
const patientRecordModel=new Mongoose.Schema({
    name:{
        type:String,
    required:true},
    diagnosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    address:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","GN"],
        required:true},
    atmittedIn:{
        type:mongoose.Schema.Types.ObjectIdaz
    }
    }

    
},{timestamps:true})
export const PatientRecord= mongoose.model(
    "PatientRecord",patientRecordSchema);