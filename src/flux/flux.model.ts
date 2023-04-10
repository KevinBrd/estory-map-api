import { Schema, model } from "mongoose";

const fluxSchema = new Schema({
    id: {type: Number, required: true},
    nom_flux: {type: String, required: true},
    acteur_emetteur: Number,
    acteur_recepteur: Number,
});

const FluxModel = model('Flux', fluxSchema);

export default FluxModel;