const projectsContainerHtml = document.querySelector('.projects');
const projectNameInputHtml = document.querySelector('#project');
const addProjectBtnHtml = document.querySelector('#add-project');
const addTaskBtnHtml = document.querySelector('#add-task');
const addTaskPopupHtml = document.querySelector('#add-popup');
const addTaskFormHtml = document.querySelector('#add-task-form');
const createTaskBtnHtml = document.querySelector('#create-task');
const projectSelectHtml = document.querySelector('#project-folder');

export const DOMElements = {
    projectsContainerHtml,
    projectNameInputHtml,
    addProjectBtnHtml,
    addTaskBtnHtml,
    addTaskPopupHtml,
    addTaskFormHtml,
    createTaskBtnHtml,
    projectSelectHtml,
};

export const showAddTaskPopup = () => {
    addTaskPopupHtml.show();
    addTaskFormHtml.reset();
};

export const closeAddTaskPopup = (e) => {
    if (e.target.className === 'overlay') addTaskPopupHtml.close();
};

export const getProjectInput = () => {
    const projectName = projectNameInputHtml.value;
    projectNameInputHtml.value = '';

    return projectName;
};
