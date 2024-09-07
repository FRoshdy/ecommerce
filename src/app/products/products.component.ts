import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


  constructor(private _ProductsService: ProductsService) {
  }

  allproducts!: Products[]
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
  }

}

