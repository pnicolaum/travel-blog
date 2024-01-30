import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // imageUrl: string = 'assets/hero.jpg';
  url = "http://localhost:3000/uploads/";
  extension = ".jpg";

  imageNameHero = "hero"
  encodedImageNameHero = encodeURIComponent(this.imageNameHero);
  imageUrlHero = this.url + this.encodedImageNameHero + this.extension;

  imageNamePatreon = "hero"
  encodedImageNamePateron = encodeURIComponent(this.imageNameHero);
  imageUrlPatreon = this.url + this.encodedImagePatreon + this.extension;

}
