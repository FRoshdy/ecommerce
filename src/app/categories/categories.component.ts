import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Categories, Datum } from '../categories';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  constructor(private _CategoriesService: CategoriesService) {
  }

  allcategories!: Datum[]
  ngOnInit(): void {
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

}
