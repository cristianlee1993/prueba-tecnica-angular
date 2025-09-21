import { CommonModule } from '@angular/common';
import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})

export class TaskFormComponent {
  taskTitle = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskService.addTasks(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
