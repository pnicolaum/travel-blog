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

  url = "http://localhost:80/uploads/";
  extension = ".jpg";

  allBlogs: any[] | undefined;
  allContinents: string[] | undefined;
  allCountries: string[] | undefined;
  allDays: string[] | undefined;
  continentSelect = null;
  countrySelect = null;
  daysSelect = null;


  constructor(
    private router: Router,
    private blogService: BlogService
  ) { }


  ngOnInit(): void {
    // Obtener todos los blogs
    this.blogService.getAllBlogs()
      .subscribe((blogs) => {
        this.blogs = blogs;
        this.allBlogs = blogs;
        this.allContinents = Array.from(new Set(blogs.map((blog: { continent: any; }) => String(blog.continent))));
        this.allCountries = Array.from(new Set(blogs.map((blog: { country: any; }) => String(blog.country))));
        this.allDays = Array.from(new Set(blogs.map((blog: { days: any; }) => String(blog.days))));

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
  getBlogsByFilter() {
    const data = {
      continent: this.continentSelect,
      country: this.countrySelect,
      days: this.daysSelect,
    };

    this.blogService.getBlogsByFilter(data)
      .subscribe(
        (response) => {
          this.blogs = response;

          this.regenerateImageUrls();
        },
        (error) => {
          console.log(error);
        }
      );

  }

  regenerateImageUrls() {
    this.imageUrls = [];
    this.blogs.forEach((blog) => {
      const imageName = blog.keyword;
      const encodedImageName = encodeURIComponent(imageName);
      const imageUrl = this.url + encodedImageName + this.extension;
      this.imageUrls.push(imageUrl.replace(/%20/g, ""));
    });
  };

  resetFilters() {
    this.continentSelect = null;
    this.countrySelect = null;
    this.daysSelect = null;

    // Luego, vuelves a obtener todos los blogs
    this.blogService.getAllBlogs()
      .subscribe((blogs) => {
        this.blogs = blogs;
        // Regenera las rutas de las imágenes después de obtener todos los blogs
        this.regenerateImageUrls();
      });
  }




}


