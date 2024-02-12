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
}
