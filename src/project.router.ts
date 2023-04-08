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
    const { name, age, image } = req.body;

    res.json(await createProject({ name, age, image }));
});

router.delete("/:params", async (req: Request, res: Response) => {
    const { id } = req.params;

    res.json(await deleteProjectById(+id));
});

router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, image, age } = req.body;

    res.json(await updateProjectById(+id, { name, image, age }));
});

export default router;