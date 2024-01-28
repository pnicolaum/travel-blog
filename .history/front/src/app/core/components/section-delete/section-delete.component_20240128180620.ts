import { Component } from '@angular/core';
import { SectionService } from '../../services/section/section.service';


@Component({
  selector: 'app-section-delete',
  templateUrl: './section-delete.component.html',
  styleUrls: ['./section-delete.component.css']
})

export class SectionDeleteComponent {

  keyword = "";
  id = "";

  constructor(
    private sectionService: SectionService,
  ) { }


  isModalOpen: boolean = false;
  mensaje = "";

  getAllSections() {
    this.sectionService.getAllSections()
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

  deleteSection() {

    // sacar el id dado keyword
    this.sectionService.getSectionByKeyword(this.keyword)
      .subscribe(
        (response) => {
          this.id = response[0].id;

          const data = {
            id: this.id,
            keyword: this.keyword,
          };

          // delete
          this.sectionService.deleteSection(data)
            .subscribe(
              () => {
                console.log("Section eliminado con exito");
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log("No existe section con esta keyword");
          console.log(error);
        }
      );

  }



}
