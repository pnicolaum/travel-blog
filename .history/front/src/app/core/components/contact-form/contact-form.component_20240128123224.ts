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

  constructor(
    private nodemailerFormService: NodemailerService
  ) { }

  postMail() {

    const data = {
      name: this.name,
      mail: this.mail,
      text: this.text,
    };

    if (this.name && this.mail && this.text) {
      this.nodemailerFormService.postMail(data)
        .subscribe(
          response => {
            // this.data = response;
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );


    } else {
      console.log('Algunos campos están vacíos, por favor, rellene todos los campos.');
    }

  }

}
