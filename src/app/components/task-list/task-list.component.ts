import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskItemComponent, MatListModule, MatCardModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  onToggleComplete(id: number) {
    this.taskService.toggleTask(id);
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
