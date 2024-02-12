import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usernameCredential = "";
  passwordCredential = "";

  username = "";
  name = "";
  surname = "";
  mail = "";
  password = "";
  passwrod2 = "";
  masterPassword = "";
  data: any;

  isModalOpen: boolean = false;
  mensaje = "";

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }


  postLogin() {
    if (this.masterPassword !== "hello") {
      console.log("Contraseña incorrecta");
      return;
    }

    if (this.password !== this.passwrod2) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    const data = {
      username: this.username,
      name: this.name,
      surname: this.surname,
      mail: this.mail,
      password: this.password,
      masterPassword: this.masterPassword
    };

    this.loginService.postRegistration(data)
      .subscribe(
        response => {
          this.data = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  postCredentials() {
    const data = {
      username: this.usernameCredential,
      password: this.passwordCredential
    };

    this.loginService.postCredentials(data)
      .subscribe(
        response => {
          // recibir sesion
          this.authService.setAuthenticated(true);
          this.data = response;
          this.router.navigate(['/']);
          console.log(response);
        },
        error => {
          console.log(error);
        });

  }

  logOut() {
    this.authService.logout();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }



}