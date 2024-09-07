import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showlink: boolean = false
  constructor(private _AuthorizeService: AuthorizeService, private _Router: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._AuthorizeService.isLogin.subscribe((value) => {
      this.showlink = value
    })



  }

  logout() {

    this._Router.navigate(['/login']);
    this.showlink = false;
    localStorage.removeItem('token')

  }
}


