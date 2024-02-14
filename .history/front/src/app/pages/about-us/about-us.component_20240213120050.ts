import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  url = "https://pnm.ltim.uib.es:/uploads/";
  extension = ".jpg";

  imageName = "about-us"
  encodedImageName = encodeURIComponent(this.imageName);
  imageUrl = this.url + this.encodedImageName + this.extension;
}
