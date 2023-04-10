import { RegleDeGestion, CreateRegleDto } from "../types";

const regles: RegleDeGestion[] = [{
    id: 0,
    description: "Exigence Test",
},{
    id: 1,
    description: "Exigence Test 2",
}];

/**
 * Add a new Regle to the database
 * @param dto The Regle to add
 * @returns The newly created Regle with its id
 */
export const createRegle = async (dto: CreateRegleDto) => {
    console.debug(dto);
    const newRegle = { ...dto, id: regles.length + 1 };
    regles.push(newRegle);
    return newRegle;
};

/**
 * Return all regles from the database
 */
export const getRegles = async () => regles;