import { Component } from '@angular/core';
import { SectionCreationService } from '../../services/section-creation/section-creation.service';

@Component({
  selector: 'app-section-update',
  templateUrl: './section-update.component.html',
  styleUrls: ['./section-update.component.css']
})
export class SectionUpdateComponent {

  sectionKeyword = "";
  id = "";
  title = "";
  description = "";
  keyword = "";
  structure: number = 0;

  constructor(
    private sectionCreationService: SectionCreationService,
  ) { }

  getAllSections() {
    this.sectionCreationService.getAllSections()
      .subscribe(
        (response) => {
          //TO DO: Guardar en un array titulo y keyword de cada response

          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al obtener las sections:', error);
        }
      )
  };

  getSectionByKeyword() {
    this.sectionCreationService.getSectionByKeyword(this.sectionKeyword)
      .subscribe(
        (response) => {
          this.id = response[0].id;
          this.title = response[0].title;
          this.description = response[0].description;
          this.keyword = response[0].keyword
          this.structure = response[0].structure;
        }
      )
  };




  updateSection() {

  };



}