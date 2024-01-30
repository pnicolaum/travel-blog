import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false;

  setAuthenticated(value: boolean): void {
    this.isAuthenticated = value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
