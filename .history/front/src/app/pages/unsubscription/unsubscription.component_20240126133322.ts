import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/core/services/subscription/subscription.service';


@Component({
  selector: 'app-unsubscription',
  templateUrl: './unsubscription.component.html',
  styleUrls: ['./unsubscription.component.css']
})

export class UnsubscriptionComponent {
  mail = "";

  constructor(
    private subscriptionService: SubscriptionService
  ) { }

  deleteMail() {
    // delete
    this.subscriptionService.deleteMail(this.mail)
      .subscribe(
        () => {
          console.log("Mail eliminado con exito");
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
