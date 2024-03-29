import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
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
  blogid = "";

  blogKeyword = "";
  id = "";
  data: any;

  constructor(
    private sectionCreationService: SectionCreationService,
    private blogService: BlogService
  ) { }

  postSection() {

    if (this.title && this.keyword && this.description && this.structure) {

      // sacar id del blog a partir de su keyword
      this.blogService.getBlogByKeyword(this.blogKeyword)
        .subscribe(
          response => {
            this.blogid = response[0].id;

            const data = {
              title: this.title,
              description: this.description,
              blogid: this.blogid,
              keyword: this.keyword,
              structure: this.structure,
            };

            // post section
            this.sectionCreationService.postSection(data)
              .subscribe(
                response => {
                  this.data = response;
                  console.log(response);
                },
                error => {
                  console.log(error);
                });

          },
          error => {
            console.log(error);
          });
    } else {
      console.log('Algunos campos son nulos o 0. No se puede enviar la sección.');
    }

  }

}
