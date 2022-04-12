import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() public task:Task = {assignment: "", priority: ""};
  @Input() public index:number = 0;
  
  constructor(private taskService:TasksService) { 
  }

  ngOnInit(): void {
  }

  public deleteTask(){
    this.taskService.delete(this.index);
  }

}
