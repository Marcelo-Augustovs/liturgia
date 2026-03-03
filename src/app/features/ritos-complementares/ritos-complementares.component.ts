import { Component } from '@angular/core';
import { SideMenuComponent } from "../../shared/components/side-menu/side-menu.component";
import { sideMenu } from '../../shared/models/side-menu.model';
import { CommonModule } from '@angular/common';

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

  menuList: sideMenu[] = [
    { navButton: 'Batismo',
      refContent: 'batismo',
      navContent: [ 
        { menuTitle: 'Batismo Adulto',
        leftSubTitle: 'Organizar e Preparar',
        rightSubTitle: 'Rito',
        leftContent: [
          'Irmãos e irmãs...',
          'Deus nos acolhe...'
        ],
        rightContent: [
          'Amém.',
          'Graças a Deus.'
        ]
      }, 
      { menuTitle: 'Batismo crianças',
        leftSubTitle: 'Organizar e Preparar',
        rightSubTitle: 'Rito',
        leftContent: [
          'preparar a Lembraça do batismo',
          'verificar e orientar os padrinhos escolhidos',
          'separa uma vela',
          'ritual do batismo',
          '...'
        ],
        rightContent: [
          'Pode ser feito dentro da missa ou fora da missa',
          'depois da homilia, segue sé o rito'
        ]
      }

    ]
      
    },
    {
      navButton: 'Matrimonio',
      refContent: 'matrimonio',
      navContent: []
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

