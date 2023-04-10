import { Request, Response, Router } from "express";
import { createFlux, getFlux } from "./flux.dao";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await getFlux());
});

router.post("/", async (req: Request, res: Response) => {
    const { nom_flux, acteur_emetteur, acteur_recepteur } = req.body;

    res.json(
        await createFlux({
            nom_flux,
            acteur_emetteur,
            acteur_recepteur,
        })
    );
});

export default router;