import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../../shared/components/menu-principal/menu-principal.component';
import { MenuOptionComponent } from '../../shared/components/menu-option/menu-option.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuPrincipalComponent,MenuOptionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

cardList = [
  { title: 'Guia dos Ritos',
    imageName: 'missal',
    description: 'Missa, Tempos Liturgicos e Solenidades',
    linkPage: '/ritos-complementares'},

  { title: 'Capela Musical',
    imageName: 'capela',
    description: 'Musicas, Hinos e Orientações',
    linkPage: '/ritos-complementares'},
  
  { title: 'Sacristia',
    imageName: 'sacristia',
    description: 'Orientações, Arrumação e Vestes liturgicas',
    linkPage: '/ritos-complementares'},

  { title: 'Ritos Complementares',
    imageName: 'ritos2',
    description: 'Batismo, Matrimonio, Bençãos, Etc... ',
    linkPage: '/ritos-complementares'},

  { title: 'Atos Devocionais',
    imageName: 'ritual-de-benção',
    description: 'descricao',
    linkPage: '/ritos-complementares'}
  ]
}
