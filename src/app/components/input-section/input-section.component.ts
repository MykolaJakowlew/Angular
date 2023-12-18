import { Component, Input } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { v4 } from 'uuid';

@Component({
  selector: 'app-input-section',
  standalone: true,
  imports: [],
  templateUrl: './input-section.component.html',
  styleUrl: './input-section.component.css'
})
export class InputSectionComponent {
  placeholders = {
    addItem: 'Add item...',
    search: 'Search'
  }

  @Input() todos: TodoItem[] =[]

  addTodoItem(text: string) {
    this.todos.push({
      id: v4(),
      text,
      date: new Date()
    })
    localStorage.setItem('todos', JSON.stringify( this.todos))
  }
}
