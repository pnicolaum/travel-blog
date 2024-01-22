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

    //TO DO: blog_id

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




  updateBlog() {

    // sacar el id dado keyword
    this.blogCreationService.getBlogByKeyword(this.keyword)
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
      keyword: this.keyword,
      continent: this.continent,
      country: this.country,
      description: this.description,
      days: this.days,
      date: this.formatedDate
    };

    //update
    this.blogCreationService.updateBlog(data)
      .subscribe(
        (response) => {
          console.log("Update del blog con exito");
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };



}
