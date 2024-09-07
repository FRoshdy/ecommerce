import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Datum } from '../categories';

@Component({
  selector: 'app-slidder',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slidder.component.html',
  styleUrl: './slidder.component.scss'
})
export class SlidderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  @Input() categories!: Datum[]
}
