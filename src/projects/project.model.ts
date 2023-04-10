import { Schema, model } from "mongoose";

const projectSchema = new Schema({
    id: Number,
    userId: Number,
    name: String,
    description: String,
    mail_client: String,
    actors: [Number],
    fluxs: [Number],
    regles: [Number],
    exigences: [Number],
});

const ProjectModel = model('Project', projectSchema);

export default ProjectModel;