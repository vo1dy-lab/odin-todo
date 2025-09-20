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

export const addTaskToProject = (
    projectId,
    taskTitle,
    taskDescription,
    taskPriority,
    taskDueDate,
    taskNotes
) => {
    const project = projects.find((p) => p.id === projectId);
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
