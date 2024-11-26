import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
   <label *ngIf="label" [for]="id">{{ label }}</label>
  <div class="storybook-input">
      <input
        [id]="id"
        [type]="type"
        [value]="value || ''"
        [placeholder]="placeholder"
        [required]="required"
        [disabled]="disabled"
        (input)="onInput($event)"
        [ngClass]="{'invalid': isInvalid}"
        class="storybook-input"
      />
      <p *ngIf="errorMessage && isInvalid" class="error-message">{{ errorMessage }}</p>
    </div>`,
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {

  @Input() 
  id: string = `input-${Math.random().toString(36).substr(2, 9)}`;

  @Input() 
  label?: string;

  @Input() 
  type: string = 'text';

  @Input() 
  placeholder: string = '';

  @Input() 
  value: string = '';
  
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() errorMessage: string = 'This field is required.';

  @Output() valueChange = new EventEmitter<string>();

  isInvalid: boolean = false;

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.isInvalid = this.required && !this.value.trim();
    this.valueChange.emit(this.value);
  }
}
