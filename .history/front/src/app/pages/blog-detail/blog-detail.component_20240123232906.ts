import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/core/services/blog/blog.service';

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

  allBlogs: any[] | undefined;
  continentSelect = "";
  countrySelect = "";


  constructor(
    private router: Router,
    private blogService: BlogService
  ) { }


  ngOnInit(): void {
    // Obtener todos los blogs
    this.blogService.getAllBlogs()
      .subscribe((blogs) => {
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
      });
  }

  //filter
  getBlogsByContinent() {
    this.blogService.getBlogsByContinent(this.continentSelect)
      .subscribe(
        (response) => {
          this.blogs = response;
          console.log(response);

        },
        (error) => {
          console.log(error);
        }
      );
  };

  //filter
  getBlogsByCountry() {
    if (this.allBlogs != undefined) {
      this.blogs = this.allBlogs.filter(blog => blog.country === this.countrySelect);
      console.log(this.blogs); // Para verificar en la consola
    }
    this.blogService.getBlogsByCountry(this.countrySelect)
      .subscribe(
        (response) => {


          console.log(response);

        },
        (error) => {
          console.log(error);
        }
      );
  };

  getUniqueCountries(): string[] {
    const uniqueCountries = Array.from(new Set(this.blogs.map(blog => blog.country)));
    return uniqueCountries;
  }


}


