import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl: string = 'assets/hero.jpg';
  imageName = "hero.jpg"
  encodedImageName = encodeURIComponent(this.imageName);

}
