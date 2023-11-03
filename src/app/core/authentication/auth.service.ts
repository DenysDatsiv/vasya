import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInUser = false;
  private userRole: string | null = null;

  getUserRole(): string | null {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInUser;
  }
}
