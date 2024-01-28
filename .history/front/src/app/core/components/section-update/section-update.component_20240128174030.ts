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

  isModalOpen: boolean = false;
  mensaje = "";

  constructor(
    private sectionService: SectionService,
  ) { }

  // getAllSections() {
  //   this.sectionService.getAllSections()
  //     .subscribe(
  //       (response) => {
  //         //TO DO: Guardar en un array titulo y keyword de cada response

  //         const titles = response.map((section: { title: any; }) => section.title);
  //         const keywords = response.map((section: { keyword: any; }) => section.keyword);
  //         this.sectionTitlesAndKeywords = response.map((section: { title: any; keyword: any; }) => ({
  //           titulo: section.title,
  //           keyword: section.keyword
  //         }));
  //         console.log(this.sectionTitlesAndKeywords);
  //       },
  //       (error) => {
  //         console.error('Error al obtener las sections:', error);
  //       }
  //     )
  // };

  // getSectionByKeyword() {

  //   //TO DO: section_id

  //   this.sectionService.getSectionByKeyword(this.sectionKeyword)
  //     .subscribe(
  //       (response) => {
  //         this.id = response[0].id;
  //         this.title = response[0].title;
  //         this.description = response[0].description;
  //         this.keyword = response[0].keyword
  //         this.structure = response[0].structure;
  //       }
  //     )
  // };




  updateSection() {

    // sacar el id dado keyword
    this.sectionService.getSectionByKeyword(this.keyword)
      .subscribe(
        (response) => {
          this.id = response[0].id;
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

    const data = {
      id: this.id,
      title: this.title,
      description: this.description,
      keyword: this.keyword,
      structure: this.structure,
    };

    //update
    this.sectionService.updateSection(data)
      .subscribe(
        (response) => {
          console.log("Update del section con exito");
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
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
