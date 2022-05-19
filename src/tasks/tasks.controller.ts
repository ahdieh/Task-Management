import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreaeTaskDto } from './dto/create-task.dto';
import { GetTasksFliterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // http://localhost:3000/tasks
  @Get()
  gatTasks(@Query() filterDto: GetTasksFliterDto): Task[] {
    // if there is any filters defined, call taskSevics.getTasksWithFilters.
    // Otherwise, get all tasks
    if (Object.keys(filterDto).length) {
      return this.taskService.getTasksWithFilters(filterDto);
    } else {
      return this.taskService.getAllTasks();
    }
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

  @Delete('/:id')
  deleteTask(@Param() id: string): void {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaqskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskService.updateTaskStatus(id, status);
  }
}
