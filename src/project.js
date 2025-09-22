export class Project {
    id = crypto.randomUUID();
    _tasks = [];
    constructor(name) {
        this.name = name;
    }
    set name(value) {
        this._name = value ?? null;
    }
    get name() {
        return this._name;
    }
    get tasks() {
        return [...this._tasks];
    }
    add(task) {
        this._tasks.push(task);
    }
    removeTask(taskId) {
        this._tasks = this._tasks.filter((task) => task.id !== taskId);
    }
    updateTaskPriority(taskId, priority) {
        const taskToUpdate = this._tasks.find((task) => task.id === taskId);
        if (taskToUpdate) taskToUpdate.priority = priority;
    }
    updateTaskStatus(taskId, isCompleted) {
        const taskToUpdate = this.tasks.find((task) => task.id === taskId);
        if (taskToUpdate) taskToUpdate.isCompleted = isCompleted;
    }
    updateTaskData(
        taskId,
        taskTitle,
        taskDescription,
        taskDueDate,
        taskNotes,
        taskPriority
    ) {
        const taskToUpdate = this.tasks.find((task) => task.id === taskId);
        if (taskToUpdate) {
            taskToUpdate.title = taskTitle;
            taskToUpdate.desc = taskDescription;
            taskToUpdate.dueDate = taskDueDate;
            taskToUpdate.notes = taskNotes;
            taskToUpdate.priority = taskPriority;
        }
    }
}
