import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-menu-option',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent {

}
