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


  deleteSection() {

    this.openModal();

    if (this.keyword) {
      this.sectionService.getSectionByKeyword(this.keyword)
        .subscribe(
          (response) => {
            if (response.length > 0) {
              this.id = response[0].id;

              const data = {
                id: this.id,
                keyword: this.keyword,
              };

              this.sectionService.deleteSection(data)
                .subscribe(
                  () => {
                    this.mensaje = "Blog eliminado con exito"
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            } else {
              this.mensaje = "No existe ninguna seccion con esta palabra clave.";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.mensaje = "Por favor, escriba la palabra clave"
    }

  };

  openModal() {
    this.isModalOpen = true;
  };

  closeModal() {
    this.isModalOpen = false;
  };

  preventClose(event: Event) {
    event.stopPropagation();
  };

}
