import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandsComponent } from "./brands/brands.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecom';
}
