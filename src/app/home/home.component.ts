import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { LoaderComponent } from "../loader/loader.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../categories.service';
import { Datum } from '../categories';
import { SlidderComponent } from "../slidder/slidder.component";
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent, CarouselModule, SlidderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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

  constructor(private _ProductsService: ProductsService, private _CategoriesService: CategoriesService, private _CartService:CartService) {
  }

  allproducts!: Products[]
  allcategories!: Datum[]
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {

        this.allproducts = response.data
        console.log(response.data)
      },
      error: (err) => {

        console.log(err)
      }
    }

    )
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {

        this.allcategories = response.data
        console.log(response.data)
      },
      error: (err) => {

        console.log(err)
      }
    }

    )
  }

   addTocart(id:string){
this._CartService.addToCart(id,localStorage.getItem('token'))
  }
}




