import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit {


  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute) {
  }

  product!: Products;
  productId: any = this._ActivatedRoute.snapshot.params['pid']
  ngOnInit(): void {
    this._ProductsService.getSpecificProduct(this.productId).subscribe({
      next: (response) => {

        this.product = response.data
        console.log(response.data)
      },
      error: (err) => {

        console.log(err)
      }
    }

    )
  }

}
