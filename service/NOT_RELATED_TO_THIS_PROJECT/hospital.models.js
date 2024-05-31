import mongoose, { Mongoose } from "mongoose";
const medicalRecordModel=new Mongoose.Schema({},{timestamps:true})
export const MedicalRecord= mongoose.model(
    "MedicalRecord",medicalRecordSchema);