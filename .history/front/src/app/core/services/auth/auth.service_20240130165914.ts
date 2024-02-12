import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userData: any;

  setUserData(userData: any): void {
    this.userData = userData;
  }

  getUserData(): any {
    return this.userData;
  }

  isAuthenticated(): boolean {
    // Verifica si hay información de usuario almacenada
    return !!this.userData;
  }
}
