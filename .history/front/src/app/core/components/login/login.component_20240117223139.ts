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

  constructor(private LoginService: LoginService) { }


  postLogin() {

    this.LoginService.post({
      username: this.username,
      name: this.name,
      surname: this.surname,
      mail: this.mail,
      password: this.password,
    })
      .subscribe(
        data => {
          this.mail = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
