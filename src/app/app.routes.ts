import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { pathGuard } from './path.guard';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    { path: "", redirectTo: '/Home', pathMatch: 'full' },
    { path: "Home", component: HomeComponent, canActivate: [pathGuard] },
    { path: "brands", component: BrandsComponent, canActivate: [pathGuard] },
    { path: "cart", component: CartsComponent, canActivate: [pathGuard] },
    { path: "categories", component: CategoriesComponent, canActivate: [pathGuard] },
    { path: "navbar", component: NavbarComponent },
    { path: "products", component: ProductsComponent, canActivate: [pathGuard] },
    { path: "register", component: RegisterComponent, canActivate: [pathGuard] },
    { path: "details/:pid", component: ProductdetailsComponent, canActivate: [pathGuard] },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "forgetpassword", component: ForgetpasswordComponent, canActivate: [pathGuard] },
    { path: "wishlist", component: WishlistComponent, canActivate: [pathGuard] },
    { path: "**", component: NotfoundComponent },
];
