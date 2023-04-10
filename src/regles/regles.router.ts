import { Request, Response, Router } from "express";
import { createRegle, getRegles } from "./regles.dao";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await getRegles());
});

router.post("/", async (req: Request, res: Response) => {
    const { description } = req.body;

    res.json(
        await createRegle({
            description,
        })
    );
});

export default router;