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
  termsChecked = false;

  isModalOpen: boolean = false;
  mensaje = ""
  isModalOpen2: boolean = false;
  mensaje2 = ""

  constructor(
    private subscriptionService: SubscriptionService,
    private nodemailerService: NodemailerService

  ) { }

  // getMail() {
  //   this.subscriptionService.get(this.mail)
  //     .subscribe(
  //       data => {
  //         this.mail = data;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  verifyMail() {

    if (this.mail) {
      if (this.mail.indexOf("@") !== -1) {
        if (this.termsChecked) {
          this.subscriptionService.getMailByMail(this.mail)
            .subscribe(
              data => {
                if (data.length > 0) {
                  this.openModal2();
                  this.mensaje2 = "Correo ya suscrito";
                } else {
                  this.generateCode();

                  const data = {
                    mail: this.mail,
                    code: this.code,
                  };
                  this.openModal();

                  this.nodemailerService.postConfirmationMail(data)
                    .subscribe(
                      response => {
                      }, error => {
                        console.log(error);
                      });
                }
              }, error => {
                console.log(error);
              });
        } else {
          this.openModal2();
          this.mensaje2 = "Por favor acepte los terminos de privacidad"
        }
      } else {
        this.openModal2();
        this.mensaje2 = "Por favor indique un correo con @"
      }
    } else {
      this.openModal2();
      this.mensaje2 = "Por favor indique un correo"
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
      this.mensaje = "Código correcto, muchas gracias por suscribirte";

      this.subscriptionService.post(this.mail)
        .subscribe(
          data => {
          },
          error => {
            console.log(error);
          });
    } else {
      this.mensaje = "Código incorrecto, intentelo de nuevo"
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModal2() {
    this.isModalOpen2 = true;
  }

  closeModal2() {
    this.isModalOpen2 = false;
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }

}
