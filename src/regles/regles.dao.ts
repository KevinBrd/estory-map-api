import { CreateRegleDto } from "../types";
import RegleModel from "./regles.model";

/**
 * Add a new Regle to the database
 * @param dto The Regle to add
 * @returns The newly created Regle with its id
 */
export const createRegle = async (dto: CreateRegleDto) => {
    const newRegle = { ...dto, id: Math.floor(Math.random() * 3000) };
    return RegleModel.create(newRegle);
};

/**
 * Return all regles from the database
 */
export const getRegles = async () => RegleModel.find({});