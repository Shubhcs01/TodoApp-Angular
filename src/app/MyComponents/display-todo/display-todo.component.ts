import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CardComponent } from '../../../components/molecules/Card/card.component';

@Component({
  selector: 'app-display-todo',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './display-todo.component.html',
  styleUrl: './display-todo.component.css'
})
export class DisplayTodoComponent {

  @Input() todo!:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  handleClick(todo:Todo){
    console.log('delete clicked');
    this.todoDelete.emit(todo);
  }

  constructor(){}

}
