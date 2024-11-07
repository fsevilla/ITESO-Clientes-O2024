import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.isLoggedIn();
  console.log('Route: ', route);
  console.log('State: ', state);
  if (isAuth) {
    return true; // next()
  } else {
    router.navigateByUrl('/signup');
    return false;
  }
};
