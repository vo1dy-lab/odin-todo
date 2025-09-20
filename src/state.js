import { Project } from './project';
import { Task } from './task';

const projects = [];
projects.push(new Project('Default'));

let activeProjectId = null;

if (projects.length > 0) activeProjectId = projects[0].id;

export const getProjects = () => projects;

export const getProjectById = (projectId) => {
    const currentProject = projects.find((project) => project.id == projectId);

    return currentProject;
};

export const getActiveProjectId = () => activeProjectId;

export const setActiveProjectId = (projectId) => {
    activeProjectId = projectId;
};

export const addProject = (projectName) => {
    if (projectName) {
        const newProject = new Project(projectName);
        projects.push(newProject);

        return newProject;
    }

    return null;
};

export const addTaskToProject = (
    projectId,
    taskTitle,
    taskDescription,
    taskPriority,
    taskDueDate,
    taskNotes
) => {
    const project = getProjectById(projectId);
    if (projectId) {
        const newTask = new Task(
            taskTitle,
            taskDescription,
            taskDueDate,
            taskNotes,
            taskPriority
        );
        project.add(newTask);
    }

    return null;
};
