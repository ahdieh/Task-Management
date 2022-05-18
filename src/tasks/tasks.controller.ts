import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreaeTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  gatAllTasks(): Task[] {
    return this.taskService.gatAllTasks();
  }

  @Post()
  createTask(@Body() creaeTaskDto: CreaeTaskDto): Task {
    return this.taskService.createTask(creaeTaskDto);
  }
}
