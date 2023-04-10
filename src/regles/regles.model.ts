import { Schema, model } from "mongoose";

const reglesSchema = new Schema({
    id: Number,
    description: String,
});

const RegleModel = model('Regle', reglesSchema);

export default RegleModel;