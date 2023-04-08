import express from "express";
import projectRouter from "./project.router";

const app = express();

console.log("Starting application @ http://localhost:3000");

app.use(express.json());

app.use("/projects", projectRouter);

app.listen(3000);