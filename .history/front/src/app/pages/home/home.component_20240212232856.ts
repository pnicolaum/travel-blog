import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  url = "https://localhost:443/uploads/";
  extension = ".jpg";

  imageNameHero = "hero"
  encodedImageNameHero = encodeURIComponent(this.imageNameHero);
  imageUrlHero = this.url + this.encodedImageNameHero + this.extension;

  // imageNamePatreon = "patreon_"
  // encodedImageNamePateron = encodeURIComponent(this.imageNameHero);
  // imageUrlPatreon = this.url + this.encodedImageNamePateron + this.extension;

}
