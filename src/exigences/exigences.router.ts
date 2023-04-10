import { Request, Response, Router } from "express";
import { createExigences, getExigences } from "./exigences.dao";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await getExigences());
});

router.post("/", async (req: Request, res: Response) => {
    const { description, type } = req.body;

    res.json(
        await createExigences({
            description,
            type,
        })
    );
});

export default router;