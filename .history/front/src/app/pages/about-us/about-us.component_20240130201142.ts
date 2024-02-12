import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  url = "http://localhost:3000/uploads/";
  extension = ".jpg";

  imageName = "hero"
  encodedImageName = encodeURIComponent(this.imageName);
  imageUrl = this.url + this.encodedImageName + this.extension;
}
