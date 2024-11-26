import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
  type="button"
  (click)="onClick()"
  [ngClass]="classes"
  [type]="type" 
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {

  @Input()
  primary: Boolean = true;

  @Input()
  backgroundColor?: string;

  @Input()
  size?: string = "medium";

  @Input()
  label = 'Button';

  @Input()
  type: string = 'button';

  @Output()
  buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
