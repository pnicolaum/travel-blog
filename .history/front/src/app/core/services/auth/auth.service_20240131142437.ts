import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticatedKey = 'isAuthenticated';
  // private sessionTimeout = 60 * 60 * 1000;  // 1 hora en milisegundos
  private sessionTimeout = 10 * 1000;  // 10 segundos en milisegundos
  private sessionTimer: any;

  constructor(private router: Router) { }

  setAuthenticated(value: boolean): void {
    localStorage.setItem(this.isAuthenticatedKey, value.toString());
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.isAuthenticatedKey) === 'true';
  }

  logout(): void {
    localStorage.removeItem(this.isAuthenticatedKey);
  }

  startSessionTimer(): void {
    this.clearSessionTimer();

    this.sessionTimer = setTimeout(() => {
      this.logout();
      console.log("Sesión expirada");
    }, this.sessionTimeout);

    console.log("Temporizador iniciado");
  }

  clearSessionTimer(): void {
    if (this.sessionTimer) {
      clearTimeout(this.sessionTimer);
    }
  }

}
