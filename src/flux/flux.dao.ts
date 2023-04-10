import { getActors } from "../actors/actors.dao";
import { Flux, CreateFluxDto, GetFluxDto } from "../types";
import FluxModel from "./flux.model";

/**
 * Add a new Flux to the database
 * @param dto The Flux to add
 * @returns The newly created Flux with its id
 */
export const createFlux = async (dto: CreateFluxDto) => {
    const newFlux = { ...dto, id: Math.floor(Math.random() * 3000) };
    return FluxModel.create(newFlux);
};

/**
 * Return all fluxs from the database
 */
export const getFlux = async (): Promise<GetFluxDto[]> => {
    const actors = await getActors();
    const fluxs = await FluxModel.find({});
    return fluxs.map((flux: Flux) => {
        return {
            ...flux,
            acteur_recepteur: actors.find(actor => actor.id === flux.acteur_recepteur),
            acteur_emetteur: actors.find(actor => actor.id === flux.acteur_emetteur),
        }
    })
};