import { Component } from '@angular/core';

@Component({
  selector: 'app-section-creation',
  templateUrl: './section-creation.component.html',
  styleUrls: ['./section-creation.component.css']
})
export class SectionCreationComponent {
  title = "";
  keyword = "";
  text = "";
  structure: number = 0;
}
