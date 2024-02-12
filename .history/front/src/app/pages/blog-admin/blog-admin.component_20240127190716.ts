import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {


  message: { title: string, keyword: string }[] = [];

  constructor(
    private blogService: BlogService,
  ) { }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .subscribe(
        (response) => {

          this.message = [];

          for (let i = 0; i < response.length; i++) {
            const blog = {
              title: response[i].title,
              keyword: response[i].keyword
            };
            this.message.push(blog);

          }
          console.log(this.message);
        },
        (error) => {
          console.error('Error al obtener las blogs:', error);
        }
      )
  };
}
