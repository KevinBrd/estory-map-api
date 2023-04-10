export type CreateProjectDto = {
    userId: number;
    name: string;
    description: string;
    mail_client?: string;
};

export type CreateFluxDto = {
    nom_flux: string;
    acteur_emetteur?: number;
    acteur_recepteur?: number;
};

export type CreateExigenceDto = {
    description: string;
    type: string;
};

export type CreateRegleDto = {
    description: string;
};

export type CreateActorDto = {
    nom_role: string;
    attributs?: { [key: string]: any }[];
};

export type Actor = {
    id: number;
    nom_role: string;
    attributs?: { [key: string]: any }[];
};

export type Exigence = {
    id: number;
    description: string;
    type: string;
};

export type Flux = {
    id: number;
    nom_flux: string;
    acteur_emetteur?: number;
    acteur_recepteur?: number;
};

export type GetFluxDto = {
    id: number;
    nom_flux: string;
    acteur_emetteur?: Actor;
    acteur_recepteur?: Actor;
}

export type RegleDeGestion = {
    id: number;
    description: string;
};

export type UpdateProjectDto = {
    userId: number;
    name?: string;
    description?: string;
    mail_client?: string;
    actors: number[];
    fluxs: number[];
    regles: number[];
    exigences: number[];
};

export type Project = {
    id: number;
    userId: number;
    name: string;
    description: string;
    mail_client?: string;
    actors: number[];
    fluxs: number[];
    regles: number[];
    exigences: number[];
};

export type GetProjectDto = {
    id: number;
    userId: number;
    name: string;
    description: string;
    mail_client?: string;
    actors: Actor[];
    fluxs: GetFluxDto[];
    regles: RegleDeGestion[];
    exigences: Exigence[];
};