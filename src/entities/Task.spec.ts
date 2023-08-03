import {expect, test} from 'vitest';
import { Task } from './Task';
test("Instance the user ",()=>{
    const task = new Task({
        title: 'teste',
        description: 'teste teste teste',
        createdAt: new Date()
    });
    expect(task).toHaveProperty('title')
    console.log(task)
})