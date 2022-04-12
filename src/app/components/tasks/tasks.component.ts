import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

public tasks:Task[]=[];

  constructor(private taskService:TasksService) { 
    taskService.load();
    this.tasks = taskService.tasks
  }

  ngOnInit(): void {
  }

  public addNewTask(assignment:HTMLInputElement, priority:HTMLSelectElement){
    if(assignment.value != ""){
      this.taskService.add(assignment.value, priority.value);
      assignment.value = '';
      priority.value = '';
      this.taskService.save();
    }
  }
}
