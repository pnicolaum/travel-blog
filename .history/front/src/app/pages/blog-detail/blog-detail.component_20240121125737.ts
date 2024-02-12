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
      });
    });
  }

  getImageUrl(imageName: string): string {
    // Puedes ajustar la URL base según tu configuración
    return `/api/v1/blogs/get-image/${imageName}`;
  }

  // getImageByName(imageName: string): void {
  //   this.imageUploadService.getImageByName(imageName).subscribe(
  //     (data: any) => {
  //       this.imageName = data;
  //     },
  //     (error) => {
  //       console.error('Error al cargar las imágenes', error);
  //     }
  //   );
  // }


  // Método para navegar a la página del blog sin cambiar la URL
  // navigateToBlog(title: string): void {
  //   this.router.navigateByUrl(`/blogs/${title}`, { skipLocationChange: true });
  // }



}


