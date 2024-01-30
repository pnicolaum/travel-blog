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
    this.openModal();

    if (this.password === this.passwrod2) {
      if (this.username && this.name && this.name && this.surname && this.mail && this.password && this.passwrod2 && this.masterPassword) {
        if (this.mail.indexOf("@") !== -1) {
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
                this.mensaje = response;
              },
              error => {
                this.mensaje = "Ha habido algun error";
                console.log(error);
              });
        } else {
          this.mensaje = "Por favor indique un correo con @";
        }
      } else {
        this.mensaje = "Por favor, rellene todos los campos";
      }
    } else {
      this.mensaje = "Las contraseñas no coinciden";
    }

  };

  postCredentials() {
    this.openModal();

    const data = {
      username: this.usernameCredential,
      password: this.passwordCredential
    };
    console.log(data);

    this.loginService.postCredentials(data)
      .subscribe(
        response => {
          this.authService.setAuthenticated(true);
          this.data = response;
          this.router.navigate(['/']);
          this.mensaje = response;
          console.log(response);
        },
        error => {
          this.mensaje = "Ha habido algun error";
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
