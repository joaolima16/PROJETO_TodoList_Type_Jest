import { Task } from "vitest";

interface taskRepository {
    create:Promise<Task>;
}

export class TaskRepository implements taskRepository{
    
}