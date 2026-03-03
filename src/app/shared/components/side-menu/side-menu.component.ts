import { Component, EventEmitter, Input, Output } from '@angular/core';
import { sideMenu } from '../../models/side-menu.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() navList!: sideMenu[]

  @Output() contentSelected = new EventEmitter<sideMenu>();

  selectItem(item: sideMenu){
    console.log('Emitindo:', item);
    this.contentSelected.emit(item);
  }
}
