import { Component } from '@angular/core';
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

  constructor(
    private loginService: LoginService,
    private authService: AuthService
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
      password: this.password
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


  // login() {
  //   this.LoginService.login(this.username, this.password).subscribe(
  //     response => {
  //       // Almacena el token en el almacenamiento local o en una cookie
  //       localStorage.setItem('token', response.token);

  //       // Redirige a una página segura o realiza otras acciones necesarias
  //       console.log('Inicio de sesión exitoso');
  //     },
  //     error => {
  //       console.error('Error de inicio de sesión:', error);
  //     }
  //   );
  // }



}
