import { Project, CreateProjectDto, UpdateProjectDto } from "../types";

const projects: Project[] = [
    {
      "id": 1,
      "userId": 1,
      "name": "Projet 1",
      "description": "Description du projet 1",
      "mail_client": "mailClient@gmail.com",
      "actors": [
          {
            "id": 1,
            "nom_role": "Acteur 1",
            "attributs": [
                {
                  "nom": "Nom",
                  "type": "string",
                  "valeur": "Dupont"
                },
                {
                  "nom": "Age",
                  "type": "number",
                  "valeur": 25
                }
            ]
          }
      ],
      "fluxs": [
          {
            "id": 1,
            "nom_flux": "Flux 1",
            "acteur_emmeteur": {
            "id": 1,
            "nom_role": "Acteur 1",
            "attributs": [
              {
                "nom": "Nom",
                "type": "string",
                "valeur": "Dupont"
              },
              {
                "nom": "Age",
                "type": "number",
                "valeur": 25
              }
            ]
            }
          }
      ],
      "exigences": [
        {
          "id": 1,
          "description": "Exigence 1",
          "type": "Fonctionnelle"
        }
      ],
      "regles": [
        {
          "id": 1,
          "description": "Regle 1"
        }
      ]
    }
  ];

/**
 * Add a new project to the database
 * @param dto The project to add
 * @returns The newly created project with its id
 */
export const createProject = async (dto: CreateProjectDto) => {
    const newProject = { ...dto, id: projects.length + 1 };
    projects.push(newProject);
    return newProject;
};

/**
 * Return all projects from the database
 */
export const getProjects = async () => projects;

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