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
  code: number = 0;
  codeGenerated: number = 0;
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
        console.log(this.codeGenerated);
        console.log(this.mail);

        const data = {
          mail: this.mail,
          codeGenerated: this.codeGenerated,
        };

      }

    }
    else {
      console.log("Pon un correo con @");
      //message = "Pon un correo con @"
    }

  }

  generateCode() {
    return this.codeGenerated = Math.floor(10000 + Math.random() * 90000);
  };

  verifyCode(code: number) {
    if (this.code === this.codeGenerated) {
      return true;
    }
    return false;
  }


  postMail() {

    if (this.verifyCode(this.code)) {
      this.subscriptionService.post({ mail: this.mail })
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
