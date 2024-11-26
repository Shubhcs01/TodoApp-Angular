import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngStyle
import { ButtonComponent } from '../../atoms/Button/button.component';
import { Todo } from '../../../app/Todo';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `<div [id]="id" [ngStyle]="getCardStyles()" class="storybook-card">
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <storybook-button 
     backgroundColor="{{buttonBgColor}}" 
     size="medium" label="Delete"
     [primary]="primary"
     (buttonClick)="cardBtnClicked()"
    >
    </storybook-button>
</div>`,
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  item!: Todo;

  @Input() 
  id: string = `card-${Math.random().toString(36).substr(2, 9)}`;

  @Input()
  title: String = "title";

  @Input()
  description: string = 'description';

  @Input()
  buttonBgColor: String = "#DC3545";

  @Input()
  cardBgColor: String = "#fff";

  @Input()
  cardBoxShadow: Boolean = false;

  @Input()
  cardBorderColor: String = "#DC3545";

  @Input() customStyles: { [key: string]: string } = {};

  @Input()
  primary: Boolean = true;

  @Output() itemClicked: EventEmitter<Todo> = new EventEmitter();

  cardBtnClicked() {
    console.log(this.item.title);
    this.itemClicked.emit(this.item);
  }

  getCardStyles() {
    return {
      'border-color': this.cardBorderColor,
      'box-shadow': this.cardBoxShadow ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
      'background-color': this.cardBgColor,
    };
  }

}
