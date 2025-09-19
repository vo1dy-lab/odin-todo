export class Task {
    id = crypto.randomUUID();
    constructor(title, desc, dueDate, notes, priority, isCompleted) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
        this.isCompleted = isCompleted;
    }
    set title(value) {
        this._title = value ?? null;
    }
    get title() {
        return this._title;
    }
    set desc(value) {
        this._desc = value ?? null;
    }
    get desc() {
        return this._desc;
    }
    set dueDate(value) {
        this._dueDate = value ?? new Date.now();
    }
    get dueDate() {
        return this._dueDate;
    }
    set notes(value) {
        this._notes = value ?? null;
    }
    get notes() {
        return this._notes;
    }
    set priority(value) {
        this._priority = value ?? null;
    }
    get priority() {
        return this._priority;
    }
    set isCompleted(value) {
        this._isCompleted = value ?? false;
    }
    get isCompleted() {
        return this._isCompleted;
    }
}
