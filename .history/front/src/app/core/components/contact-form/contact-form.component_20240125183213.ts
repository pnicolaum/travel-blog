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

  }

}
