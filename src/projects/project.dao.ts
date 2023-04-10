import { getActors } from "../actors/actors.dao";
import { getExigences } from "../exigences/exigences.dao";
import { getFlux } from "../flux/flux.dao";
import { getRegles } from "../regles/regles.dao";
import { Project, CreateProjectDto, UpdateProjectDto, GetProjectDto, Flux, Exigence, RegleDeGestion, GetFluxDto, Actor } from "../types";
import ProjectModel from "./project.model";

/**
 * Add a new project to the database
 * @param dto The project to add
 * @returns The newly created project with its id
 */
export const createProject = async (dto: CreateProjectDto) => {
    const newProject = { ...dto, id: Math.floor(Math.random() * 3000), actors: [], exigences: [], regles: [], fluxs: [] };
    await ProjectModel.create(newProject);
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

  const projects = await ProjectModel.find({});

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
  return ProjectModel.findByIdAndDelete(id);
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
    return ProjectModel.findOneAndUpdate({id}, dto);
};