import { CreateActorDto } from "../types";
import ActorModel from "./actors.model";

/**
 * Add a new Actor to the database
 * @param dto The Actor to add
 * @returns The newly created Actor with its id
 */
export const createActor = async (dto: CreateActorDto) => {
    const newActor = { ...dto, id: Math.floor(Math.random() * 3000) };
    return ActorModel.create(newActor);
};

/**
 * Return all actors from the database
 */
export const getActors = async () => ActorModel.find({});