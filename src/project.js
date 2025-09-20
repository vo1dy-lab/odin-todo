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
        return this._tasks;
    }
    add(task) {
        this._tasks.push(task);
    }
}
