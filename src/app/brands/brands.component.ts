import { Component } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Datum } from '../brands';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  constructor(private _BrandsService: BrandsService) {
  }

  allBrands!: Datum[]
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (response) => {

        this.allBrands = response.data
        console.log(response.data)
      },
      error: (err) => {

        console.log(err)
      }
    }

    )
  }

}
