const projectsContainerHtml = document.querySelector('.projects');
const tasksContainerHtml = document.querySelector('.tasks');
const projectNameInputHtml = document.querySelector('#project');
const addProjectBtnHtml = document.querySelector('#add-project');
const addTaskBtnHtml = document.querySelector('#add-task');
const addTaskPopupHtml = document.querySelector('#add-popup');
const addTaskFormHtml = document.querySelector('#add-task-form');
const projectSelectHtml = document.querySelector('#project-folder');

const createTaskBtnHtml = document.querySelector('#create-task');
const taskTitleInputHtml = document.querySelector('#title');
const taskDescInputHtml = document.querySelector('#desc');
const taskPrioritySelectHtml = document.querySelector('#priority');
const taskDueDateHtml = document.querySelector('#dueDate');
const taskNotesInputHtml = document.querySelector('#notes');

export const DOMElements = {
    projectsContainerHtml,
    tasksContainerHtml,
    projectNameInputHtml,
    addProjectBtnHtml,
    addTaskBtnHtml,
    addTaskPopupHtml,
    addTaskFormHtml,
    projectSelectHtml,
    createTaskBtnHtml,
    taskTitleInputHtml,
    taskDescInputHtml,
    taskPrioritySelectHtml,
    taskDueDateHtml,
    taskNotesInputHtml,
};

export const showAddTaskPopup = () => {
    addTaskPopupHtml.show();
};

export const closeAddTaskPopup = () => {
    addTaskPopupHtml.close();
};

export const resetAddTaskForm = () => {
    addTaskFormHtml.reset();
};

export const getProjectInput = () => {
    const projectName = projectNameInputHtml.value;
    projectNameInputHtml.value = '';

    return projectName;
};

export const getSelectedProject = () => {
    const selectedIndex = projectSelectHtml.selectedIndex;
    const selectedOption = projectSelectHtml.options[selectedIndex];

    return selectedOption;
};

export const getTaskTitle = () => {
    const taskTitle = taskTitleInputHtml.value;

    return taskTitle;
};

export const getTaskDescription = () => {
    const taskDescription = taskDescInputHtml.value;

    return taskDescription;
};

export const getTaskPriority = () => {
    const selectedIndex = taskPrioritySelectHtml.selectedIndex;
    const selectedOption = taskPrioritySelectHtml.options[selectedIndex];

    return selectedOption;
};

export const getTaskDueDate = () => {
    const taskDueDate = taskDueDateHtml.value;

    return taskDueDate;
};

export const getTaskNotes = () => {
    const taskNotes = taskNotesInputHtml.value;

    return taskNotes;
};
