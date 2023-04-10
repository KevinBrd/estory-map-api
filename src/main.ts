import cors from "cors";
import express from "express";
import projectRouter from "./projects/project.router";
import actorRouter from "./actors/actors.router";
import fluxRouter from "./flux/flux.router";
import regleRouter from "./regles/regles.router";
import exigenceRouter from "./exigences/exigences.router";

const app = express();

console.log("Starting application @ http://localhost:3001");

const corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/projects", projectRouter);
app.use("/actors", actorRouter);
app.use("/flux", fluxRouter);
app.use("/exigences", exigenceRouter);
app.use("/regles", regleRouter);

app.listen(3001);

export default app;