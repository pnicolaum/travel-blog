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
          console.error('Error al obtener las blogs:', error);
        }
      )
  };

  getSectionByKeyword() {

  };




  updateSection() {

  };



}
