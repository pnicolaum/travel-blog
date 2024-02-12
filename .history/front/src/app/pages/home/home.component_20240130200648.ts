import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // imageUrl: string = 'assets/hero.jpg';
  url = "http://localhost:3000/uploads/";
  imageName = "hero"
  extension = ".jpg";
  encodedImageName = encodeURIComponent(this.imageName);

  imageUrl = this.url + this.encodedImageName + this.extension;


}
