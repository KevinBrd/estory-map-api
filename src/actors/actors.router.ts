import { Request, Response, Router } from "express";
import { createActor, getActors } from "./actors.dao";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await getActors());
});

router.post("/", async (req: Request, res: Response) => {
    const { nom_role, attributs } = req.body;

    res.json(
        await createActor({
            nom_role,
            attributs,
        })
    );
});

export default router;