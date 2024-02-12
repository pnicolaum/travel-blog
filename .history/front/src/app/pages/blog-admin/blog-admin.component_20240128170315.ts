import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {

  texto = "";
  message: { title: string, keyword: string }[] = [];
  messagek: { keyword: string }[] = [];
  clickCount: number = 0;

  keywordBlog = "";
  textoSections = "";
  messageSections: { title: string, keyword: string }[] = [];
  messagekSections: { keyword: string }[] = [];
  clickCountSections: number = 0;

  constructor(
    private blogService: BlogService,
  ) { }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .subscribe(
        (response) => {
          this.message = [];

          for (let i = 0; i < response.length; i++) {
            const ky = response[i].keyword;
            const blog = {
              title: response[i].title,
              keyword: response[i].keyword
            };
            this.messagek.push(ky);
            this.message.push(blog);

          }
          this.clickCount++;

          if (this.clickCount <= 1) {
            this.texto = this.messagek.join(' - ');
          }
        },
        (error) => {
          console.error('Error al obtener las blogs:', error);
        }
      )
  };

  getAllSections() {

    if (this.keywordBlog) {

      this.blogService.getAllBlogs()
        .subscribe(
          (response) => {
            this.messageSections = [];

            for (let i = 0; i < response.length; i++) {
              const kySections = response[i].keyword;
              const section = {
                title: response[i].title,
                keyword: response[i].keyword
              };
              this.messagekSections.push(kySections);
              this.messageSections.push(section);

            }
            this.clickCountSections++;

            if (this.clickCountSections <= 1) {
              this.textoSections = this.messagekSections.join(' - ');
            }
          },
          (error) => {
            console.error('Error al obtener las blogs:', error);
          }
        )
    } else {
      this.textoSections = "Por favor, escribe una palabra clave"
    }


  };
}
