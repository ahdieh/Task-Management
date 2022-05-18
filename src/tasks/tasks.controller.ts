import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreaeTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // http://localhost:3000/tasks
  @Get()
  gatAllTasks(): Task[] {
    return this.taskService.gatAllTasks();
  }

  // http://localhost:3000/tasks/id
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.gatTaskById(id);
  }

  @Post()
  createTask(@Body() creaeTaskDto: CreaeTaskDto): Task {
    return this.taskService.createTask(creaeTaskDto);
  }
}
