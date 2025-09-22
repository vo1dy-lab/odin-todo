import { Project } from './project';
import { Task } from './task';

const projects = [];
projects.push(new Project('Default'));

let activeProjectId = null;

if (projects.length > 0) activeProjectId = projects[0].id;

export const getProjects = () => projects;

export const getProjectById = (projectId) => {
    const currentProject = projects.find((project) => project.id === projectId);

    return currentProject;
};

export const getActiveProjectId = () => activeProjectId;

export const setActiveProjectId = (projectId) => {
    activeProjectId = projectId;
};

export const getTaskById = (projectId, taskId) => {
    const project = getProjectById(projectId);

    if (project) {
        const task = project.tasks.find((task) => task.id === taskId) ?? null;
        return task;
    }
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

export const removeTaskFromProject = (projectId, taskId) => {
    const project = getProjectById(projectId);
    if (project) project.removeTask(taskId);
};

export const updateTaskPriority = (projectId, taskId, priority) => {
    const project = getProjectById(projectId);

    if (project) project.updateTaskPriority(taskId, priority);
};

export const updateTaskStatus = (projectId, taskId, isCompleted) => {
    const project = getProjectById(projectId);

    if (project) project.updateTaskStatus(taskId, isCompleted);
};

export const updateTaskData = (
    projectId,
    taskId,
    taskTitle,
    taskDescription,
    taskDueDate,
    taskNotes,
    taskPriority
) => {
    const project = getProjectById(projectId);
    if (project)
        project.updateTaskData(
            taskId,
            taskTitle,
            taskDescription,
            taskDueDate,
            taskNotes,
            taskPriority
        );
};

export const getActiveTasks = (projectId) => {
    const project = getProjectById(projectId);

    if (project) {
        const activeTasks = project.tasks.filter((task) => !task.isCompleted);

        return activeTasks;
    }

    return null;
};

export const getCompletedTasks = (projectId) => {
    const project = getProjectById(projectId);

    if (project) {
        const completedTasks = project.tasks.filter((task) => task.isCompleted);

        return completedTasks;
    }

    return null;
};
