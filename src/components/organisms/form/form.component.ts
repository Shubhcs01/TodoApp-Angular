import { Component, EventEmitter, getNgModuleById, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/Button/button.component';
import { InputBoxComponent } from '../../atoms/InputBox/input-box.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputBoxComponent, FormComponent],
  template: `
  <form class="text-center" (ngSubmit)="onSubmit()">

   <app-input-box label="Title" placeholder="Enter a title" [value]="title" [required]="true"
     [errorMessage]="'Title is required!'" (valueChange)="title = $event">
   </app-input-box>

   <app-input-box label="Description" placeholder="Enter a description" [value]="desc" [required]="true"
     [errorMessage]="'Description is required!'" (valueChange)="desc = $event">
   </app-input-box>
  
   <storybook-button type="submit" size="medium" label="Add Todo" [primary]="true"></storybook-button>

  </form>
`,
  styleUrl: './form.component.css'
})
export class FormComponent {

  title!:string;
  desc!:string;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  

  onSubmit() {
    console.log("Form submitted with title: ", this.title, " and description: ", this.desc);

    this.submitEvent.emit({
      title: this.title,
      desc: this.desc
    });

    this.title = '';
    this.desc = '';
  }
}