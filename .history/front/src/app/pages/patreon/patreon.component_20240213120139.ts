import { Component } from '@angular/core';

@Component({
  selector: 'app-patreon',
  templateUrl: './patreon.component.html',
  styleUrls: ['./patreon.component.css']
})
export class PatreonComponent {
  url = "https://pnm.ltim.uib.es/uploads/";
  extension = ".jpg";

  imageName = "patreon-foto"
  encodedImageName = encodeURIComponent(this.imageName);
  imageUrl = this.url + this.encodedImageName + this.extension;
}
