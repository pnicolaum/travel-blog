import { Component } from '@angular/core';
import { ContactFormService } from '../../services/contact-form/contact-form.service';
import { SubscriptionService } from '../../services/subscription/subscription.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  mail = "";
  codeInput: number = 0;
  code: number = 0;
  mailExists: boolean = false;

  constructor(
    private subscriptionService: SubscriptionService,
    private contactFormService: ContactFormService

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

  verifyMail() {

    // verifica que tenga @
    if (this.mail.indexOf("@") !== -1) {


      this.subscriptionService.getMailByMail(this.mail)
        .subscribe(
          data => {
            if (data.length > 0) {
              this.mailExists = true
              //message = "Correo ya suscrito"
              console.log("Correo ya suscrito");
            }
          },
          error => {
            console.log(error);
          });

      if (!this.mailExists) {
        this.generateCode();
        console.log(this.code);
        console.log(this.mail);

        const data = {
          mail: this.mail,
          code: this.code,
        };

        this.contactFormService.postConfirmationMail(data)
          .subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );

      }

    }
    else {
      console.log("Pon un correo con @");
      //message = "Pon un correo con @"
    }

  }

  generateCode() {
    return this.code = Math.floor(10000 + Math.random() * 90000);
  };

  verifyCode(codeInput: number) {
    if (this.codeInput === this.code) {
      return true;
    }
    return false;
  }


  postMail() {
    console.log("---");
    console.log(this.codeInput);
    console.log(this.code);
    if (this.verifyCode(this.codeInput)) {
      console.log("Codigo correcto");

      this.subscriptionService.post(this.mail)
        .subscribe(
          data => {
            this.mail = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    } else {
      console.log("Codigo incorrecto");
    }
  }


}
