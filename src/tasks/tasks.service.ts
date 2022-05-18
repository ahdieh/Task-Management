import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreaeTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  // make it private to limit what controllers can do
  private tasks: Task[] = [];
  // creating some methods to communicate with the controllers
  gatAllTasks(): Task[] {
    return this.tasks;
  }

  gatTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(creaeTaskDto: CreaeTaskDto): Task {
    const { title, description } = creaeTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
