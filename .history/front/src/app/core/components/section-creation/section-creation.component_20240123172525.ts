import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';
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
    private blogCreationService: BlogCreationService
  ) { }

  postSection() {

    if (this.title && this.keyword && this.description && this.structure) {

      // sacar id del blog a partir de su keyword
      this.blogCreationService.getBlogByKeyword(this.blogKeyword)
        .subscribe(
          response => {
            this.blogid = response[0].id;
            console.log(this.blogKeyword);
            console.log(response[0].id);
            console.log(this.blogid);
          },
          error => {
            console.log(error);
          });

      const data = {
        title: this.title,
        keyword: this.keyword,
        description: this.description,
        blogid: this.blogid,
        structure: this.structure,
      };

      console.log(data.blogid);

      this.sectionCreationService.postSection(data)
        .subscribe(
          response => {
            this.data = response;
            console.log(response);
          },
          error => {
            console.log(error);
          });
    } else {
      console.log('Algunos campos son nulos o 0. No se puede enviar la sección.');
    }

  }

}
