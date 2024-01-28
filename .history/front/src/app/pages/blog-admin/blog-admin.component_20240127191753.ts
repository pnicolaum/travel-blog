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
          this.texto = messak.join('-');
          console.log(this.message);
          console.log(this.messagek);
        },
        (error) => {
          console.error('Error al obtener las blogs:', error);
        }
      )
  };
}
