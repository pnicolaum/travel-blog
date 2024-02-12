import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription/subscription.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  mail = "";

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

}
