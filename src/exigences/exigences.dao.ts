import { Exigence, CreateExigenceDto } from "../types";

const exigences: Exigence[] = [{
    id: 0,
    description: "Exigence Test",
    type: "Fonctionelle"
},{
    id: 1,
    description: "Exigence Test 2",
    type: "Non-Fonctionelle"
}];

/**
 * Add a new Exigence to the database
 * @param dto The Exigence to add
 * @returns The newly created Exigence with its id
 */
export const createExigences = async (dto: CreateExigenceDto) => {
    const newExigence = { ...dto, id: exigences.length + 1 };
    exigences.push(newExigence);
    return newExigence;
};

/**
 * Return all exigences from the database
 */
export const getExigences = async () => exigences;