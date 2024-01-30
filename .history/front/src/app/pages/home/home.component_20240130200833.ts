import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // imageUrl: string = 'assets/hero.jpg';
  url = "http://localhost:3000/uploads/";
  imageNameHero = "hero"
  extension = ".jpg";
  encodedImageName = encodeURIComponent(this.imageNameHero);

  imageUrlHero = this.url + this.encodedImageName + this.extension;


}
