import { Schema, model } from "mongoose";

const exigencesSchema = new Schema({
    id: Number,
    description: String,
    type: String,
});

const ExigenceModel = model('Exigence', exigencesSchema);

export default ExigenceModel;