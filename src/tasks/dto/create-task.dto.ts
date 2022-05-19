import { IsNotEmpty } from 'class-validator';

export class CreaeTaskDto {
  // we use the parameters in Create task handler in the task controller
  title: string;
  description: string;
}
