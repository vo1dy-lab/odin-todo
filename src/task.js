import { format } from 'date-fns';

export class Task {
    id = crypto.randomUUID();
    _creationDate = new Date();
    constructor(title, desc, dueDate, notes, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
        this.isCompleted = false;
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
        this._dueDate = value ? new Date(value) : new Date();
    }
    get dueDate() {
        return format(this._dueDate, 'dd.MM.yyyy');
    }
    set notes(value) {
        this._notes = value ?? null;
    }
    get notes() {
        return this._notes;
    }
    set priority(value) {
        this._priority = value ?? 'low';
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
    get creationDate() {
        return format(this._creationDate, 'dd.MM.yyyy');
    }
}
