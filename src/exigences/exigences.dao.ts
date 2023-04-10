import { Exigence, CreateExigenceDto } from "../types";
import ExigenceModel from "./exigences.model";

/**
 * Add a new Exigence to the database
 * @param dto The Exigence to add
 * @returns The newly created Exigence with its id
 */
export const createExigences = async (dto: CreateExigenceDto) => {
    const newExigence = { ...dto, id: Math.floor(Math.random() * 3000) };
    return ExigenceModel.create(newExigence);
};

/**
 * Return all exigences from the database
 */
export const getExigences = async () => ExigenceModel.find({});