import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-app',
  imports: [FormsModule],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css'
})
export class TodoApp {
  task = "";
  taskList:{id:number, task:string} [] = []

  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task = ""
  }

  deleteTask(taskID:number){
    this.taskList = this.taskList.filter((item) => item.id!=taskID)
  }
}
