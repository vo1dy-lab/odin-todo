export class Project {
    todos = [];
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
        this.todos.push(task);
    }
}
