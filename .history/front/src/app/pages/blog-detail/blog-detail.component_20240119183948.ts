import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogCreationService } from 'src/app/core/services/blog-creation/blog-creation.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blogs: any[] = [];

  constructor(
    private router: Router,
    private blogCreationService: BlogCreationService
  ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     const title = params['title'];
  //     // Realiza una solicitud HTTP para obtener los detalles del blog por el título
  //     this.blogCreationService.getBlogByTitle(title).subscribe((blog) => {
  //       this.blog = blog;
  //     });
  //   });
  // }

  ngOnInit(): void {
    // Obtener todos los blogs
    this.blogCreationService.getAllBlogs().subscribe((blogs) => {
      this.blogs = blogs;

      // Crear rutas para cada blog
      this.blogs.forEach((blog) => {
        this.router.config.unshift({
          path: `blogs/${blog.title}`,
          component: BlogDetailComponent,
          data: { blog },
        });
      });
    });
  }
}

}
