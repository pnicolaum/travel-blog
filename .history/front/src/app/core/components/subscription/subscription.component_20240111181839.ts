import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  mail = "";

  // constructor(private subscriptionService: SubscriptionService) { }

  getMail() {
    this.subscriptionService.get(this.mail)
  }

}
