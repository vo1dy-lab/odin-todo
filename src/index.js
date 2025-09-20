import './styles.css';
import { renderProjects, renderOptionsProject } from './projectRenderer';
import * as ui from './ui.js';
import * as state from './state.js';

function handleTaskPopup(e) {
    if (e.target.className === 'overlay') {
        ui.closeAddTaskPopup();
        ui.resetAddTaskForm();
    }
}

function handleAddProject(e) {
    const projectName = ui.getProjectInput();
    if (projectName) {
        e.preventDefault();

        state.addProject(projectName);
        const projects = state.getProjects();

        renderProjects(projects, ui.DOMElements.projectsContainerHtml);
        renderOptionsProject(projects, ui.DOMElements.projectSelectHtml);
    }
}

function handleCreateTask(e) {
    const taskTitle = ui.getTaskTitle();
    const taskDescription = ui.getTaskDescription();
    const taskPriority = ui.getTaskPriority();
    const projectId = ui.getSelectedProject().dataset.id;
    const taskDueDate = ui.getTaskDueDate();
    const taskNotes = ui.getTaskNotes();

    if (taskTitle && projectId) {
        e.preventDefault();

        state.addTaskToProject(
            projectId,
            taskTitle,
            taskDescription,
            taskPriority,
            taskDueDate,
            taskNotes
        );

        ui.closeAddTaskPopup();
        ui.resetAddTaskForm();
        const projects = state.getProjects();
        renderProjects(projects, ui.DOMElements.projectsContainerHtml);
    }
}

function initializeApp() {
    const initialProjects = state.getProjects();
    renderProjects(initialProjects, ui.DOMElements.projectsContainerHtml);
    renderOptionsProject(initialProjects, ui.DOMElements.projectSelectHtml);

    ui.DOMElements.addProjectBtnHtml.addEventListener(
        'click',
        handleAddProject
    );
    ui.DOMElements.addTaskBtnHtml.addEventListener(
        'click',
        ui.showAddTaskPopup
    );
    ui.DOMElements.addTaskPopupHtml.addEventListener('click', handleTaskPopup);
    ui.DOMElements.createTaskBtnHtml.addEventListener(
        'click',
        handleCreateTask
    );
}

initializeApp();
