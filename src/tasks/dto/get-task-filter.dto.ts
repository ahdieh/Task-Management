import { TaskStatus } from '../task.model';

export class GetTasksFliterDto {
  status?: TaskStatus;
  search?: string;
}
