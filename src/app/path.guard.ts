import { inject } from '@angular/core';
import { CanActivateFn, Router, } from '@angular/router';
import { AuthorizeService } from './authorize.service';


export const pathGuard: CanActivateFn = (route, state) => {
  let _AuthorizeService = inject(AuthorizeService)
  let _Router = inject(Router)

  if (_AuthorizeService.isLogin.value == true) {

    return true
  }
  else {

    return false
  }
};
