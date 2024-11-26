import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from './MyComponents/todos/todos.component'
import { HeaderComponent } from '../components/molecules/Header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = '{todo-app-variable}';

  //constructor() { } // Dependency injection
  // Using ngOnInit ensures that the logic runs after Angular has finished initializing the component and its bindings, which makes it a safer place for logic like this.
  // ngOnInit() { // lifecycle hooks
  //   setTimeout(() => {
  //     this.title = "changed";
  //   }, 4000);
  // }
}
