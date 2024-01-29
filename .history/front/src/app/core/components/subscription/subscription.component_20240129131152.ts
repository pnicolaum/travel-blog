import { Component } from '@angular/core';
import { NodemailerService } from '../../services/nodemailer/nodemailer.service';
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

  isModalOpen: boolean = false;
  mensaje = ""
  isModalOpen2: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private nodemailerFormService: NodemailerService

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
    if (this.mail) {

      if (this.mail.indexOf("@") !== -1) {
        this.subscriptionService.getMailByMail(this.mail)
          .subscribe(
            data => {
              if (data.length > 0) {
                this.mailExists = true
                //message = "Correo ya suscrito"
                console.log(this.mailExists);
                console.log("Correo ya suscrito");
              } else {
                if (!this.mailExists) {
                  this.generateCode();
                  console.log(this.code);
                  console.log(this.mail);

                  const data = {
                    mail: this.mail,
                    code: this.code,
                  };

                  this.nodemailerFormService.postConfirmationMail(data)
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
            },
            error => {
              console.log(error);
            });



      }
      else {
        console.log("Pon un correo con @");
        //message = "Pon un correo con @"
      }
    } else {
      this.openModal2();
      this.mensaje = "Por favor indique un correo";
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

    if (this.verifyCode(this.codeInput)) {
      console.log("Codigo correcto");

      this.subscriptionService.post(this.mail)
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          });
    } else {
      console.log("Codigo incorrecto");
    }
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

  openModal2() {
    this.isModalOpen = true;
  }

  closeModal2() {
    this.isModalOpen = false;
  }

  preventClose2(event: Event) {
    event.stopPropagation();
  }

}
