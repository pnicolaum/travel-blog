import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogCreationService } from 'src/app/core/services/blog-creation/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blogs: any[] = [];
  imageName = "";
  imageUrl = "";
  imageUrls: string[] = [];

  url = "http://localhost:3000/uploads/";
  extension = ".jpg";

  constructor(
    private router: Router,
    private blogCreationService: BlogCreationService
  ) { }


  ngOnInit(): void {
    // Obtener todos los blogs
    this.blogCreationService.getAllBlogs().subscribe((blogs) => {
      this.blogs = blogs;


      this.blogs.forEach((blog) => {
        // Crear rutas para cada blog
        this.router.config.unshift({
          path: `blogs/${blog.keyword}`,
          component: BlogDetailComponent,
          data: { blog },

        });

        // Guarda Url para imagenes
        const imageName = blog.keyword; // nombre del titulo
        const encodedImageName = encodeURIComponent(imageName);
        const imageUrl = this.url + encodedImageName + this.extension;
        this.imageUrls.push(imageUrl.replace(/%20/g, ""));
      });

      //console.log(this.imageUrls);
    });
  }



}


