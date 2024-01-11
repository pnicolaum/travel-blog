import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription/subscription.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  mail = "";

  constructor(private subscriptionService: SubscriptionService) { }

  getMail() {
    this.subscriptionService.get(this.mail);
    (data) => {
      this.mail = data;
      console.log(data);
    },
      (error) => {
        console.log(error);
      };
  };

}
