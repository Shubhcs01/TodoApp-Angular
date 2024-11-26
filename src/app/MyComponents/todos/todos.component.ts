import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import {DisplayTodoComponent} from '../display-todo/display-todo.component'
import { NgFor } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [DisplayTodoComponent, NgFor, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(){
    this.todos = [
      {
        sno: 5,
        title: "title4",
        desc: "String",
        active: true,
      },
      {
        sno: 6,
        title: "title5",
        desc: "String",
        active: true,
      },
      {
        sno: 7,
        title: "title6",
        desc: "String",
        active: true,
      },
    ]
  }

  deleteTodo(todelete:Todo){
    console.log("parent delete todo triggered")
    this.todos = this.todos.filter((todo)=>todo.sno !== todelete.sno);
  }

  addTodo(newtodo: Todo){
    this.todos.push(newtodo);
  }


  ngOnInit(): void {
  }
}
