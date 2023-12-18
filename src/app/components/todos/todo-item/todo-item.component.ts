import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  faPen = faPen
  faTrash= faTrash

  @Input() text: string = 'Empty text'
  @Input() date: Date = new Date()
}
