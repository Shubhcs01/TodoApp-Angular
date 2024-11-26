import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
import { ButtonComponent } from '../../../components/atoms/Button/button.component';
import { InputBoxComponent } from '../../../components/atoms/InputBox/input-box.component';
import { FormComponent } from '../../../components/organisms/form/form.component';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputBoxComponent, FormComponent],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onFormSubmit(formValues: { title: string, desc: string }) {
    console.log("Form submitted with:", formValues);

    const newTodo: Todo = {
      sno: 8,
      title: formValues.title,
      desc: formValues.desc,
      active: true
    };

    console.log(newTodo);

    this.addTodo.emit(newTodo);
  }

}
