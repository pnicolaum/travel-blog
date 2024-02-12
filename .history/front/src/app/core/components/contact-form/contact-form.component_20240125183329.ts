import { Component } from '@angular/core';
import { ContactFormService } from '../../services/contact-form/contact-form.service';

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
    private contactFormService: ContactFormService
  ) { }

  postMail() {

    if (this.name && this.mail && this.text) {

    } else {
      console.log('Algunos campos son nulos o 0. No se puede correo.');
    }

  }

}
