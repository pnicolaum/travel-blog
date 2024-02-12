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


  getSectionByKeyword() {

    if (this.sectionKeyword) {
      this.sectionService.getSectionByKeyword(this.sectionKeyword)
        .subscribe(
          (response) => {
            this.id = response[0].id;
            this.title = response[0].title;
            this.description = response[0].description;
            this.keyword = response[0].keyword
            this.structure = response[0].structure;
          },
          (error) => {
            console.log(error);
          });
    }


  };




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
