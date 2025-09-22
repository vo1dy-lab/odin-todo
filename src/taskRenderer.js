import calendarImg from './calendar.svg';
import editBtnImg from './edit-one.svg';
import delBtnImg from './trash.svg';
import checkImg from './check-circle.svg';

export function renderTasks(currentProject, tasksContainer) {
    tasksContainer.textContent = '';

    if (currentProject.tasks.length === 0) {
        const noTasksContainer = document.createElement('div');
        const noTasksImg = document.createElement('img');
        const noTasksH3 = document.createElement('h3');
        const noTasksH4 = document.createElement('h4');

        noTasksContainer.classList.add('no-tasks');
        noTasksImg.src = checkImg;
        noTasksImg.alt = 'check-circle';
        noTasksH3.textContent = 'No tasks found';
        noTasksH4.textContent = 'Add your first task to get started';

        noTasksContainer.appendChild(noTasksImg);
        noTasksContainer.appendChild(noTasksH3);
        noTasksContainer.appendChild(noTasksH4);

        tasksContainer.appendChild(noTasksContainer);

        return;
    }

    const tasks = currentProject.tasks;

    tasks.forEach((task) => {
        const taskContainerDiv = document.createElement('div');
        const taskDiv = document.createElement('div');
        const taskInputCheckbox = document.createElement('input');
        const taskInfoDiv = document.createElement('div');
        const taskEditDiv = document.createElement('div');

        const taskInfoName = document.createElement('h3');
        const taskInfoDesc = document.createElement('h4');

        const taskAdditionalDiv = document.createElement('div');
        const taskPriorityDiv = document.createElement('div');
        const taskPriority = document.createElement('h4');

        const taskDueDateDiv = document.createElement('div');
        const taskDueDateImg = document.createElement('img');
        const taskDueDate = document.createElement('h4');
        const taskCreationDate = document.createElement('h4');

        const taskNotes = document.createElement('h5');

        const taskLowPriorityBtn = document.createElement('button');
        const taskMediumPriorityBtn = document.createElement('button');
        const taskHighPriorityBtn = document.createElement('button');

        const taskEditBtn = document.createElement('button');
        const taskEditBtnImg = document.createElement('img');
        const taskDelBtn = document.createElement('button');
        const taskDelBtnImg = document.createElement('img');

        taskInputCheckbox.setAttribute('type', 'checkbox');
        taskInputCheckbox.setAttribute('name', 'is-completed');
        taskInputCheckbox.id = 'is-completed';

        taskContainerDiv.classList.add('task-container');
        taskDiv.classList.add('task');
        taskInfoDiv.classList.add('task-info');
        taskInfoName.id = 'task-name';
        taskInfoDesc.id = 'task-description';

        taskAdditionalDiv.classList.add('task-additional');
        taskPriorityDiv.classList.add('task-priority', task.priority);
        taskPriorityDiv.id = 'task-priority';
        taskDueDateDiv.classList.add('due-date');
        taskDueDateDiv.id = 'due-date';
        taskDueDateImg.src = calendarImg;
        taskDueDateImg.alt = 'calendar';
        taskCreationDate.id = 'creation-date';
        taskNotes.id = 'task-notes';

        taskEditDiv.classList.add('task-edit');
        taskLowPriorityBtn.setAttribute('type', 'button');
        taskLowPriorityBtn.textContent = 'low';
        taskLowPriorityBtn.classList.add('priority-btn');
        taskLowPriorityBtn.dataset.priority = 'low';
        taskMediumPriorityBtn.setAttribute('type', 'button');
        taskMediumPriorityBtn.textContent = 'medium';
        taskMediumPriorityBtn.classList.add('priority-btn');
        taskMediumPriorityBtn.dataset.priority = 'medium';
        taskHighPriorityBtn.setAttribute('type', 'button');
        taskHighPriorityBtn.textContent = 'high';
        taskHighPriorityBtn.classList.add('priority-btn');
        taskHighPriorityBtn.dataset.priority = 'high';

        switch (task.priority) {
            case 'low':
                taskLowPriorityBtn.classList.add('current');
                break;
            case 'medium':
                taskMediumPriorityBtn.classList.add('current');
                break;
            case 'high':
                taskHighPriorityBtn.classList.add('current');
                break;
        }

        taskEditBtn.classList.add('edit-btn');
        taskEditBtn.id = 'task-edit';
        taskEditBtnImg.src = editBtnImg;
        taskEditBtnImg.alt = 'edit-one';

        taskDelBtn.classList.add('edit-btn');
        taskDelBtn.id = 'task-del';
        taskDelBtn.classList.add('task-del');
        taskDelBtnImg.src = delBtnImg;
        taskDelBtnImg.alt = 'trash';

        taskContainerDiv.dataset.id = task.id;
        taskInputCheckbox.checked = task.isCompleted;
        taskInfoName.textContent = task.title;
        taskInfoDesc.textContent = task.desc;
        taskPriority.textContent = task.priority;
        taskDueDate.textContent = task.dueDate;
        taskCreationDate.textContent = task.creationDate;
        taskNotes.textContent = task.notes;

        if (task.isCompleted) {
            taskContainerDiv.classList.add('task-completed');
        }

        taskEditDiv.appendChild(taskLowPriorityBtn);
        taskEditDiv.appendChild(taskMediumPriorityBtn);
        taskEditDiv.appendChild(taskHighPriorityBtn);
        taskEditBtn.appendChild(taskEditBtnImg);
        taskEditDiv.appendChild(taskEditBtn);
        taskDelBtn.appendChild(taskDelBtnImg);
        taskEditDiv.appendChild(taskDelBtn);

        taskInfoDiv.appendChild(taskInfoName);
        taskInfoDiv.appendChild(taskInfoDesc);
        taskPriorityDiv.appendChild(taskPriority);
        taskDueDateDiv.appendChild(taskDueDateImg);
        taskDueDateDiv.appendChild(taskDueDate);
        taskAdditionalDiv.appendChild(taskPriorityDiv);
        taskAdditionalDiv.appendChild(taskDueDateDiv);
        taskAdditionalDiv.appendChild(taskCreationDate);
        taskInfoDiv.appendChild(taskAdditionalDiv);
        taskInfoDiv.appendChild(taskNotes);

        taskDiv.appendChild(taskInfoDiv);
        taskDiv.appendChild(taskEditDiv);

        taskContainerDiv.appendChild(taskInputCheckbox);
        taskContainerDiv.appendChild(taskDiv);

        tasksContainer.appendChild(taskContainerDiv);
    });
}
