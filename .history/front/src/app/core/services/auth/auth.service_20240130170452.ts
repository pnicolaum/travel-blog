import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticatedValue = false;

  setAuthenticated(value: boolean): void {
    this.isAuthenticatedValue = value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

}
