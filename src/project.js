export class Project {
    tasks = [];
    id = crypto.randomUUID();
    constructor(name) {
        this.name = name;
    }
    set name(value) {
        this._name = value ?? null;
    }
    get name() {
        return this._name;
    }
    add(task) {
        this.tasks.push(task);
    }
}
