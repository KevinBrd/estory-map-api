import { assert } from "chai";
import request from "supertest";
import app from "../src/main";
import projectMocks from "./projects.json";
import { Project } from "../src/types";

describe("CRUD Tests", async () => {
    let addedProject: Project;

    it("return an empty array", async () => {
        const { body: projects } = await request(app)
            .get("/projects")
            .expect(200);
        assert.equal(projects.length, 0);
    });

    it("should add and return a new project", async () => {
        const { body: project } = await request(app)
            .post("/projects")
            .send(projectMocks[0])
            .expect("Content-Type", /json/)
            .expect(200);
        addedProject = project;
        assert.isDefined(project.id);

        const { body: projects } = await request(app)
            .get("/projects")
            .expect(200);
        assert.equal(project.length, 1);
    });

    it("should update and return the project", async () => {
        const updatedName = "42";
        addedProject.name = updatedName;

        const { body: project } = await request(app)
            .put(`/projects/${addedProject.id}`)
            .send(addedProject)
            .expect(200);

        assert.equal(project.id, addedProject.id);
        assert.equal(project.name, updatedName);
    });

    it("should remove and return the project", async () => {
        const { body: project } = await request(app)
            .delete(`/projects/${addedProject.id}`)
            .expect(200);
        assert.equal(project.id, addedProject.id);

        const { body: projects } = await request(app)
            .get("/projects")
            .expect(200);
        assert.equal(projects.length, 0);
    });
});