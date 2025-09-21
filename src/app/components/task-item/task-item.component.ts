import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-task-item',
  imports: [CommonModule, MatCheckboxModule, MatIconModule, MatListModule, MatButtonModule,MatCardModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  toggleCompleted() {
    this.toggleComplete.emit(this.task.id);
  }

  delete() {
    this.deleteTask.emit(this.task.id);
  }
}
