import { Project } from './project';
import { Task } from './task';

const projects = [];
projects.push(new Project('Default'));

export const getProjects = () => projects;

export const addProject = (projectName) => {
    if (projectName) {
        const newProject = new Project(projectName);
        projects.push(newProject);

        return newProject;
    }

    return null;
};
