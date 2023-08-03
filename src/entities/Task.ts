type taskProps = {
    title: string,
    description: string,
    createdAt: Date
}

export class Task{
    private _taskProps: taskProps
    constructor(taskProps: taskProps){
        this._taskProps = taskProps;

    }
    get title(){
        return this._taskProps.title
    }
    set title(title: string){
        this._taskProps.title = title;
    }
    get description(){
        return this._taskProps.description
    }
    set description(description: string){
        this._taskProps.description = description;
    }
    get createdAt(){
        return this._taskProps.createdAt
    }
    set createdAt(createdAt: Date){
        this._taskProps.createdAt =createdAt ;
    }
}