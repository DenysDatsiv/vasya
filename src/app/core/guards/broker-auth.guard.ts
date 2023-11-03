import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BrokerAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRole();
      if (userRole === 'broker') {
        return true;
      } else {
        this.router.navigate([`/${userRole}/main`]);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
