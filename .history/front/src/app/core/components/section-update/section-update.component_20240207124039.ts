import { Component } from '@angular/core';
import { SectionService } from '../../services/section/section.service';

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
  sectionTitlesAndKeywords: any[] = [];
  sectionCheck = true;

  isModalOpen: boolean = false;
  mensaje = "";

  constructor(
    private sectionService: SectionService,
  ) { }


  getSectionByKeyword() {

    if (this.sectionKeyword) {
      this.sectionService.getSectionByKeyword(this.sectionKeyword)
        .subscribe(
          (response) => {
            if (response.length > 0) {
              this.id = response[0].id;
              this.title = response[0].title;
              this.description = response[0].description;
              this.keyword = response[0].keyword
              this.structure = response[0].structure;
              this.sectionCheck = true;
            } else {
              this.openModal();
              this.mensaje = "No se ha encontrado ninguna seccion con esta palabra clave"
            }

          },
          (error) => {
            console.log(error);
          });
    } else {
      this.openModal();

      this.mensaje = "Por favor, escriba la palabra clave"
    }


  };




  updateSection() {

    this.openModal();

    if (this.title && this.description && this.structure) {
      // sacar el id dado keyword
      this.sectionService.getSectionByKeyword(this.keyword)
        .subscribe(
          (response) => {
            this.id = response[0].id;
          },
          (error) => {
            console.log(error);
          }
        );

      const data = {
        id: this.id,
        title: this.title,
        description: this.description.replace(/\n/g, '\\n'),
        keyword: this.keyword,
        structure: this.structure,
      };

      //update
      this.sectionService.updateSection(data)
        .subscribe(
          (response) => {
            this.mensaje = response;
          },
          (error) => {
            console.log(error);
            this.mensaje = error;
          }
        );
    } else {
      this.mensaje = "Algunos campos son nulos, por favor rellene todos los campos";
    }
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }


}
