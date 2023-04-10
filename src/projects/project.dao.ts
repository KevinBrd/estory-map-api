import { getActors } from "../actors/actors.dao";
import { getExigences } from "../exigences/exigences.dao";
import { getFlux } from "../flux/flux.dao";
import { getRegles } from "../regles/regles.dao";
import { Project, CreateProjectDto, UpdateProjectDto, GetProjectDto, Flux, Exigence, RegleDeGestion, GetFluxDto, Actor } from "../types";

const projects: Project[] = [
    {
      "id": 1,
      "userId": 1,
      "name": "Projet 1",
      "description": "Description du projet 1",
      "mail_client": "mailClient@gmail.com",
      "actors": [1],
      "fluxs": [1],
      "exigences": [1],
      "regles": [1]
    }
  ];

/**
 * Add a new project to the database
 * @param dto The project to add
 * @returns The newly created project with its id
 */
export const createProject = async (dto: CreateProjectDto) => {
    const newProject = { ...dto, id: projects.length + 1, actors: [], exigences: [], regles: [], fluxs: [] };
    projects.push(newProject);
    return newProject;
};

/**
 * Return all projects from the database
 */
export const getProjects = async () => {
  const fluxs = await getFlux();
  const actors = await getActors();
  const regles = await getRegles();
  const exigences = await getExigences();

  return projects.map(project => {
    return {
      ...project,
      flux: fluxs.filter(flux => project.fluxs.includes(flux.id)),
      actors: actors.filter(actor => project.actors.includes(actor.id)),
      regles: regles.filter(regle => project.regles.includes(regle.id)),
      exigences: exigences.filter(exigence => project.exigences.includes(exigence.id)),
  }})
};

/**
 * Delete a project by its id
 * @param id The id of the project to delete
 */
export const deleteProjectById = async (id: number) => {
    const index = projects.findIndex((a) => a.id === id);
    if (index === -1) {
        throw new Error("Project not found");
    }
    return projects.splice(index, 1)[0];
};

/**
 * Update a project by its id
 * @param id The id of the project to update
 * @param dto The new values for the project
 */
export const updateProjectById = async (
    id: number,
    dto: UpdateProjectDto
) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index === -1) {
        throw new Error("Project not found");
    }
    projects[index] = { ...projects[index], ...dto };

    return projects[index];
};