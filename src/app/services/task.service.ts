import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task{
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[]=[];
  private tasks$ = new BehaviorSubject<Task[]>(this.tasks);

  getTasks(){
    return this.tasks$.asObservable();
  }

  // Adjuntar tareas
  addTasks(title:string) {
    const newTask: Task={
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.unshift(newTask);
    this.tasks$.next(this.tasks);
  }

  //Alternar estados de las tareas, (completada / no completada)
  toggleTask(id: number){
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasks$.next(this.tasks);
      
    }
  }

  //Eliminar tareas
  deleteTask(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.tasks$.next(this.tasks);
  }


}
