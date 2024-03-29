import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription/subscription.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  mail = "";
  code: number = 0;
  codeGenerated: number = 0;
  mailExistis: boolean = false;

  constructor(
    private subscriptionService: SubscriptionService

  ) { }

  getMail() {
    this.subscriptionService.get(this.mail)
      .subscribe(
        data => {
          this.mail = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  postMail() {

    // verifica que tenga @
    if (this.mail.indexOf("@") !== -1) {

      this.subscriptionService.getMailByMail(this.mail)
        .subscribe(
          data => {
            if (data.rows > 0) {
              this.mailExistis = true
            }
          },
          error => {
            console.log(error);
          });

      if
      this.generateCode();




      this.subscriptionService.post({ mail: this.mail })
        .subscribe(
          data => {
            this.mail = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    else {
      console.log("Pon un correo con @");

    }

  }

  generateCode() {
    return this.codeGenerated = Math.floor(10000 + Math.random() * 90000);
  };


  checkMail(

  ) {

  }


}
