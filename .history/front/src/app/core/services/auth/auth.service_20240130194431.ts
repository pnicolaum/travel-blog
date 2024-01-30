import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticatedKey = 'isAuthenticated';

  setAuthenticated(value: boolean): void {
    localStorage.setItem(this.isAuthenticatedKey, value.toString());
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.isAuthenticatedKey) === 'true';
  }


  logout(): void {
    // Limpiar la información de autenticación al hacer logout
    localStorage.removeItem(this.isAuthenticatedKey);
  }

}
