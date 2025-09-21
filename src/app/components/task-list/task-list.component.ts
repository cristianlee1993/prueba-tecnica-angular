import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'completed', 'actions'];
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}
  dataSource = new MatTableDataSource<Task>();

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
    this.tasks$.subscribe((tasks) => {
      this.dataSource.data = tasks;
    });
  }

  onToggleComplete(id: number) {
    this.taskService.toggleTask(id);
  }

  onDeleteTask(id: number) {
    const task = this.dataSource.data.find((t) => t.id === id);
    if (task && task.completed) {
      this.taskService.deleteTask(id);
    } else {
      console.warn('No se puede eliminar una tarea no completada');
    }
  }
}
