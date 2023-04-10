import { Actor, CreateActorDto } from "../types";

const actors: Actor[] = [{
    id: 0,
    nom_role: "Eleve",
    attributs: [{ nom: "string" }, { age: "int" }]
},{
    id: 1,
    nom_role: "Professeur",
    attributs: [{ nom: "string" }, { age: "int" }]
}];

/**
 * Add a new Actor to the database
 * @param dto The Actor to add
 * @returns The newly created Actor with its id
 */
export const createActor = async (dto: CreateActorDto) => {
    console.debug(dto);
    const newActor = { ...dto, id: actors.length + 1 };
    actors.push(newActor);
    return newActor;
};

/**
 * Return all actors from the database
 */
export const getActors = async () => actors;