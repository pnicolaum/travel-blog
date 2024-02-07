import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { SectionService } from '../../services/section/section.service';

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

  isModalOpen: boolean = false;
  mensaje = "";

  constructor(
    private sectionService: SectionService,
    private blogService: BlogService
  ) { }

  postSection() {

    this.openModal()

    if (this.title && this.keyword && this.description && this.structure && this.blogKeyword) {

      this.blogService.getBlogByKeyword(this.blogKeyword)
        .subscribe(
          response => {
            if (response.length > 0) {
              this.blogid = response[0].id;

              const data = {
                title: this.title,
                description: this.description.replace(/\n/g, '\\n'),
                blogid: this.blogid,
                keyword: this.keyword,
                structure: this.structure,
              };

              // post section
              this.sectionService.postSection(data)
                .subscribe(
                  response => {
                    this.data = response;

                    this.mensaje = "Seccion creada con exito";
                  },
                  error => {
                    console.log(error);
                  });
            } else {
              this.mensaje = "No se ha encontrado ningún blog con esta palabra clave"
            }
          },
          error => {
            console.log(error);
          });
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
