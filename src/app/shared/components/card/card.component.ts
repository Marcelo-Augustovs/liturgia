import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input({required:true}) imageCardName!: string
  @Input({required:true}) title!: string
  @Input({required:true}) description!: string
  @Input({required:true}) linkPage!: string 

  get imagePath(): string {
    return `/images/${this.imageCardName}.webp`
  }
}
