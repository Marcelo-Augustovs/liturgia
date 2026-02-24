import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../../shared/menu-principal/menu-principal.component';
import { MenuOptionComponent } from '../../shared/menu-option/menu-option.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuPrincipalComponent,MenuOptionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
