import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];
  constructor() { }

  public load(){
    let data = localStorage.getItem("tasks");
    if(data != null){
      this.tasks = JSON.parse(data);
    }
  }

  public save(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public add(assignment:string, priority:string){
    this.tasks.push({
      assignment  : assignment,
      priority: priority
    });
    this.save();
  }

  public delete(index:number){
    this.tasks.splice(index,1);
    this.save();
  }
}
