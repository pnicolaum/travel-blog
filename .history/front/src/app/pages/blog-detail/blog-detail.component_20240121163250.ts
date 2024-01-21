import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogCreationService } from 'src/app/core/services/blog-creation/blog-creation.service';
import { ImageUploadService } from 'src/app/core/services/image-upload/image-upload.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blogs: any[] = [];
  imageName = "";
  imageUrl = "";

  constructor(
    private router: Router,
    private blogCreationService: BlogCreationService,
    private imageUploadService: ImageUploadService
  ) { }

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


        // console.log(blog);
        // console.log(blog.title);
        // console.log(blog[0]);
        // this.imageName = blog.title;
        this.imageName = blog.title;

        this.imageUploadService.getImageByName(this.imageName)
          .subscribe(
            (response) => {
              console.log(this.imageName);
              console.log(response[0]);
              console.log(response[0].imageUrl);
              this.imageUrl = response[0].imageUrl;
            },
            (error) => {
              console.error('Error al obtener la imagen', error);
            }
          )

      });

    });



  }


}


