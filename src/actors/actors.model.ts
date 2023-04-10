import { Schema, model } from "mongoose";

const actorSchema = new Schema({
    id: {type: Number, required: true},
    nom_role: {type: String, required: true},
    attributs: [{}],
});

const ActorModel = model('Actor', actorSchema);

export default ActorModel;