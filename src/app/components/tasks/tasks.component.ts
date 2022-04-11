import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

public tasks:Task[]=[];

  constructor() { 
    let data = localStorage.getItem("tasks");
    if(data != null){
      this.tasks = JSON.parse(data);
    }
  }

  ngOnInit(): void {
  }

  private save(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public addNewTask(assignment:HTMLInputElement, priority:HTMLSelectElement){
    if(assignment.value != ""){
      this.tasks.push({
        assignment: assignment.value,
        priority: priority.value
      });
      assignment.value = '';
      priority.value = '';
      this.save();
    }
  }

  public deleteTask(i:number){
    this.tasks.splice(i,1);
    this.save();
  }




}
