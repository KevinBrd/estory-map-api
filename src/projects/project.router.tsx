import { Request, Response, Router } from "express";
import {
    createProject,
    deleteProjectById,
    getProjects,
    updateProjectById,
} from "./project.dao";
import ProjectPdf from "./project.pdf";
import React from "react";
import ReactPDF from "@react-pdf/renderer";

const router = Router();

const renderReact = async (component: any, data: any) => {
    const rootElemComponent = React.createElement(component, data);
    return await ReactPDF.renderToStream(rootElemComponent);
};

const createPdf = async (reactTemplate: any, data: any, response: any) => {
  const started = new Date().getDate();
  try {
    response.set("Content-Type", "application/pdf");
    const readStream = await renderReact(reactTemplate, data);
    readStream.pipe(response);
    // When the stream end the response is closed as well
    readStream.on('end', () => console.log(`Rendered template in ${new Date().getDate() - started}ms`));
  } catch (e) {
    console.log(`Error occurred while rendering: "${e}"`);
    response.status(500).end();
  }
};

router.get("/:id", async (req: Request, res: Response) => {
    console.log(req.params.id)
    const projects = await getProjects();
    const projectToExport = projects.find(project => project.id == req.params.id);
    return await createPdf(ProjectPdf, projectToExport, res);
});

router.get("/", async (req: Request, res: Response) => {
    res.json(await getProjects());
});

router.post("/", async (req: Request, res: Response) => {
    const { name, description, userId, mail_client } = req.body;

    res.json(
        await createProject({
            name,
            description,
            userId,
            mail_client,
        })
    );
});

router.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id as string;

    res.json(await deleteProjectById(+id));
});

router.put("/:id", async (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
        res.json(await updateProjectById(+id, req.body));
    } catch (e) {
        console.error(e);
        res.status(404).json({ message: "Project not found" });
    }
});

export default router;