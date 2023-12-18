import { Component, Input } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from '../../models/todo-item';
import * as uuid from 'uuid'

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  @Input() todos: TodoItem[] = []

}
