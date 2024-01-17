import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  name = "";
  surname = "";
  mail = "";
  password = "";
  passwrod2 = "";
  masterPassword = "";
  data: any;

  constructor(private LoginService: LoginService) { }


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

    this.LoginService.post(data)
      .subscribe(
        response => {
          this.data = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });



  }







}
