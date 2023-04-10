import { getActors } from "../actors/actors.dao";
import { Flux, CreateFluxDto, GetFluxDto } from "../types";

const fluxs: Flux[] = [{
    id: 0,
    nom_flux: "Note",
    acteur_emetteur: 0,
    acteur_recepteur: 1,
}];

/**
 * Add a new Flux to the database
 * @param dto The Flux to add
 * @returns The newly created Flux with its id
 */
export const createFlux = async (dto: CreateFluxDto) => {
    console.debug(dto);
    const newFlux = { ...dto, id: fluxs.length + 1 };
    fluxs.push(newFlux);
    return newFlux;
};

/**
 * Return all fluxs from the database
 */
export const getFlux = async (): Promise<GetFluxDto[]> => {
    const actors = await getActors();
    return fluxs.map((flux: Flux) => {
        return {
            ...flux,
            acteur_recepteur: actors.find(actor => actor.id === flux.acteur_recepteur),
            acteur_emetteur: actors.find(actor => actor.id === flux.acteur_emetteur),
        }
    })
};