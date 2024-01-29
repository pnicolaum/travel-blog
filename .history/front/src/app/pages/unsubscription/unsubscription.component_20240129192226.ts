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

    if (this.mail) {
      this.subscriptionService.deleteMail(this.mail)
        .subscribe(
          (response) => {
            this.openModal();
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.openModal();
      this.mensaje = "Por favor indique un correo"
    }


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
