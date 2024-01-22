import { Component } from '@angular/core';
import { SectionCreationService } from '../../services/section-creation/section-creation.service';

@Component({
  selector: 'app-section-creation',
  templateUrl: './section-creation.component.html',
  styleUrls: ['./section-creation.component.css']
})
export class SectionCreationComponent {
  title = "";
  keyword = "";
  description = "";
  structure: number = 0;

  data: any;

  constructor(
    private sectionCreationService: SectionCreationService, // Reemplaza BlogService con el nombre de tu servicio
  ) {
  }



}
