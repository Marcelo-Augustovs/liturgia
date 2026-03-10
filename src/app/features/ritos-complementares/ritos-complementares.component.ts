import { Component } from '@angular/core';
import { SideMenuComponent } from "../../shared/components/side-menu/side-menu.component";
import { sideMenu } from '../../shared/models/side-menu.model';
import { CommonModule } from '@angular/common';
import { BATISMO_DATA } from '../../shared/data/batismo.data';
import { BATISMO_CONTENT } from '../../shared/data/batismo.content';
import { MATRIMONIO_CONTENT } from '../../shared/data/matrimonio.content';

@Component({
  selector: 'app-ritos-complementares',
  imports: [SideMenuComponent, CommonModule],
  standalone: true,
  templateUrl: './ritos-complementares.component.html',
  styleUrls: ['./ritos-complementares.component.scss','../../shared/layouts/menu-guia.scss']
})
export class RitosComplementaresComponent {
 
  selectedItem!: sideMenu;
  selectedContentIndex = 0;
  selectedRiteIndex: number = 0;

  menuList: sideMenu[] = [
    { navButton: 'Batismo',
      refContent: 'batismo',
      navContent: BATISMO_CONTENT
      
    },
    {
      navButton: 'Matrimonio',
      refContent: 'matrimonio',
      navContent: MATRIMONIO_CONTENT
    },
    {
      navButton: 'Comunhão fora da missa',
      refContent: 'Comunhão fora da missa',
      navContent: []
    },
     {
      navButton: 'Bençãos de Pessoas',
      refContent: 'Comunhão fora da missa',
      navContent: []
    },
     {
      navButton: 'Bençãos de edificios',
      refContent: 'Comunhão fora da missa',
      navContent: []
    },
     {
      navButton: 'Bençãos de lugares e objetos destinados a igreja',
      refContent: 'Comunhão fora da missa',
      navContent: []
    },
     {
      navButton: 'Bençãos de objetos',
      refContent: 'Comunhão fora da missa',
      navContent: []
    },
     {
      navButton: 'Bençãos para diversos fins',
      refContent: 'Comunhão fora da missa',
      navContent: []
    }
  ];

  onContentSelected(item: sideMenu){
    console.log('Recebi no pai:', item);
    this.selectedItem = item;
    this.selectedContentIndex = 0; 
  }
}

