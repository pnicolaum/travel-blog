import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/core/services/subscription/subscription.service';


@Component({
  selector: 'app-unsubscription',
  templateUrl: './unsubscription.component.html',
  styleUrls: ['./unsubscription.component.css']
})

export class UnsubscriptionComponent {
  mail = "";

  isModalOpen: boolean = false;
  mensaje = "";

  constructor(
    private subscriptionService: SubscriptionService
  ) { }

  deleteMail() {
    // delete
    this.subscriptionService.deleteMail(this.mail)
      .subscribe(
        (response) => {

          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };


  openModal() {
    this.isModalOpen = true;
  };

  closeModal() {
    this.isModalOpen = false;
  };

  preventClose(event: Event) {
    event.stopPropagation();
  };
}
