import { Component } from '@angular/core';
import { NodemailerService } from '../../services/nodemailer/nodemailer.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name = "";
  mail = "";
  text = "";

  isModalOpen: boolean = false;
  mensaje = ""

  constructor(
    private nodemailerFormService: NodemailerService
  ) { }

  postMail() {

    const data = {
      name: this.name,
      mail: this.mail,
      text: this.text,
    };

    this.openModal();

    if (this.name && this.mail && this.text) {
      this.nodemailerFormService.postMail(data)
        .subscribe(
          response => {
            this.mensaje = "Mail enviado con extio"
          },
          error => {
            this.mensaje = "Ha ocurrido algun error, pruébelo más adelante";
            console.log(error);
          }
        );


    } else {

      this.mensaje = "Algunos campos están vacíos, por favor, rellene todos los campos."
    }

  };

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
