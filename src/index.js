import './styles.css';
import { renderProjects, renderOptionsProject } from './projectRenderer';
import * as ui from './ui.js';
import * as state from './state.js';

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

function handleCreateTask(e) {}

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
    ui.DOMElements.addTaskPopupHtml.addEventListener(
        'click',
        ui.closeAddTaskPopup
    );
    ui.DOMElements.createTaskBtnHtml.addEventListener(
        'click',
        handleCreateTask
    );
}

initializeApp();
