import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
  constructor(private _CartService: CartService) {
  }

  // allCart!: cartProduct[]
  ngOnInit(): void {
    this._CartService.getCart(localStorage.getItem('token')).subscribe({
      next: (response) => {

        //  this.allCart = response.data
        console.log(response.data)
      },
      error: (err) => {

        console.log(err)
      }
    }

    )
  }

}
