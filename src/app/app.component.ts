import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputSectionComponent } from './components/input-section/input-section.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItem } from './models/todo-item';
import {v4} from 'uuid'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InputSectionComponent,
    TodosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoApp';
  todos: TodoItem[] = []

  constructor() {
    const todos = localStorage.getItem('todos') || "[]";
    this.todos = JSON.parse(todos)
  }
}
