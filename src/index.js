import './styles.css';
import { renderProjects, renderOptionsProject } from './projectRenderer';
import { renderTasks } from './taskRenderer.js';
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

        renderProjects(
            projects,
            ui.DOMElements.projectsContainerHtml,
            state.getActiveProjectId()
        );
        renderOptionsProject(
            projects,
            ui.DOMElements.projectSelectHtml,
            state.getActiveProjectId()
        );
    }
}

function handleTaskForm(e) {
    const taskTitle = ui.getTaskTitle();
    const taskId = ui.DOMElements.createTaskBtnHtml.dataset.taskId;

    if (taskTitle) {
        e.preventDefault();

        if (taskId) {
            handleUpdateTask(taskId);
        } else {
            handleCreateTask();
        }
    }
}

function handleUpdateTask(taskId) {
    const projectId = ui.getSelectedProject().dataset.id;
    const taskTitle = ui.getTaskTitle();
    const taskDescription = ui.getTaskDescription();
    const taskDueDate = ui.getTaskDueDate();
    const taskNotes = ui.getTaskNotes();
    const taskPriority = ui.getTaskPriority().value;

    if (projectId && taskId) {
        state.updateTaskData(
            projectId,
            taskId,
            taskTitle,
            taskDescription,
            taskDueDate,
            taskNotes,
            taskPriority
        );

        ui.closeAddTaskPopup();
        ui.resetAddTaskForm();
        const projects = state.getProjects();
        renderProjects(
            projects,
            ui.DOMElements.projectsContainerHtml,
            projectId
        );
        renderTasks(
            state.getProjectById(projectId),
            ui.DOMElements.tasksContainerHtml
        );
    }
}

function handleCreateTask() {
    const taskTitle = ui.getTaskTitle();
    const taskDescription = ui.getTaskDescription();
    const taskPriority = ui.getTaskPriority().value;
    const projectId = ui.getSelectedProject().dataset.id;
    const taskDueDate = ui.getTaskDueDate();
    const taskNotes = ui.getTaskNotes();

    if (projectId) {
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
        renderProjects(
            projects,
            ui.DOMElements.projectsContainerHtml,
            projectId
        );
        renderTasks(
            state.getProjectById(projectId),
            ui.DOMElements.tasksContainerHtml
        );
    }
}

function handleProjectFolder(e) {
    const currentProject = e.target.closest('.project');

    if (!currentProject) return;
    const projectId = currentProject.dataset.id;
    state.setActiveProjectId(projectId);
    renderProjects(
        state.getProjects(),
        ui.DOMElements.projectsContainerHtml,
        projectId
    );
    renderTasks(
        state.getProjectById(projectId),
        ui.DOMElements.tasksContainerHtml
    );
    renderOptionsProject(
        state.getProjects(),
        ui.DOMElements.projectSelectHtml,
        state.getActiveProjectId()
    );
}

function handleTaskContainerClick(e) {
    const currentTask = e.target.closest('.task-container');
    if (!currentTask) return;
    const currentTaskId = currentTask.dataset.id;
    const currentProjectId = state.getActiveProjectId();
    const currentProject = state.getProjectById(currentProjectId);

    const priorityBtn = e.target.closest('.priority-btn');
    const deleteBtn = e.target.closest('.task-del');
    const editBtn = e.target.closest('.task-edit');
    const isCompletedBtn = e.target.closest('#is-completed');

    if (priorityBtn) {
        const newPriority = priorityBtn.dataset.priority;
        state.updateTaskPriority(currentProjectId, currentTaskId, newPriority);
        renderTasks(currentProject, ui.DOMElements.tasksContainerHtml);

        return;
    } else if (isCompletedBtn) {
        const isCompleted = isCompletedBtn.checked;
        state.updateTaskStatus(currentProjectId, currentTaskId, isCompleted);
        renderTasks(currentProject, ui.DOMElements.tasksContainerHtml);
    } else if (deleteBtn) {
        state.removeTaskFromProject(currentProjectId, currentTaskId);
        renderTasks(currentProject, ui.DOMElements.tasksContainerHtml);
        renderProjects(
            state.getProjects(),
            ui.DOMElements.projectsContainerHtml,
            currentProjectId
        );

        return;
    } else if (editBtn) {
        const task = state.getTaskById(currentProjectId, currentTaskId);
        ui.showEditTaskPopup(task);
    }
}

function renderTasksAndCount(projectId) {
    const project = state.getProjectById(projectId);

    if (project) {
        const activeTasks = state.getActiveTasks(projectId).length;
        const completedTasks = state.getCompletedTasks(projectId).length;
        ui.updateTasksCount(activeTasks, completedTasks);

        renderTasks(project, ui.DOMElements.tasksContainerHtml);
    }
}

function initializeApp() {
    const initialProjects = state.getProjects();
    const activeProjectId = state.getActiveProjectId();

    renderProjects(
        initialProjects,
        ui.DOMElements.projectsContainerHtml,
        activeProjectId
    );
    renderOptionsProject(
        initialProjects,
        ui.DOMElements.projectSelectHtml,
        state.getActiveProjectId()
    );
    renderTasks(
        state.getProjectById(activeProjectId),
        ui.DOMElements.tasksContainerHtml
    );

    ui.DOMElements.addProjectBtnHtml.addEventListener(
        'click',
        handleAddProject
    );
    ui.DOMElements.addTaskBtnHtml.addEventListener(
        'click',
        ui.showAddTaskPopup
    );
    ui.DOMElements.addTaskPopupHtml.addEventListener('click', handleTaskPopup);
    ui.DOMElements.createTaskBtnHtml.addEventListener('click', handleTaskForm);
    ui.DOMElements.projectsContainerHtml.addEventListener(
        'click',
        handleProjectFolder
    );
    ui.DOMElements.tasksContainerHtml.addEventListener(
        'click',
        handleTaskContainerClick
    );
}

initializeApp();
