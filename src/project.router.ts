import { Request, Response, Router } from "express";
import {
    createProject,
    deleteProjectById,
    getProjects,
    updateProjectById,
} from "./project.dao";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await getProjects());
});

router.post("/", async (req: Request, res: Response) => {
    const { id, name, description, userId, mail_client } = req.body;

    res.json(
        await createProject({
            id,
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
        res.status(404).json({ message: "Project not found" });
    }
});

export default router;